import { useState, useEffect } from 'react';

export function GNB() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 200, 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    '문화행사',
    '추천코스',
    '여행지',
    'E-관광안내소',
    '강남페스티벌',
  ];

  const r = Math.round(255 * scrollProgress);
  const g = Math.round(255 * scrollProgress);
  const b = Math.round(255 * scrollProgress);
  const bgColor = `rgba(${r}, ${g}, ${b}, ${0.5 + 0.5 * scrollProgress})`;

  const tr = Math.round(255 * (1 - scrollProgress));
  const tg = Math.round(255 * (1 - scrollProgress));
  const tb = Math.round(255 * (1 - scrollProgress));
  const textColor = `rgb(${tr}, ${tg}, ${tb})`;
  const strokeColor = textColor;

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: bgColor,
        height: 80,
        padding: '0 80px',
        boxShadow: `0 4px 20px rgba(0, 0, 0, ${0.3 - 0.2 * scrollProgress})`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          height: '100%',
        }}
      >
        {/* 로고 */}
        <a href="/" style={{ flexShrink: 0, position: 'relative', width: 50, height: 50 }}>
          <img
            src="/images/logo-visit-gangnam.png"
            alt="Visit Gangnam"
            style={{ width: 50, height: 50, position: 'absolute', top: 0, left: 0, opacity: 1 - scrollProgress }}
          />
          <img
            src="/images/image-33.png"
            alt="Visit Gangnam"
            style={{ width: 50, height: 50, position: 'absolute', top: 0, left: 0, opacity: scrollProgress }}
          />
        </a>

        {/* 네비게이션 메뉴 */}
        <ul
          style={{
            display: 'flex',
            gap: 0,
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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 180,
                  color: textColor,
                  textDecoration: 'none',
                  fontSize: 18,
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  opacity: 0.92,
                  transition: 'opacity 0.2s, color 0.3s',
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
              color: textColor,
              fontSize: 18,
              fontWeight: 400,
              cursor: 'pointer',
              opacity: 0.92,
              padding: 0,
              transition: 'color 0.3s',
            }}
          >
            <img src="/images/icon-global.svg" alt="" style={{ width: 18, height: 18 }} />
            한국어
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 0.3s' }} />
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
                stroke={strokeColor}
                strokeWidth="2"
                style={{ transition: 'stroke 0.3s' }}
              />
              <path
                d="M16.0078 16.083L20.0078 20.083"
                stroke={strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
                style={{ transition: 'stroke 0.3s' }}
              />
            </svg>
            <span style={{ color: textColor, fontSize: 18, fontWeight: 400, opacity: 0.92, transition: 'color 0.3s' }}>
              검색
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
