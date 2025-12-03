import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Speisekarte from './pages/Speisekarte'
import Aubrac from './pages/Aubrac'
import Hofladen from './pages/Hofladen'
import Kontakt from './pages/Kontakt'
import Hof from './pages/Hof'
import Hotel from './pages/Hotel'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function App() {
  return (
    <div className="min-h-screen bg-hof-cream">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/speisekarte" element={<Speisekarte />} />
          <Route path="/aubrac" element={<Aubrac />} />
          <Route path="/hofladen" element={<Hofladen />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/hof" element={<Hof />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
