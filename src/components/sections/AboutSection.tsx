import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Quote } from 'lucide-react';

const openingHours = [
  { day: 'Donnerstag – Freitag', time: 'ab 17:30 Uhr' },
  { day: 'Samstag', time: 'ab 16:30 Uhr' },
  { day: 'Sonntag', time: 'ab 12:00 Uhr' },
];

export default function RestaurantSection() {
  return (
    <section id="restaurant" className="py-24 lg:py-32 overflow-hidden">
      {/* Full-width Image Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] lg:h-[60vh] mb-20"
      >
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop"
          alt="Restaurant Atmosphäre"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(26, 61, 46, 0.4) 100%)',
          }}
        />
        
        {/* Floating Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-5xl lg:text-7xl font-bold text-white"
            >
              Die Stub'n
            </motion.h2>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Quote & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-hof-terracotta text-sm font-medium tracking-[0.15em] uppercase mb-6">
              Speisen am Hof
            </p>
            
            <p className="text-xl lg:text-2xl text-hof-charcoal/70 leading-relaxed mb-8">
              Regionale Hofküche unter historischem Reetdach. 
              Küchenchef Frank Schiffner und sein Team verwandeln 
              die besten Zutaten vom eigenen Hof in unvergessliche Gerichte.
            </p>

            {/* Chef Quote */}
            <div 
              className="relative p-6 rounded-2xl mb-8"
              style={{ background: 'rgba(26, 61, 46, 0.05)' }}
            >
              <Quote size={32} className="text-hof-forest/20 mb-4" />
              <blockquote className="text-lg text-hof-charcoal italic mb-4">
                "Vom eigenen Feld auf Ihren Teller – mit Respekt vor jedem Produkt 
                und der Liebe zum Detail, die gutes Essen verdient."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-hof-forest/10 flex items-center justify-center">
                  <span className="text-hof-forest font-display font-bold">FS</span>
                </div>
                <div>
                  <p className="font-semibold text-hof-charcoal">Frank Schiffner</p>
                  <p className="text-sm text-hof-charcoal/50">Küchenchef</p>
                </div>
              </div>
            </div>

            <Link
              to="/speisekarte"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #8B4513 0%, #a65d2e 100%)',
                boxShadow: '0 4px 15px rgba(139, 69, 19, 0.3)',
              }}
            >
              Speisekarte ansehen
              <span>→</span>
            </Link>
          </motion.div>

          {/* Right: Opening Hours & Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Opening Hours Card */}
            <div 
              className="p-8 rounded-3xl mb-8"
              style={{
                background: 'linear-gradient(135deg, #1a3d2e 0%, #152f24 100%)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-white/10">
                  <Clock size={20} className="text-hof-gold" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">Öffnungszeiten</h3>
              </div>
              
              <div className="space-y-4">
                {openingHours.map((item) => (
                  <div key={item.day} className="flex justify-between items-center pb-3 border-b border-white/10 last:border-0">
                    <span className="text-white/70">{item.day}</span>
                    <span className="text-white font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-white/40 text-sm mt-6">
                Montag – Mittwoch: Ruhetag
              </p>
            </div>

            {/* Small Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2940&auto=format&fit=crop"
                alt="Gericht"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
