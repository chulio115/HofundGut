import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wifi, TreePine, Coffee, Star, Bed, Users } from 'lucide-react';

const amenities = [
  { icon: Wifi, label: 'Kostenloses WLAN' },
  { icon: TreePine, label: 'Garten & Terrasse' },
  { icon: Coffee, label: 'Frühstück' },
  { icon: Star, label: 'Ruhige Lage' },
];

const rooms = [
  {
    name: 'Doppelzimmer "Heide"',
    description: 'Gemütliches Zimmer unter dem Reetdach mit Blick auf den Garten.',
    size: '22 m²',
    guests: 2,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Familienzimmer "Hof"',
    description: 'Geräumiges Zimmer für die ganze Familie mit Aufbettungsmöglichkeit.',
    size: '32 m²',
    guests: 4,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function HotelSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="hotel" className="py-24 bg-hof-cream-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-hof-terracotta font-medium text-sm uppercase tracking-wider mb-4"
          >
            Übernachten
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6"
          >
            Schlafen unterm{' '}
            <span className="text-hof-forest">Reetdach</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-hof-charcoal/70 max-w-3xl mx-auto"
          >
            Verlängern Sie Ihren Besuch und erleben Sie den Charme unseres Hofes auch am Morgen. 
            Unsere Gästezimmer verbinden historisches Ambiente mit modernem Komfort.
          </motion.p>
        </div>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {amenities.map((amenity) => (
            <div key={amenity.label} className="flex items-center gap-2 bg-white rounded-full px-5 py-2 shadow-sm">
              <amenity.icon size={18} className="text-hof-forest" />
              <span className="text-sm text-hof-charcoal">{amenity.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-hof-charcoal mb-2">
                  {room.name}
                </h3>
                <p className="text-hof-charcoal/60 mb-6">{room.description}</p>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Bed size={18} className="text-hof-forest" />
                    <span className="text-sm text-hof-charcoal/80">{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-hof-forest" />
                    <span className="text-sm text-hof-charcoal/80">bis {room.guests} Gäste</span>
                  </div>
                </div>

                <motion.a
                  href="#kontakt"
                  className="w-full bg-hof-forest text-hof-cream py-3 rounded-xl text-center font-medium hover:bg-hof-forest-light transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Verfügbarkeit anfragen
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-hof-forest text-hof-cream rounded-3xl p-8 sm:p-12"
        >
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Auch auf Booking.com</h3>
              <p className="text-hof-cream/70 mb-4">
                Sie können unsere Zimmer auch bequem über Booking.com reservieren – 
                mit geprüften Bewertungen und einfacher Online-Buchung.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-hof-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-hof-cream/70 text-sm">4.5 von 5 Sternen</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://www.booking.com/hotel/de/ubernachten-am-hof.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-hof-cream text-hof-forest py-4 rounded-xl text-center font-medium hover:bg-hof-cream-dark transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Auf Booking.com
              </motion.a>
              <motion.a
                href="tel:+494181217070"
                className="flex-1 bg-hof-terracotta text-hof-cream py-4 rounded-xl text-center font-medium hover:bg-hof-terracotta-light transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Direkt anrufen
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
