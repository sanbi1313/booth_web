function Dot({ color }) {
  return <span style={{ width: 9, height: 9, borderRadius: '50%', background: color, display: 'inline-block' }} />
}

export default function StatusBar({ presaleOpen }) {
  return (
    <div
      style={{
        background: '#fbfbfe',
        borderBottom: '1px solid #e9ecf5',
        padding: '16px 26px',
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap',
      }}
    >
      {presaleOpen ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Dot color="#66c19a" />
          <span style={{ fontSize: 14, color: '#474e60' }}>
            선입금 <b style={{ color: '#3a4152' }}>오픈중</b>
          </span>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Dot color="#c5c9d6" />
          <span style={{ fontSize: 14, color: '#9098ab' }}>선입금 준비중</span>
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Dot color="#66c19a" />
        <span style={{ fontSize: 14, color: '#474e60' }}>
          참가 작가 <b style={{ color: '#3a4152' }}>8팀 확정</b>
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Dot color="#93a9dd" />
        <span style={{ fontSize: 14, color: '#474e60' }}>
          신간 <b style={{ color: '#3a4152' }}>입고 진행중</b>
        </span>
      </div>
    </div>
  )
}
