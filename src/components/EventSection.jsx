import { useState } from 'react'
import { eventCardImages, eventCardPileImage, eventPeriod, eventCondition } from '../data/eventCards'

export default function EventSection({ onGoHome }) {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <div style={{ position: 'relative', padding: 34, background: 'linear-gradient(135deg,#93a9dd,#c9d3ef)' }}>
        <div
          style={{
            background: 'rgba(255,255,255,.92)',
            borderRadius: 24,
            padding: '24px 26px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 20,
            boxShadow: '0 12px 30px rgba(60,60,90,.12)',
          }}
        >
          <div style={{ flex: '1 1 220px', minWidth: 220 }}>
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
            <div style={{ fontFamily: "'Jua'", fontSize: 20, color: '#33384a', lineHeight: 1.4, marginBottom: 12 }}>
              7월 서코 7/18~7/19 일정 가격 이상 구매 시 랜덤 카드뽑기 이벤트
            </div>
            <div style={{ fontSize: 14, color: '#6b7488', lineHeight: 1.8 }}>
              <div>기간 : {eventPeriod}, 서울 코믹월드 SUMMER 2026 현장 한정</div>
              <div>참여 조건 : {eventCondition}</div>
              <div>수량 소진 시 조기 종료될 수 있어요.</div>
            </div>
          </div>
          <div style={{ flex: 'none', textAlign: 'center' }}>
            <img src={eventCardPileImage} alt="랜덤 카드 더미" style={{ width: 140, height: 'auto', margin: '0 auto' }} />
            <div style={{ fontSize: 12, color: '#9098ab', marginTop: 6 }}>이 더미에서 랜덤으로 1장!</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '30px 34px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 16 }}>
          <span style={{ fontFamily: "'Jua'", fontSize: 20, color: '#353c4d' }}>배포 카드 목록</span>
          <span style={{ fontSize: 12, color: '#a6adc2', fontFamily: "'Baloo 2'", letterSpacing: '.06em' }}>
            RANDOM CARDS · {eventCardImages.length}종
          </span>
        </div>
        <div className="cc-event-grid">
          {eventCardImages.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelected(i)}
              className="cc-card cc-event-card"
              style={{
                border: 'none',
                cursor: 'pointer',
                padding: 0,
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
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(30,34,50,.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: 24,
              padding: 20,
              maxWidth: 340,
              width: '100%',
              boxShadow: '0 24px 60px rgba(0,0,0,.28)',
              textAlign: 'center',
            }}
          >
            <img
              src={eventCardImages[selected]}
              alt={`랜덤 카드 ${selected + 1}`}
              style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: 16, background: '#eef0f7' }}
            />
            <div style={{ fontFamily: "'Jua'", fontSize: 15, color: '#3a4152', marginTop: 14 }}>
              랜덤 카드 {selected + 1}
            </div>
            <button
              onClick={() => setSelected(null)}
              style={{
                border: 'none',
                cursor: 'pointer',
                marginTop: 16,
                background: '#f7d478',
                color: '#7a4a1e',
                fontFamily: "'Jua'",
                fontSize: 14,
                padding: '10px 26px',
                borderRadius: 999,
              }}
            >
              닫기
            </button>
          </div>
        </div>
      )}

      <div style={{ textAlign: 'center', padding: '14px 34px 40px' }}>
        <button
          onClick={onGoHome}
          style={{
            border: 'none',
            cursor: 'pointer',
            background: '#eef0f7',
            color: '#5f74b8',
            fontFamily: "'Jua'",
            fontSize: 14,
            padding: '11px 22px',
            borderRadius: 999,
          }}
        >
          ← 홈으로
        </button>
      </div>
    </div>
  )
}
