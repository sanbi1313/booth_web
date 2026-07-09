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
      style={{
        background: '#ffffff',
        padding: '16px 26px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #e9ecf5',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ display: 'flex', gap: 7 }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#f0a9b8' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#f2d59a' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#a6d6b0' }} />
        </div>
        <button
          onClick={onGoHome}
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
      <nav style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
        {isArtist && (
          <button onClick={onGoHome} style={pillButtonStyle}>
            ← 목록
          </button>
        )}
        <button onClick={onToggleNotice} style={pillButtonStyle}>
          공지
        </button>
        <button onClick={onToggleStatus} style={pillButtonStyle}>
          현황
        </button>
        <span
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
