import { eventCardImages, eventPeriod, eventCondition } from '../data/eventCards'

export default function EventSection() {
  return (
    <div
      style={{
        background: '#fbfbfe',
        borderBottom: '1px solid #e9ecf5',
        padding: '26px 34px 36px',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          gap: 10,
          alignItems: 'center',
          background: '#e7ebf6',
          color: '#5f74b8',
          fontSize: 13,
          padding: '7px 16px',
          borderRadius: 999,
          marginBottom: 14,
        }}
      >
        🎁 랜덤 카드 무료 배포
      </div>
      <div style={{ fontFamily: "'Jua'", fontSize: 18, color: '#3a4152', lineHeight: 1.5, marginBottom: 10 }}>
        7월 서코 7/18~7/19 일정 가격 이상 구매 시 랜덤 카드뽑기 이벤트
      </div>
      <div style={{ fontSize: 14, color: '#6b7488', lineHeight: 1.8, marginBottom: 22 }}>
        <div>기간 : {eventPeriod}, 서울 코믹월드 SUMMER 2026 현장 한정</div>
        <div>참여 조건 : {eventCondition}</div>
        <div>수량 소진 시 조기 종료될 수 있어요.</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 16 }}>
        <span style={{ fontFamily: "'Jua'", fontSize: 17, color: '#353c4d' }}>배포 카드 목록</span>
        <span style={{ fontSize: 12, color: '#a6adc2', fontFamily: "'Baloo 2'", letterSpacing: '.06em' }}>
          RANDOM CARDS · {eventCardImages.length}종
        </span>
      </div>
      <div className="cc-event-grid">
        {eventCardImages.map((src, i) => (
          <div
            key={src}
            className="cc-card cc-event-card"
            style={{
              background: '#fff',
              borderRadius: 18,
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(90,100,150,.09)',
            }}
          >
            <img
              src={src}
              alt={`랜덤 카드 ${i + 1}`}
              style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', display: 'block', background: '#eef0f7' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
