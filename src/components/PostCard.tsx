import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
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
  const [photoIndex, setPhotoIndex] = useState(0)
  const isLong = post.content.length > LONG_CONTENT_LENGTH
  const clamped = isLong && !expanded
  const isMultiple = post.images.length > 1
  const photoAlt = `${post.author}님의 빵 사진`

  return (
    <article className="card">
      <div className="card__head">
        <span className="avatar">{post.author[0]}</span>
        <span className="chip">{post.author}</span>
        <span className="chip chip--time">{timeAgo(post.created_at)}</span>
        <span className="card__star" aria-hidden="true">✳</span>
      </div>

      {/* 사진 1장: 캐러셀 없이 사진만. 여러 장: swiper 로 넘기고 몇 번째인지 표시 */}
      <div className="media">
        {isMultiple ? (
          <>
            <Swiper grabCursor onSlideChange={(swiper) => setPhotoIndex(swiper.activeIndex)}>
              {post.images.map((src, i) => (
                <SwiperSlide key={src}>
                  <img src={src} alt={`${photoAlt} ${i + 1}`} loading="lazy" />
                </SwiperSlide>
              ))}
            </Swiper>
            <span className="media__count">
              {photoIndex + 1} / {post.images.length}
            </span>
          </>
        ) : (
          <img src={post.images[0]} alt={photoAlt} loading="lazy" />
        )}
      </div>
      {isMultiple && (
        <div className="dots" aria-label={`${post.images.length}장 중 ${photoIndex + 1}번째 사진`}>
          {post.images.map((src, i) => (
            <span key={src} className={i === photoIndex ? 'dot dot--active' : 'dot'} />
          ))}
        </div>
      )}

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
