const rowStyle = { display: 'flex', gap: 10, alignItems: 'flex-start' }
const textStyle = { fontSize: 14, color: '#474e60' }

export default function NoticeBar() {
  return (
    <div
      style={{
        background: '#fbfbfe',
        borderBottom: '1px solid #e9ecf5',
        padding: '16px 26px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <div style={rowStyle}>
        <span style={{ color: '#93a9dd' }}>●</span>
        <span style={textStyle}>서울 코믹월드 SUMMER 2026 · 2026.07.18(토) – 07.19(일) 참가합니다.</span>
      </div>
      <div style={rowStyle}>
        <span style={{ color: '#93a9dd' }}>●</span>
        <span style={textStyle}>각 작가별 굿즈 선입금은 부스 페이지의 witchform 링크에서 신청해 주세요.</span>
      </div>
    </div>
  )
}
