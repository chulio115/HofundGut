import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Animation */}
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
      
      {/* Elegant Dark Overlay - Updated Color */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 63, 46, 0.5) 0%, rgba(0, 63, 46, 0.7) 50%, rgba(0, 63, 46, 0.85) 100%)',
        }}
      />

      {/* Content - ZENTRIERT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-hof-gold text-sm sm:text-base font-semibold tracking-[0.3em] uppercase mb-6"
        >
          Lüneburger Heide · Seit 1500
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8"
        >
          Willkommen bei
          <br />
          <span className="text-hof-cream">Hof & Gut</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl sm:text-2xl lg:text-3xl text-white/85 font-light leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          Ehrliche Küche vom eigenen Hof.
          <br className="hidden sm:block" />
          Vom Feld auf den Teller.
        </motion.p>

        {/* Dual CTAs für Stammgäste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/reservieren"
            className="inline-flex items-center gap-3 px-10 py-4 text-lg font-semibold text-white bg-hof-bordeaux rounded-full transition-all duration-300 hover:bg-hof-bordeaux-light hover:shadow-2xl hover:-translate-y-1"
          >
            Tisch reservieren
          </Link>
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#discover"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase">Entdecken</span>
          <ChevronDown size={24} strokeWidth={1.5} />
        </motion.a>
      </motion.div>

      {/* Bottom Gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #FAF9F6 0%, transparent 100%)',
        }}
      />
    </section>
  );
}
