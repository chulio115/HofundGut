import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Speisekarte', href: '/speisekarte' },
  { name: 'Aubrac Rinder', href: '/aubrac' },
  { name: 'Der Hof', href: '/hof' },
  { name: 'Übernachten', href: '/uebernachten' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2'
          : 'py-4'
      }`}
    >
      {/* Gradient Background */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled 
            ? 'opacity-100' 
            : 'opacity-95'
        }`}
        style={{
          background: 'linear-gradient(135deg, #1a3d2e 0%, #152f24 50%, #0f2018 100%)',
        }}
      />
      
      {/* Gold Accent Line */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{
          background: 'linear-gradient(90deg, #8B4513 0%, #c9a227 50%, #8B4513 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo with Glassmorphism */}
          <Link 
            to="/" 
            className="flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-white leading-none">
                Hof & Gut
              </span>
              <span className="text-[10px] font-medium text-hof-gold tracking-[0.2em] uppercase">
                Jesteburg
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-white bg-white/15'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-hof-gold rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="tel:+494181217070"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #8B4513 0%, #a65d2e 100%)',
                boxShadow: '0 4px 15px rgba(139, 69, 19, 0.3)',
              }}
              whileHover={{ 
                y: -2, 
                boxShadow: '0 6px 20px rgba(139, 69, 19, 0.4)' 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={16} className="text-white" />
              <span className="text-white">Reservieren</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-lg text-white transition-colors"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #152f24 0%, #1a3d2e 100%)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive(link.href)
                        ? 'bg-white/15 text-white'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.a
                href="tel:+494181217070"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-2 mt-4 px-6 py-3.5 rounded-xl text-base font-semibold text-white"
                style={{
                  background: 'linear-gradient(135deg, #8B4513 0%, #a65d2e 100%)',
                }}
              >
                <Phone size={18} />
                Tisch reservieren
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
