const pillButtonStyle = {
  border: 'none',
  cursor: 'pointer',
  background: '#f1f3fa',
  color: '#5f74b8',
  fontFamily: "'Jua'",
  fontSize: 14,
  padding: '8px 15px',
  borderRadius: 999,
}

export default function Header({ isArtist, onGoHome, onToggleNotice, onToggleStatus }) {
  return (
    <header
      className="cc-header"
      style={{
        background: '#ffffff',
        padding: '16px 26px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        rowGap: 10,
        borderBottom: '1px solid #e9ecf5',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 7, flexShrink: 0 }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#f0a9b8' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#f2d59a' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#a6d6b0' }} />
        </div>
        <button
          onClick={onGoHome}
          className="cc-logo"
          style={{
            border: 'none',
            cursor: 'pointer',
            background: 'transparent',
            fontFamily: "'Jua'",
            fontSize: 16,
            color: '#3a4152',
            padding: 0,
          }}
        >
          끝나고 회식해요
        </button>
      </div>
      <nav className="cc-nav" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 7 }}>
        {isArtist && (
          <button onClick={onGoHome} className="cc-pill" style={pillButtonStyle}>
            ← 목록
          </button>
        )}
        <button onClick={onToggleNotice} className="cc-pill" style={pillButtonStyle}>
          공지
        </button>
        <button onClick={onToggleStatus} className="cc-pill" style={pillButtonStyle}>
          현황
        </button>
        <span
          className="cc-badge"
          style={{
            background: '#93a9dd',
            color: '#fff',
            fontFamily: "'Jua'",
            fontSize: 13,
            padding: '8px 14px',
            borderRadius: 999,
          }}
        >
          코믹월드 SUMMER 2026
        </span>
      </nav>
    </header>
  )
}
