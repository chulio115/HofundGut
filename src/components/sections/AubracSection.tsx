import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Timer, Mountain, Sparkles, Beef } from 'lucide-react';

const aubracFacts = [
  {
    icon: Timer,
    title: 'Mindestens 3 Jahre',
    description: 'Unsere Rinder dürfen langsam wachsen – für intensiven Geschmack und beste Marmorierung.',
  },
  {
    icon: Mountain,
    title: 'Französische Robustheit',
    description: 'Ursprünglich aus dem Zentralmassiv, perfekt angepasst an raue Weidebedingungen.',
  },
  {
    icon: Sparkles,
    title: 'Reich an Omega-3',
    description: 'Weidefütterung sorgt für deutlich höhere Omega-3-Fettsäuren als Stallhaltung.',
  },
  {
    icon: Beef,
    title: '4 Wochen Dry-Aged',
    description: 'Trockenreifung am Knochen für maximale Zartheit und konzentrierten Geschmack.',
  },
];

const timeline = [
  { step: '01', title: 'Die Weide', desc: 'Ganzjährig auf 85 Hektar bio-zertifiziertem Land' },
  { step: '02', title: 'Die Zeit', desc: 'Mindestens 3 Jahre natürliches Wachstum' },
  { step: '03', title: 'Das Handwerk', desc: 'Lokale Schlachtung, 4 Wochen Trockenreifung' },
  { step: '04', title: 'Der Teller', desc: 'Vom Hof direkt in unsere Küche oder zu Ihnen' },
];

export default function AubracSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="aubrac" className="py-24 bg-hof-forest text-hof-cream overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-hof-gold font-medium text-sm uppercase tracking-wider mb-4"
          >
            Unsere Aubrac-Rinder
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold mb-6"
          >
            Eine fast vergessene{' '}
            <span className="text-hof-gold">Delikatesse</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-hof-cream/70 max-w-3xl mx-auto"
          >
            Die Aubrac-Rinder waren einst vom Aussterben bedroht. Heute züchten wir diese 
            außergewöhnliche französische Rasse auf unserem Hof – für Fleisch, das Sie 
            nie wieder vergessen werden.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=2004&auto=format&fit=crop"
                alt="Aubrac Rinder auf der Weide"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-hof-cream text-hof-charcoal p-6 rounded-2xl shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-hof-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-hof-gold text-lg">🇫🇷</span>
                </div>
                <div>
                  <div className="font-display font-semibold">Massif Central</div>
                  <div className="text-sm text-hof-charcoal/60">Ursprungsregion</div>
                </div>
              </div>
              <p className="text-sm text-hof-charcoal/70">
                Robust, genügsam und mit ausgeprägtem Mutterinstinkt – 
                perfekt für nachhaltige Weidehaltung.
              </p>
            </motion.div>
          </motion.div>

          {/* Facts Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {aubracFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-hof-cream/5 backdrop-blur-sm border border-hof-cream/10 rounded-2xl p-6 hover:bg-hof-cream/10 transition-colors"
              >
                <div className="w-12 h-12 bg-hof-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <fact.icon size={24} className="text-hof-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{fact.title}</h3>
                <p className="text-sm text-hof-cream/60 leading-relaxed">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline: Vom Hof auf den Teller */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-hof-cream/5 backdrop-blur-sm border border-hof-cream/10 rounded-3xl p-8 sm:p-12"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12">
            Vom Hof auf den Teller
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="relative text-center"
              >
                {/* Connector Line */}
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-hof-gold/50 to-transparent" />
                )}
                
                <div className="w-12 h-12 bg-hof-gold text-hof-forest rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="font-display text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-hof-cream/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
