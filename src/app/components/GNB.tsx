export function GNB() {
  const navItems = [
    '문화행사',
    '추천코스',
    '여행지',
    'E-관광안내소',
    '강남페스티벌',
  ];

  return (
    <nav
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 65%, transparent 100%)',
        padding: '18px 40px 28px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          maxWidth: 1280,
          margin: '0 auto',
        }}
      >
        {/* 로고 */}
        <a href="/" style={{ flexShrink: 0 }}>
          <img
            src="/images/logo-visit-gangnam.png"
            alt="Visit Gangnam"
            style={{ height: 32 }}
          />
        </a>

        {/* 네비게이션 메뉴 */}
        <ul
          style={{
            display: 'flex',
            gap: 48,
            listStyle: 'none',
            margin: 0,
            padding: 0,
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  opacity: 0.92,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.92'; }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* 오른쪽: 언어 + 검색 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            flexShrink: 0,
          }}
        >
          {/* 언어 설정 */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              opacity: 0.92,
              padding: 0,
            }}
          >
            <img src="/images/icon-global.svg" alt="" style={{ width: 18, height: 18 }} />
            한국어
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* 검색 */}
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M10.9625 17.8359C14.4799 17.8359 17.3313 14.9845 17.3313 11.4672C17.3313 7.94978 14.4799 5.09839 10.9625 5.09839C7.44515 5.09839 4.59375 7.94978 4.59375 11.4672C4.59375 14.9845 7.44515 17.8359 10.9625 17.8359Z"
                stroke="#fff"
                strokeWidth="2"
              />
              <path
                d="M16.0078 16.083L20.0078 20.083"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span style={{ color: '#fff', fontSize: 14, fontWeight: 500, opacity: 0.92 }}>
              검색
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
