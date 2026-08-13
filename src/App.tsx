import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Home from './pages/Home'
import Styles from './pages/Styles'
import Methodology from './pages/Methodology'
import Sponsor from './pages/Sponsor'
import Releases from './pages/Releases'
import { Header, Footer } from './components/Chrome'
import { DefinePopover } from './components/DefinePopover'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styles" element={<Styles />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/releases" element={<Releases />} />
        </Routes>
      </div>
      <Footer />
      <DefinePopover />
    </div>
  )
}
