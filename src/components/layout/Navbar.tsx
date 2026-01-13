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
  { name: 'Hotel', href: '/hotel', comingSoon: true },
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
  const isLightHeaderPage = location.pathname === '/hotel';
  const headerSolid = scrolled || isLightHeaderPage;

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
            background: headerSolid ? 'rgba(250, 248, 245, 0.98)' : 'transparent',
            backdropFilter: headerSolid ? 'blur(12px)' : 'none',
            boxShadow: headerSolid ? '0 4px 30px rgba(44, 44, 44, 0.08)' : 'none',
          }}
        />
        
        <div className={`relative transition-all duration-500 ease-out ${headerSolid ? 'py-3' : 'py-5'}`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between">
              
              {/* Logo */}
              <Link to="/" className="group relative z-10 flex items-center gap-3">
                <img 
                  src="/images/logo-icon.png" 
                  alt="Hof & Gut Jesteburg" 
                  className="h-10 w-auto transition-all duration-300 group-hover:scale-110"
                />
                <div className="flex flex-col">
                  <span 
                    className="font-display text-xl font-bold transition-colors duration-300"
                    style={{ color: headerSolid ? '#7a9b8e' : '#faf8f5' }}
                  >
                    Hof & Gut
                  </span>
                  <span 
                    className="text-[9px] font-medium tracking-[0.2em] uppercase transition-colors duration-300"
                    style={{ color: headerSolid ? '#722F37' : 'rgba(250, 248, 245, 0.7)' }}
                  >
                    Jesteburg
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navigation.map((item) => {
                  const isHotel = item.name === 'Hotel';
                  const baseColor = headerSolid 
                    ? (isActive(item.href) ? '#722F37' : '#2C2C2C')
                    : (isActive(item.href) ? '#ffffff' : 'rgba(255,255,255,0.8)');
                  const color = isHotel
                    ? (scrolled ? 'rgba(44,44,44,0.5)' : 'rgba(255,255,255,0.5)')
                    : baseColor;

                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md"
                      style={{ color }}
                    >
                      <span className={`relative z-10 transition-colors duration-300 ${isHotel ? 'cursor-default' : 'hover:text-hof-bordeaux'}`}>
                        {item.name}
                        {isHotel && (
                          <span className="ml-1 text-[10px] uppercase tracking-[0.2em] text-hof-cream/40">
                            bald
                          </span>
                        )}
                      </span>
                      {isActive(item.href) && !isHotel && (
                        <motion.div 
                          layoutId="navbar-underline" 
                          className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-colors duration-500"
                          style={{ background: headerSolid ? '#722F37' : '#faf8f5' }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* CTA - Reservieren */}
              <div className="hidden lg:flex items-center">
                <div 
                  className="transition-all duration-500 ease-out"
                  style={{
                    opacity: headerSolid ? 1 : 0,
                    transform: headerSolid ? 'translateX(0)' : 'translateX(20px)',
                    pointerEvents: headerSolid ? 'auto' : 'none',
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
                  color: headerSolid ? '#2C2C2C' : '#faf8f5',
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
                          item.name === 'Hotel'
                            ? 'text-hof-charcoal/50 border border-dashed border-hof-sage/60 bg-hof-sage/20'
                            : isActive(item.href) 
                              ? 'bg-hof-sage text-hof-bordeaux' 
                              : 'text-hof-charcoal hover:bg-hof-sage/50'
                        }`}
                      >
                        <span className="flex items-center justify-between gap-2">
                          <span>{item.name}</span>
                          {item.name === 'Hotel' && (
                            <span className="text-xs uppercase tracking-[0.18em] text-hof-charcoal/60">bald</span>
                          )}
                        </span>
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
