// 무한 스크롤 상태 상자. 모양은 prototype/feed-d.html 맨 아래 상태 예시를 따름
export type FeedStatusKind = 'initial' | 'loading' | 'end' | 'error'

type FeedStatusProps = {
  kind: FeedStatusKind
  onRetry: () => void
}

function Loader() {
  return (
    <div className="loader" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

function FeedStatus({ kind, onRetry }: FeedStatusProps) {
  if (kind === 'initial' || kind === 'loading') {
    return (
      <div className="state" role="status">
        <Loader />
        <p>{kind === 'initial' ? '빵을 굽는 중이에요…' : '다음 빵을 꺼내는 중…'}</p>
      </div>
    )
  }

  if (kind === 'end') {
    return (
      <div className="state state--end">
        <span className="state__icon" aria-hidden="true">✳</span>
        <p>오늘 빵은 여기까지예요</p>
      </div>
    )
  }

  return (
    <div className="state state--error" role="alert">
      <p>빵이 타버렸어요. 다시 시도해 주세요</p>
      <button className="retry" type="button" onClick={onRetry}>
        다시 굽기
      </button>
    </div>
  )
}

export default FeedStatus
