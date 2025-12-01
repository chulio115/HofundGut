import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Package, Calendar, Truck, ShieldCheck } from 'lucide-react';

const packages = [
  {
    name: 'Paket Klein',
    weight: '10 kg',
    price: '170',
    description: 'Ideal für 2-Personen-Haushalte',
    contents: ['Steaks & Filets', 'Braten', 'Gulasch', 'Hackfleisch', 'Suppenfleisch'],
    popular: false,
  },
  {
    name: 'Paket Groß',
    weight: '20 kg',
    price: '320',
    description: 'Für Familien & Genießer',
    contents: ['Alle Edelteile', 'Verschiedene Braten', 'Gulasch & Rouladen', 'Hackfleisch', 'Beinscheiben', 'Suppenknochen'],
    popular: true,
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Bio-Qualität',
    desc: 'Zertifizierte bio-Produktion',
  },
  {
    icon: Calendar,
    title: 'Feste Termine',
    desc: 'Regelmäßige Abholtermine',
  },
  {
    icon: Truck,
    title: 'Abholung vor Ort',
    desc: 'Frisch vom Hof zu Ihnen',
  },
];

export default function FleischSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="fleisch" className="py-24 bg-hof-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-hof-terracotta font-medium text-sm uppercase tracking-wider mb-4"
          >
            Direktverkauf
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6"
          >
            Premium Fleisch{' '}
            <span className="text-hof-forest">für Zuhause</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-hof-charcoal/70 max-w-3xl mx-auto"
          >
            Bringen Sie die Qualität unseres Hofes in Ihre Küche. Unsere Fleischpakete 
            werden frisch zusammengestellt und vakuumverpackt – perfekt für Ihre Tiefkühltruhe.
          </motion.p>
        </div>

        {/* Benefits Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-hof-forest/10 rounded-full flex items-center justify-center">
                <benefit.icon size={20} className="text-hof-forest" />
              </div>
              <div>
                <div className="font-medium text-hof-charcoal">{benefit.title}</div>
                <div className="text-sm text-hof-charcoal/60">{benefit.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className={`relative bg-white rounded-3xl p-8 shadow-lg ${
                pkg.popular ? 'ring-2 ring-hof-gold' : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-hof-gold text-hof-charcoal text-xs font-bold px-4 py-1 rounded-full">
                    BELIEBT
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-hof-charcoal">{pkg.name}</h3>
                  <p className="text-hof-charcoal/60">{pkg.description}</p>
                </div>
                <Package size={32} className="text-hof-forest" />
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-display text-5xl font-bold text-hof-forest">{pkg.price}</span>
                <span className="text-hof-charcoal/60">€ / {pkg.weight}</span>
              </div>

              <div className="space-y-3 mb-8">
                {pkg.contents.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-hof-forest/10 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-hof-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-hof-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href="#kontakt"
                className={`w-full py-4 rounded-xl text-center font-medium transition-colors flex items-center justify-center gap-2 ${
                  pkg.popular
                    ? 'bg-hof-forest text-hof-cream hover:bg-hof-forest-light'
                    : 'bg-hof-cream-dark text-hof-charcoal hover:bg-hof-forest hover:text-hof-cream'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Jetzt bestellen
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Next Date Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-hof-forest/10 rounded-full px-6 py-3">
            <Calendar size={20} className="text-hof-forest" />
            <span className="text-hof-charcoal">
              <strong>Nächster Abholtermin:</strong> Auf Anfrage – rufen Sie uns an!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
