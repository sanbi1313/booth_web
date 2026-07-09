import { useState } from 'react'
import Header from './components/Header'
import NoticeBar from './components/NoticeBar'
import StatusBar from './components/StatusBar'
import Home from './components/Home'
import ArtistDetail from './components/ArtistDetail'
import EventSection from './components/EventSection'
import { artists, presaleOpen } from './data/artists'

export default function App() {
  const [view, setView] = useState(null)
  const [menu, setMenu] = useState(null)

  const goHome = () => {
    setView(null)
    setMenu(null)
  }

  const openArtist = (key) => {
    setView(key)
    setMenu(null)
  }

  const openEvent = () => {
    setView('event')
    setMenu(null)
  }

  const toggleNotice = () => setMenu((m) => (m === 'notice' ? null : 'notice'))
  const toggleStatus = () => setMenu((m) => (m === 'status' ? null : 'status'))

  const art = view === null || view === 'event' ? null : artists.find((a) => a.key === view)

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '36px 20px 64px' }}>
      <div
        style={{
          background: '#eef0f7',
          borderRadius: 32,
          overflow: 'hidden',
          boxShadow: '0 30px 70px rgba(90,100,150,.18)',
        }}
      >
        <Header
          isArtist={view !== null}
          onGoHome={goHome}
          onToggleNotice={toggleNotice}
          onToggleStatus={toggleStatus}
        />
        {menu === 'notice' && <NoticeBar />}
        {menu === 'status' && <StatusBar presaleOpen={presaleOpen} />}
        {view === null && <Home onOpenArtist={openArtist} onOpenEvent={openEvent} />}
        {view === 'event' && <EventSection onGoHome={goHome} />}
        {art !== null && <ArtistDetail art={art} onGoHome={goHome} />}
      </div>
    </div>
  )
}
