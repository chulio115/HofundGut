import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Timer, Leaf, Award, Heart, Sun, Droplets, Mountain, ArrowRight, Phone } from 'lucide-react';

const stats = [
  { icon: MapPin, value: '85', unit: 'Hektar', label: 'Bio-Weideland' },
  { icon: Timer, value: '3', unit: 'Jahre', label: 'Aufzucht' },
  { icon: Leaf, value: '100%', unit: '', label: 'Bio-zertifiziert' },
  { icon: Award, value: '28', unit: 'Tage', label: 'Dry Aging' },
];

const qualities = [
  { 
    icon: Heart, 
    title: 'Artgerechte Haltung', 
    desc: 'Unsere Aubrac-Rinder leben ganzjährig im Freien auf weitläufigen Weiden. Keine Ställe, keine Enge – nur natürliche Lebensräume.' 
  },
  { 
    icon: Sun, 
    title: 'Langsames Wachstum', 
    desc: 'Drei Jahre Zeit geben wir unseren Rindern, um natürlich zu wachsen. Kein Kraftfutter, keine Wachstumsbeschleuniger.' 
  },
  { 
    icon: Droplets, 
    title: 'Saftiges Fleisch', 
    desc: 'Die charakteristische Marmorierung macht Aubrac-Fleisch besonders zart und aromatisch. Ein Geschmackserlebnis der Extraklasse.' 
  },
  { 
    icon: Mountain, 
    title: 'Robuste Rasse', 
    desc: 'Ursprünglich aus dem französischen Zentralmassiv stammend, sind Aubrac-Rinder perfekt an das raue Klima angepasst.' 
  },
];

const timeline = [
  { year: 'Geburt', title: 'Auf der Weide', desc: 'Unsere Kälber werden direkt auf der Weide geboren und bleiben bei ihrer Mutter.' },
  { year: 'Jahr 1', title: 'Natürliches Wachstum', desc: 'Muttermilch und frisches Gras – mehr brauchen unsere Rinder nicht.' },
  { year: 'Jahr 2', title: 'Freiheit genießen', desc: 'Die Tiere grasen frei auf 85 Hektar bio-zertifiziertem Weideland.' },
  { year: 'Jahr 3', title: 'Volle Reife', desc: 'Erst jetzt, nach drei Jahren, hat das Fleisch seine perfekte Qualität erreicht.' },
  { year: 'Reifung', title: 'Dry Aging', desc: 'Bis zu 28 Tage kontrollierte Reifung für intensiven Geschmack.' },
  { year: 'Ihr Teller', title: 'Genuss pur', desc: 'Vom Hof direkt in unser Restaurant oder als Fleischpaket zu Ihnen nach Hause.' },
];

export default function Aubrac() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-hof-cream">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/aubrac-rinder.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hof-charcoal/90 via-hof-charcoal/70 to-hof-charcoal/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 bg-hof-gold/20 border border-hof-gold/30 rounded-full px-4 py-2 mb-6">
              <Award size={16} className="text-hof-gold" />
              <span className="text-hof-gold text-sm font-medium">Unser Qualitätsversprechen</span>
            </span>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Aubrac Rinder
              <span className="block text-hof-gold">Drei Jahre Zeit.</span>
            </h1>
            
            <p className="text-xl text-white/70 mb-10 max-w-2xl">
              Französische Edelrinder aus dem Zentralmassiv – aufgewachsen auf 
              unseren bio-zertifizierten Weiden in der Lüneburger Heide.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/hofladen"
                className="inline-flex items-center gap-3 bg-hof-gold text-hof-charcoal px-6 py-3 rounded-full font-medium hover:bg-hof-gold/90 transition-colors"
                whileHover={{ y: -2 }}
              >
                Fleisch kaufen
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="/speisekarte"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <span className="border-b border-white/30 pb-0.5">Im Restaurant genießen</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-hof-forest">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon size={24} className="text-hof-gold mx-auto mb-3" />
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-4xl font-bold text-white">{stat.value}</span>
                  {stat.unit && <span className="text-white/60">{stat.unit}</span>}
                </div>
                <span className="text-sm text-white/50">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-hof-bordeaux text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Die Geschichte
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6">
              Vom Aubrac-Massiv in die Heide
            </h2>
            <p className="text-lg text-hof-charcoal/60 max-w-3xl mx-auto">
              Die Aubrac-Rasse stammt ursprünglich aus dem rauen Klima des französischen Zentralmassivs. 
              Ihre Robustheit und ihr hervorragendes Fleisch machten sie zur perfekten Wahl für unseren Hof.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2940"
                  alt="Aubrac Rinder auf der Weide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-hof-forest text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-display font-bold">2020</div>
                <div className="text-sm text-white/70">Erste Aubrac auf Hof & Gut</div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="font-display text-2xl font-bold text-hof-charcoal mb-4">
                Eine Rasse mit Charakter
              </h3>
              <p className="text-hof-charcoal/70 mb-6 leading-relaxed">
                Mit ihrem charakteristischen honigfarbenen Fell und den schwarzen Augenringen 
                sind Aubrac-Rinder nicht nur optisch beeindruckend. Ihre genetische Anpassung 
                an raue Bedingungen macht sie zu perfekten Weidetieren für unsere Lüneburger Heide.
              </p>
              <p className="text-hof-charcoal/70 mb-6 leading-relaxed">
                Das Fleisch der Aubrac-Rinder zeichnet sich durch eine feine Marmorierung aus, 
                die für besondere Zartheit und intensiven Geschmack sorgt. Diese Qualität erreichen 
                wir nur durch Geduld – drei Jahre Zeit geben wir jedem Tier.
              </p>
              <ul className="space-y-3">
                {['Ganzjährige Freilandhaltung', 'Eigene Schlachtung vor Ort', 'Dry Aged Reifung bis 28 Tage', 'Bio-zertifiziert (DE-ÖKO-006)'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-hof-charcoal/80">
                    <div className="w-1.5 h-1.5 bg-hof-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualities */}
      <section className="py-24 bg-hof-cream-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6">
              Was unser Fleisch auszeichnet
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-hof-cream-dark rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-hof-forest/10 rounded-xl flex items-center justify-center mb-4">
                  <quality.icon size={28} className="text-hof-forest" />
                </div>
                <h3 className="font-display text-xl font-bold text-hof-charcoal mb-3">
                  {quality.title}
                </h3>
                <p className="text-sm text-hof-charcoal/60 leading-relaxed">
                  {quality.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-hof-bordeaux text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Vom Hof auf den Teller
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal">
              Der Weg zu Ihrem Genuss
            </h2>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-hof-forest/20" />

            {timeline.map((step, index) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-8 mb-12 last:mb-0"
              >
                {/* Dot */}
                <div className="relative z-10 w-16 h-16 bg-hof-forest rounded-full flex items-center justify-center shrink-0 shadow-lg">
                  <span className="text-white text-xs font-bold">{step.year}</span>
                </div>

                {/* Content */}
                <div className="pt-3">
                  <h3 className="font-display text-xl font-bold text-hof-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-hof-charcoal/60">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hof-forest">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Überzeugen Sie sich selbst
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Besuchen Sie uns im Restaurant oder bestellen Sie unser Fleisch 
            für Ihre Küche zuhause.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+494181217070"
              className="inline-flex items-center gap-3 bg-hof-gold text-hof-charcoal px-8 py-4 rounded-full font-medium"
              whileHover={{ y: -2 }}
            >
              <Phone size={20} />
              Tisch reservieren
            </motion.a>
            <motion.a
              href="/hofladen"
              className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-colors"
              whileHover={{ y: -2 }}
            >
              Zum Hofladen
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
