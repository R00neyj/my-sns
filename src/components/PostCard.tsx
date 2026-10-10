import { useState } from 'react'
import type { Post } from '../data/samplePosts'

// 이 글자 수를 넘으면 3줄까지만 보여주고 "더 보기" 버튼을 붙인다
const LONG_CONTENT_LENGTH = 80

function timeAgo(createdAt: string): string {
  const minutes = Math.floor((Date.now() - new Date(createdAt).getTime()) / 60000)
  if (minutes < 1) return '방금 전'
  if (minutes < 60) return `${minutes}분 전`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}시간 전`
  return `${Math.floor(hours / 24)}일 전`
}

type PostCardProps = {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  const [expanded, setExpanded] = useState(false)
  const isLong = post.content.length > LONG_CONTENT_LENGTH
  const clamped = isLong && !expanded

  return (
    <article className="card">
      <div className="card__head">
        <span className="avatar">{post.author[0]}</span>
        <span className="chip">{post.author}</span>
        <span className="chip chip--time">{timeAgo(post.created_at)}</span>
        <span className="card__star" aria-hidden="true">✳</span>
      </div>

      {/* 사진은 첫 장만 */}
      <div className="media">
        <img src={post.images[0]} alt={`${post.author}님의 빵 사진`} loading="lazy" />
      </div>

      <div className="card__body">
        <p className={clamped ? 'card__content card__content--clamp' : 'card__content'}>
          {post.content}
        </p>
        {isLong && (
          <button className="more" type="button" onClick={() => setExpanded(!expanded)}>
            {expanded ? '접기' : '더 보기'}
          </button>
        )}
      </div>
    </article>
  )
}

export default PostCard
