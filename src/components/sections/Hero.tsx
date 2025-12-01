import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReservationModal from '../ui/ReservationModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Warm Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2874&auto=format&fit=crop"
            alt="Restaurant Atmosphäre"
            className="w-full h-full object-cover"
          />
          {/* Warm gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(26, 61, 46, 0.85) 0%, rgba(21, 47, 36, 0.75) 50%, rgba(15, 32, 24, 0.9) 100%)',
            }}
          />
          {/* Subtle texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Text Content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{
                  background: 'rgba(201, 162, 39, 0.15)',
                  border: '1px solid rgba(201, 162, 39, 0.3)',
                }}
              >
                <span className="w-2 h-2 bg-hof-gold rounded-full animate-pulse" />
                <span className="text-hof-gold text-sm font-medium">Seit 1500 in Familienbesitz</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
              >
                Willkommen auf
                <span 
                  className="block mt-2"
                  style={{
                    background: 'linear-gradient(135deg, #c9a227 0%, #e8c547 50%, #c9a227 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Hof & Gut
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-lg"
              >
                Regionale Hofküche unter historischem Reetdach. 
                Eigene Aubrac-Rinder, frische Zutaten vom Feld – 
                und ein Ort, an dem Gastfreundschaft gelebt wird.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="group flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #8B4513 0%, #a65d2e 100%)',
                    boxShadow: '0 4px 20px rgba(139, 69, 19, 0.4)',
                  }}
                  whileHover={{ 
                    y: -3, 
                    boxShadow: '0 8px 30px rgba(139, 69, 19, 0.5)' 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone size={18} />
                  Tisch reservieren
                </motion.button>

                <Link
                  to="/speisekarte"
                  className="group flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <UtensilsCrossed size={18} />
                  Speisekarte
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>

              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10"
              >
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Öffnungszeiten</p>
                  <p className="text-white/80 text-sm">Do–So ab 17:30</p>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Telefon</p>
                  <a href="tel:+494181217070" className="text-white/80 text-sm hover:text-hof-gold transition-colors">
                    04181 / 217070
                  </a>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Lage</p>
                  <p className="text-white/80 text-sm">Lüneburger Heide</p>
                </div>
              </motion.div>
            </div>

            {/* Right: Feature Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div 
                className="relative p-8 rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
                {/* Card Image */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2940&auto=format&fit=crop"
                    alt="Gericht"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card Content */}
                <div>
                  <p className="text-hof-gold text-sm font-medium mb-2">Unser Highlight</p>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    Aubrac Rindersteak
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Dry Aged für 28 Tage, von unseren eigenen Weiden. 
                    Serviert mit saisonalen Beilagen aus dem Hofladen.
                  </p>
                </div>

                {/* Decorative Element */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20"
                  style={{
                    background: 'radial-gradient(circle, #c9a227 0%, transparent 70%)',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#philosophie"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-white/30 hover:text-white/50 transition-colors"
          >
            <span className="text-xs uppercase tracking-wider">Entdecken</span>
            <ChevronDown size={20} />
          </motion.a>
        </motion.div>
      </section>

      {/* Reservation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <ReservationModal onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
