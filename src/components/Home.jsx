import { logoSrc, heroBgSrc, artists } from '../data/artists'

export default function Home({ onOpenArtist }) {
  return (
    <div>
      <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg,#ffffff, #eef0f7)' }}>
        <img
          src={heroBgSrc}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            opacity: 0.28,
            WebkitMaskImage: 'linear-gradient(180deg,#000 0%,#000 38%,transparent 88%)',
            maskImage: 'linear-gradient(180deg,#000 0%,#000 38%,transparent 88%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, padding: '40px 34px 30px', textAlign: 'center' }}>
          <img
            src={logoSrc}
            alt="끝나고 회식해요"
            style={{ maxWidth: 440, width: '82%', height: 'auto', margin: '0 auto 18px' }}
          />
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
            서울 코믹월드 SUMMER 2026 · 07.18 – 07.19
          </div>
          <div style={{ fontSize: 14, color: '#6b7488', lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
            여러 작가가 함께하는 연합 부스입니다.
            <br />
            아래에서 부스를 선택하면 부스 인포와 굿즈, 선입금 안내를 볼 수 있어요.
          </div>
        </div>
      </div>

      <div style={{ padding: '6px 34px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 16 }}>
          <span style={{ fontFamily: "'Jua'", fontSize: 21, color: '#353c4d' }}>참여 부스</span>
          <span style={{ fontSize: 12, color: '#a6adc2', fontFamily: "'Baloo 2'", letterSpacing: '.06em' }}>BOOTHS</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
          {artists.map((ar) => (
            <button
              key={ar.key}
              className="cc-card"
              onClick={() => onOpenArtist(ar.key)}
              style={{
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                background: '#fff',
                borderRadius: 22,
                padding: 0,
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(90,100,150,.09)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ height: 8, background: `linear-gradient(90deg,${ar.c1},${ar.c2})` }} />
              <div className="cc-booth-card-body" style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={ar.av}
                  alt={ar.artist}
                  className="cc-booth-avatar"
                  style={{ borderRadius: 20, objectFit: 'cover', flex: 'none', background: '#eef0f7' }}
                />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
                  <div className="cc-booth-title" style={{ fontFamily: "'Jua'", color: '#3a4152', lineHeight: 1.2 }}>{ar.booth}</div>
                  <div style={{ fontSize: 13, color: '#8890a4' }}>{ar.artist}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 3 }}>
                    <span
                      style={{
                        fontSize: 11,
                        color: '#5f74b8',
                        background: '#eef0f7',
                        padding: '3px 10px',
                        borderRadius: 999,
                        fontFamily: "'Baloo 2'",
                        fontWeight: 600,
                      }}
                    >
                      {ar.code}
                    </span>
                    <span style={{ width: 11, height: 11, borderRadius: '50%', background: ar.c1 }} />
                    <span style={{ width: 11, height: 11, borderRadius: '50%', background: ar.c2 }} />
                  </div>
                </div>
                <span style={{ flex: 'none', color: '#b0b7cb', fontSize: 18 }}>→</span>
              </div>
            </button>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 30, fontSize: 12, color: '#b0b7cb' }}>
          끝나고 회식해요 · 서울 코믹월드 SUMMER 2026
        </div>
      </div>
    </div>
  )
}
