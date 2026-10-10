import Feed from './components/Feed'
import { samplePosts } from './data/samplePosts'
import './App.css'

function App() {
  return (
    <div className="phone">
      <header className="header">
        {/* 레퍼런스의 빵 캐릭터를 단순화한 로고. 색은 App.css 에서 지정 */}
        <svg className="header__logo" viewBox="0 0 44 44" aria-hidden="true">
          <ellipse cx="22" cy="24" rx="18" ry="16" strokeWidth="2.5" />
          <ellipse cx="22" cy="15" rx="8" ry="4" />
          <circle cx="17" cy="25" r="1.6" />
          <circle cx="27" cy="25" r="1.6" />
          <path d="M19 29 q3 3 6 0" fill="none" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div>
          <h1 className="header__name">빵지순례</h1>
          <p className="header__intro">우리 동네 빵집에서 만난 오늘의 빵을 사진으로 남겨요</p>
        </div>
      </header>

      <Feed posts={samplePosts} />
    </div>
  )
}

export default App
