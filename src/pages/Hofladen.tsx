import { motion } from 'framer-motion';
import { Package, Calendar, Truck, ShieldCheck, Phone, Mail, Check } from 'lucide-react';

const packages = [
  {
    name: 'Paket Klein',
    weight: '10 kg',
    price: '170',
    description: 'Ideal für 2-Personen-Haushalte',
    contents: [
      '2x Steaks (je ca. 300g)',
      '1x Braten (ca. 1,5kg)',
      '2x Gulasch (je ca. 500g)',
      '2x Hackfleisch (je ca. 500g)',
      '1x Suppenfleisch (ca. 1kg)',
      'Restliche Menge als Rouladen/Geschnetzeltes',
    ],
    popular: false,
  },
  {
    name: 'Paket Groß',
    weight: '20 kg',
    price: '320',
    description: 'Für Familien & Genießer',
    contents: [
      '4x Steaks (je ca. 300g)',
      '2x Filet (je ca. 200g)',
      '2x Braten (je ca. 1,5kg)',
      '3x Gulasch (je ca. 500g)',
      '3x Hackfleisch (je ca. 500g)',
      '2x Rouladen (je ca. 400g)',
      '1x Beinscheiben (ca. 1kg)',
      '1x Suppenknochen',
      'Restliche Menge als Geschnetzeltes',
    ],
    popular: true,
  },
];

const benefits = [
  { icon: ShieldCheck, title: 'Bio-Qualität', desc: 'Zertifizierte bio-Produktion (DE-ÖKO-006)' },
  { icon: Calendar, title: 'Feste Termine', desc: 'Regelmäßige Abholtermine nach Schlachtung' },
  { icon: Truck, title: 'Abholung vor Ort', desc: 'Frisch vakuumiert direkt vom Hof' },
  { icon: Package, title: 'Perfekt portioniert', desc: 'Ideal für Ihre Tiefkühltruhe' },
];

const faq = [
  {
    q: 'Wie läuft die Bestellung ab?',
    a: 'Kontaktieren Sie uns telefonisch oder per E-Mail. Wir informieren Sie über den nächsten Schlachttermin und reservieren Ihr Paket.'
  },
  {
    q: 'Wann kann ich mein Fleisch abholen?',
    a: 'Die Abholung erfolgt wenige Tage nach der Schlachtung. Den genauen Termin teilen wir Ihnen rechtzeitig mit.'
  },
  {
    q: 'Wie ist das Fleisch verpackt?',
    a: 'Alle Teilstücke sind einzeln vakuumverpackt und beschriftet – perfekt für Ihre Tiefkühltruhe.'
  },
  {
    q: 'Kann ich auch Einzelstücke bestellen?',
    a: 'Ja, nach Verfügbarkeit bieten wir auch Einzelstücke an. Fragen Sie einfach nach unserem aktuellen Angebot.'
  },
];

export default function Hofladen() {
  return (
    <div className="min-h-screen bg-hof-cream">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hof-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2940')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-hof-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Hofladen
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Unser Hof-Fleisch
              <span className="block text-hof-gold">für Zuhause</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl">
              Bringen Sie die Qualität unseres Hofes in Ihre Küche. Unsere Aubrac-Fleischpakete
              werden frisch zusammengestellt und sorgfältig vakuumverpackt.
            </p>
            
            <motion.a
              href="tel:+4941819199500"
              className="inline-flex items-center gap-3 bg-hof-bordeaux text-hof-cream px-6 py-3 rounded-full font-medium hover:bg-hof-bordeaux-light transition-colors"
              whileHover={{ y: -2 }}
            >
              <Phone size={18} />
              Jetzt bestellen
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-hof-forest">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <benefit.icon size={28} className="text-hof-gold mx-auto mb-3" />
                <div className="font-medium text-white">{benefit.title}</div>
                <div className="text-sm text-white/60">{benefit.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-4">
              Unsere Fleischpakete
            </h2>
            <p className="text-lg text-hof-charcoal/60 max-w-2xl mx-auto">
              Ausgewählte Teilstücke vom Aubrac-Rind – vakuumverpackt und perfekt 
              portioniert für Ihre Tiefkühltruhe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative bg-white rounded-3xl border border-hof-charcoal/10 shadow-xl overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-hof-gold' : ''
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-hof-gold text-hof-charcoal text-xs font-bold px-4 py-2 rounded-bl-xl">
                      EMPFEHLUNG
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-hof-charcoal">{pkg.name}</h3>
                      <p className="text-hof-charcoal/60">{pkg.description}</p>
                    </div>
                    <Package size={32} className="text-hof-forest" />
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="font-display text-5xl font-bold text-hof-forest">{pkg.price}</span>
                    <span className="text-hof-charcoal/60">€ / {pkg.weight}</span>
                  </div>

                  {/* Contents */}
                  <div className="space-y-3 mb-8">
                    {pkg.contents.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-hof-forest/10 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                          <Check size={12} className="text-hof-forest" />
                        </div>
                        <span className="text-hof-charcoal/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="tel:+4941819199500"
                    className={`w-full py-4 rounded-xl text-center font-medium transition-colors flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'bg-hof-forest text-white hover:bg-hof-forest-light'
                        : 'bg-hof-sage text-hof-charcoal hover:bg-hof-forest hover:text-hof-cream'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone size={18} />
                    Jetzt bestellen
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Next Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

      {/* FAQ */}
      <section className="py-24 bg-hof-sage">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-hof-charcoal mb-4">
              Häufige Fragen
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-hof-cream rounded-2xl border border-hof-charcoal/5 p-6 shadow-sm"
              >
                <h3 className="font-display font-semibold text-hof-charcoal mb-2">
                  {item.q}
                </h3>
                <p className="text-hof-charcoal/60">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-hof-forest">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Interesse an unserem Fleisch?
          </h3>
          <p className="text-white/70 mb-8">
            Kontaktieren Sie uns für Bestellungen und Fragen rund um unsere Fleischpakete.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+4941819199500"
              className="inline-flex items-center gap-3 bg-hof-gold text-hof-charcoal px-8 py-4 rounded-full font-medium"
              whileHover={{ y: -2 }}
            >
              <Phone size={20} />
              04181 9199500
            </motion.a>
            <motion.a
              href="mailto:info@hof-und-gut.de"
              className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-colors"
              whileHover={{ y: -2 }}
            >
              <Mail size={18} />
              E-Mail schreiben
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
