import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ReservationModal from '../ui/ReservationModal';

const navigation = [
  { name: 'Restaurant', href: '/restaurant' },
  { name: 'Speisekarte', href: '/speisekarte' },
  { name: 'Die Rinder', href: '/aubrac' },
  { name: 'Der Hof', href: '/hof' },
  { name: 'Hofladen', href: '/hofladen' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.6; // 60% of viewport
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Background with smooth transition - Warm Champagne */}
        <div 
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            background: scrolled ? 'rgba(245, 239, 230, 0.98)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            boxShadow: scrolled ? '0 4px 30px rgba(44, 44, 44, 0.08)' : 'none',
          }}
        />
        
        <div className={`relative transition-all duration-500 ease-out ${scrolled ? 'py-3' : 'py-5'}`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between">
              
              {/* Logo with smooth color transition */}
              <Link to="/" className="group relative z-10">
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span 
                      className="font-display text-2xl font-bold transition-colors duration-500"
                      style={{ color: scrolled ? '#14322A' : '#F5EFE6' }}
                    >
                      Hof
                    </span>
                    <span className="font-display text-3xl font-light text-hof-gold transition-transform duration-300 group-hover:scale-110">&</span>
                    <span 
                      className="font-display text-2xl font-bold transition-colors duration-500"
                      style={{ color: scrolled ? '#14322A' : '#F5EFE6' }}
                    >
                      Gut
                    </span>
                  </div>
                  <span 
                    className="text-[10px] font-medium tracking-[0.25em] uppercase transition-colors duration-500"
                    style={{ color: scrolled ? '#4A2C2A' : 'rgba(245, 239, 230, 0.7)' }}
                  >
                    Jesteburg
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md"
                    style={{
                      color: scrolled 
                        ? (isActive(item.href) ? '#4A2C2A' : '#2C2C2C')
                        : (isActive(item.href) ? '#ffffff' : 'rgba(255,255,255,0.8)')
                    }}
                  >
                    <span className="relative z-10 transition-colors duration-300 hover:text-hof-bordeaux">
                      {item.name}
                    </span>
                    {isActive(item.href) && (
                      <motion.div 
                        layoutId="navbar-underline" 
                        className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-colors duration-500"
                        style={{ background: scrolled ? '#4A2C2A' : '#F5EFE6' }}
                      />
                    )}
                  </Link>
                ))}
              </nav>

              {/* CTA - Reservieren */}
              <div className="hidden lg:flex items-center">
                <div 
                  className="transition-all duration-500 ease-out"
                  style={{
                    opacity: scrolled ? 1 : 0,
                    transform: scrolled ? 'translateX(0)' : 'translateX(20px)',
                    pointerEvents: scrolled ? 'auto' : 'none',
                  }}
                >
                  <button
                    onClick={() => setShowReservation(true)}
                    className="px-6 py-2.5 text-sm font-semibold rounded-full bg-hof-bordeaux text-hof-cream hover:bg-hof-bordeaux-light hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Reservieren
                  </button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg transition-colors duration-300 relative z-10"
                style={{
                  color: scrolled ? '#2C2C2C' : '#F5EFE6',
                }}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-hof-charcoal/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-hof-cream shadow-2xl"
            >
              <div className="p-6 pt-20 h-full flex flex-col">
                <nav className="flex-1 space-y-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-3.5 text-lg font-medium rounded-xl transition-all duration-300 ${
                          isActive(item.href) 
                            ? 'bg-hof-sage text-hof-bordeaux' 
                            : 'text-hof-charcoal hover:bg-hof-sage/50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                
                {/* Mobile CTA */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.4 }}
                  className="pt-6 border-t border-hof-sage"
                >
                  <button
                    onClick={() => { setMobileOpen(false); setShowReservation(true); }}
                    className="block w-full text-center px-6 py-4 bg-hof-bordeaux text-hof-cream text-lg font-semibold rounded-full hover:bg-hof-bordeaux-light transition-all duration-300"
                  >
                    Tisch reservieren
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reservation Modal */}
      <AnimatePresence>
        {showReservation && <ReservationModal onClose={() => setShowReservation(false)} />}
      </AnimatePresence>
    </>
  );
}
