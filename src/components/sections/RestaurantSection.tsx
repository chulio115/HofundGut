import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, MapPin, Phone, ChefHat, Utensils, Wine } from 'lucide-react';

const menuHighlights = [
  {
    category: 'Hüttenspezialitäten',
    items: [
      { name: 'Zwiebel-Roastbeef', desc: 'vom Roastbeef mit hausgemachten Spätzle', price: '28' },
      { name: 'Kalbs-Wiener-Schnitzel', desc: 'an Preiselbeeren, dazu Bratkartoffeln', price: '26' },
    ],
  },
  {
    category: 'Vom eigenen Hof',
    items: [
      { name: 'Aubrac Rumpsteak', desc: '4 Wochen dry-aged, Kräuterbutter', price: '34' },
      { name: 'Geschmorte Rinderbacke', desc: 'in Rotwein, Wurzelgemüse', price: '29' },
    ],
  },
];

export default function RestaurantSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="restaurant" className="py-24 bg-hof-cream-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-hof-terracotta font-medium text-sm uppercase tracking-wider mb-4"
          >
            Restaurant Stub'n
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6"
          >
            Hofküche mit{' '}
            <span className="text-hof-forest">Leidenschaft</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-hof-charcoal/70 max-w-3xl mx-auto"
          >
            In unserem denkmalgerecht sanierten Bauernhaus unter Reetdach serviert 
            Küchenchef Frank Schiffner kreative Gerichte aus regionalen und hofeigenen Produkten.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image & Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8"
            >
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                alt="Restaurant Interieur"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hof-charcoal/60 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 text-hof-cream">
                  <ChefHat size={24} />
                  <div>
                    <div className="font-display font-semibold">Küchenchef Frank Schiffner</div>
                    <div className="text-sm text-hof-cream/70">Kreative Hofküche seit 2015</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <Clock size={24} className="text-hof-forest mb-3" />
                <h4 className="font-display font-semibold text-hof-charcoal mb-2">Öffnungszeiten</h4>
                <div className="text-sm text-hof-charcoal/60 space-y-1">
                  <p>Mo, Do, Fr: 17:30 – 22:00</p>
                  <p>Sa: 16:30 – 22:00</p>
                  <p>So: 12:00 – 22:00</p>
                  <p className="text-hof-terracotta">Di & Mi Ruhetag</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <MapPin size={24} className="text-hof-forest mb-3" />
                <h4 className="font-display font-semibold text-hof-charcoal mb-2">Anfahrt</h4>
                <div className="text-sm text-hof-charcoal/60">
                  <p>Itzenbütteler Sod 13-15</p>
                  <p>21266 Jesteburg</p>
                  <a href="tel:+494181217070" className="flex items-center gap-1 text-hof-forest mt-2 hover:text-hof-terracotta transition-colors">
                    <Phone size={14} />
                    04181 / 217070
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Menu Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-hof-charcoal">Speisekarte</h3>
                <p className="text-sm text-hof-charcoal/60">Auszug – saisonal wechselnd</p>
              </div>
              <div className="flex items-center gap-2">
                <Utensils size={20} className="text-hof-terracotta" />
                <Wine size={20} className="text-hof-terracotta" />
              </div>
            </div>

            {menuHighlights.map((section, sectionIndex) => (
              <div key={section.category} className={sectionIndex > 0 ? 'mt-8 pt-8 border-t border-hof-cream-dark' : ''}>
                <h4 className="font-display text-lg font-semibold text-hof-forest mb-4">
                  {section.category}
                </h4>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start gap-4">
                      <div>
                        <div className="font-medium text-hof-charcoal">{item.name}</div>
                        <div className="text-sm text-hof-charcoal/60">{item.desc}</div>
                      </div>
                      <div className="font-display text-lg font-semibold text-hof-terracotta whitespace-nowrap">
                        {item.price} €
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="mt-8 pt-8 border-t border-hof-cream-dark">
              <motion.a
                href="#speisekarte"
                className="w-full bg-hof-forest text-hof-cream py-4 rounded-xl text-center font-medium hover:bg-hof-forest-light transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Komplette Speisekarte ansehen
              </motion.a>
              <motion.a
                href="#reservierung"
                className="w-full mt-3 bg-hof-terracotta text-hof-cream py-4 rounded-xl text-center font-medium hover:bg-hof-terracotta-light transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={18} />
                Tisch reservieren
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
