import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReservationModal from '../ui/ReservationModal';

export default function Hero() {
  const [showReservation, setShowReservation] = useState(false);

  return (
    <>
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
          alt="Hof & Gut Landschaft"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-hof-forest/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-hof-gold text-sm sm:text-base font-semibold tracking-[0.3em] uppercase mb-6"
        >
          Lüneburger Heide · Seit 1500
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8"
        >
          Willkommen bei
          <br />
          <span className="text-hof-cream">Hof & Gut</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl lg:text-3xl text-white/85 font-light leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          Ehrliche Küche vom eigenen Hof.
          <br className="hidden sm:block" />
          Ein Abend, der sich anfühlt wie bei guten Freunden.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setShowReservation(true)}
            className="inline-flex items-center gap-3 px-10 py-4 text-lg font-semibold text-hof-forest bg-hof-gold rounded-full transition-all duration-300 hover:bg-hof-gold-light hover:shadow-2xl hover:-translate-y-1"
          >
            Tisch reservieren
          </button>
          <Link
            to="/speisekarte"
            className="inline-flex items-center gap-3 px-10 py-4 text-lg font-semibold text-white border-2 border-white/40 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:-translate-y-1"
          >
            Speisekarte
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#discover"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase">Entdecken</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>

      {showReservation && <ReservationModal onClose={() => setShowReservation(false)} />}
    </section>
    </>
  );
}
