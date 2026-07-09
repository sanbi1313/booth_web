import { xLinks } from '../data/xlinks'

export default function ArtistDetail({ art, onGoHome }) {
  const profiles = [
    { name: art.artist, av: art.av, xLink: xLinks[art.key] },
    ...(art.coProfiles || []).map((p) => ({ name: p.name, av: p.av, xLink: xLinks[p.key] })),
  ]

  const avatarGroup = (
    <div style={{ display: 'flex', gap: 10, flex: 'none' }}>
      {profiles.map((p) => {
        const img = (
          <img
            src={p.av}
            alt={p.name}
            className="cc-artist-avatar"
            style={{ borderRadius: 26, objectFit: 'cover', flex: 'none', background: '#eef0f7' }}
          />
        )
        return p.xLink ? (
          <a key={p.av} href={p.xLink} target="_blank" rel="noreferrer" style={{ flex: 'none' }}>
            {img}
          </a>
        ) : (
          <span key={p.av} style={{ flex: 'none' }}>
            {img}
          </span>
        )
      })}
    </div>
  )

  return (
    <div>
      <div style={{ position: 'relative', padding: 34, background: `linear-gradient(135deg,${art.c1},${art.c2})` }}>
        <div
          className="cc-artist-header"
          style={{
            background: 'rgba(255,255,255,.92)',
            borderRadius: 24,
            padding: '22px 24px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 20,
            boxShadow: '0 12px 30px rgba(60,60,90,.12)',
          }}
        >
          {avatarGroup}
          <div style={{ flex: '1 1 160px', minWidth: 160, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div className="cc-artist-title" style={{ fontFamily: "'Jua'", fontSize: 26, color: '#33384a', lineHeight: 1.1 }}>{art.booth}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 14, color: '#6b7488' }}>{art.artist}</span>
              <span
                style={{
                  fontSize: 12,
                  color: '#fff',
                  padding: '4px 12px',
                  borderRadius: 999,
                  background: art.cText,
                  fontFamily: "'Baloo 2'",
                  fontWeight: 600,
                }}
              >
                {art.code}
              </span>
              <span style={{ fontSize: 12, color: '#8890a4' }}>코믹월드 SUMMER 2026</span>
            </div>
          </div>
          <a
            href={art.presale}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 'none',
              fontFamily: "'Jua'",
              fontSize: 14,
              color: '#fff',
              background: art.cText,
              padding: '12px 18px',
              borderRadius: 14,
            }}
          >
            선입금 신청 →
          </a>
        </div>
      </div>

      <div style={{ padding: '30px 34px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 16 }}>
          <span style={{ fontFamily: "'Jua'", fontSize: 20, color: '#353c4d' }}>부스 인포 · 굿즈</span>
          <span style={{ fontSize: 12, color: '#a6adc2', fontFamily: "'Baloo 2'", letterSpacing: '.06em' }}>GOODS</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center' }}>
          {art.posters.map((p) => (
            <img
              key={p}
              src={p}
              alt="부스 인포"
              style={{ width: '100%', maxWidth: 660, height: 'auto', borderRadius: 18, boxShadow: '0 8px 24px rgba(90,100,150,.12)' }}
            />
          ))}
        </div>
      </div>

      <div style={{ padding: '14px 34px 40px' }}>
        <div
          style={{
            borderRadius: 22,
            padding: 26,
            background: `linear-gradient(135deg,${art.c1},${art.c2})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 18,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontFamily: "'Jua'", fontSize: 19, color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,.15)' }}>
              굿즈 선입금 신청
            </div>
            <div style={{ fontSize: 13, color: '#fff', opacity: 0.92 }}>현장 수령 굿즈를 미리 예약하세요.</div>
          </div>
          <a
            href={art.presale}
            target="_blank"
            rel="noreferrer"
            style={{ background: '#fff', color: art.cText, fontFamily: "'Jua'", fontSize: 15, padding: '13px 22px', borderRadius: 14 }}
          >
            witchform 열기 →
          </a>
        </div>
        <div style={{ textAlign: 'center', marginTop: 26 }}>
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
            ← 부스 목록으로
          </button>
        </div>
      </div>
    </div>
  )
}
