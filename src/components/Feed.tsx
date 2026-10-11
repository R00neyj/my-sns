import { useCallback, useEffect, useRef, useState } from 'react'
import type { Post } from '../data/samplePosts'
import { fetchPosts } from '../data/fetchPosts'
import FeedStatus from './FeedStatus'
import type { FeedStatusKind } from './FeedStatus'
import PostCard from './PostCard'

type LoadStatus = 'idle' | 'loading' | 'end' | 'error'

function Feed() {
  const [posts, setPosts] = useState<Post[]>([])
  const [status, setStatus] = useState<LoadStatus>('idle')

  // state 는 다음 렌더 때 바뀌므로, 같은 요청이 두 번 나가지 않게 ref 로 바로 막음
  const isLoadingRef = useRef(false)
  const offsetRef = useRef(0)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const loadMore = useCallback(async () => {
    if (isLoadingRef.current) return
    isLoadingRef.current = true
    setStatus('loading')
    try {
      const page = await fetchPosts(offsetRef.current)
      offsetRef.current += page.posts.length
      setPosts((prev) => [...prev, ...page.posts])
      setStatus(page.hasMore ? 'idle' : 'end')
    } catch {
      setStatus('error')
    } finally {
      isLoadingRef.current = false
    }
  }, [])

  // 감시용 div 는 idle 일 때만 있음. 새로 생길 때마다 다시 관찰해서,
  // 불러온 뒤에도 목록 끝이 화면 안에 있으면 바로 다음 묶음을 부름
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (status !== 'idle' || !sentinel) return

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) loadMore()
    })
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [status, loadMore])

  let statusKind: FeedStatusKind | null = null
  if (status === 'loading') statusKind = posts.length === 0 ? 'initial' : 'loading'
  else if (status === 'end' || status === 'error') statusKind = status

  return (
    <>
      <main className="feed">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>

      {status === 'idle' && <div ref={sentinelRef} className="feed__sentinel" aria-hidden="true" />}

      {statusKind && (
        <section className="states" aria-live="polite">
          <FeedStatus kind={statusKind} onRetry={loadMore} />
        </section>
      )}
    </>
  )
}

export default Feed
