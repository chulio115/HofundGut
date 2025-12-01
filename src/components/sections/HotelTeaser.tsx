import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HotelTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 lg:py-48 bg-hof-cream">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-hof-forest/10 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-hof-gold rounded-full animate-pulse" />
            <span className="text-hof-forest text-sm font-medium">Coming 2025</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-hof-charcoal mb-6">
            Bald auch übernachten.
          </h2>
          
          <p className="text-xl text-hof-charcoal/50 max-w-xl mx-auto">
            Historisches Ambiente trifft auf modernen Komfort. 
            Aufwachen mit Blick auf unsere Aubrac-Herde.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
