import { motion } from 'framer-motion';
import { Phone, Clock, Download, Leaf, Award, ChefHat } from 'lucide-react';

const menuCategories = [
  {
    name: 'Vorspeisen',
    description: 'Frisch vom Hof auf den Teller',
    items: [
      { name: 'Aubrac Rindertatar', description: 'mit Eigelb, Kapern & hausgemachtem Brot', price: '18,50', highlight: true },
      { name: 'Carpaccio vom Aubrac', description: 'hauchdünn geschnitten mit Rucola & Parmesan', price: '16,90' },
      { name: 'Hausgemachte Bouillon', description: 'kräftige Rinderbrühe mit Markklößchen', price: '8,50' },
      { name: 'Heideforelle', description: 'gebeizt mit Dill-Senf-Sauce', price: '14,90' },
    ]
  },
  {
    name: 'Hauptgerichte',
    description: 'Unsere Klassiker vom Aubrac Rind',
    items: [
      { name: 'Geschmorte Rinderbacke', description: 'vom Aubrac, 12 Stunden gegart, mit Rotweinreduktion', price: '28,90', highlight: true },
      { name: 'Dry Aged Entrecôte', description: '350g, 28 Tage gereift, mit Kräuterbutter', price: '42,00', highlight: true },
      { name: 'Rinderfilet "Rossini"', description: 'mit Gänseleber & Trüffel-Jus', price: '48,00' },
      { name: 'Tafelspitz', description: 'klassisch mit Meerrettich & Schnittlauchsauce', price: '26,90' },
      { name: 'Rinderhüfte', description: '250g, medium rare, mit Pfefferrahmsauce', price: '32,00' },
      { name: 'Gulasch vom Aubrac', description: 'deftig geschmort mit Spätzle', price: '22,90' },
    ]
  },
  {
    name: 'Beilagen',
    description: 'Perfekte Begleiter',
    items: [
      { name: 'Hausgemachte Bratkartoffeln', description: 'knusprig mit Zwiebeln', price: '5,50' },
      { name: 'Kartoffelgratin', description: 'cremig mit Bergkäse überbacken', price: '6,50' },
      { name: 'Saisonales Gemüse', description: 'aus der Region', price: '6,00' },
      { name: 'Blattsalat', description: 'mit Hausdressing', price: '4,50' },
    ]
  },
  {
    name: 'Desserts',
    description: 'Süßer Abschluss',
    items: [
      { name: 'Crème Brûlée', description: 'mit Vanille aus Madagaskar', price: '9,50' },
      { name: 'Warmer Schokoladenkuchen', description: 'mit flüssigem Kern & Vanilleeis', price: '11,50', highlight: true },
      { name: 'Käseauswahl', description: 'regionale Spezialitäten mit Feigensenf', price: '14,00' },
      { name: 'Hausgemachtes Eis', description: 'drei Kugeln nach Wahl', price: '7,50' },
    ]
  },
];

const features = [
  { icon: Leaf, title: 'Regional & Saisonal', desc: 'Frische Zutaten aus der Lüneburger Heide' },
  { icon: Award, title: 'Eigene Rinderzucht', desc: '100% Aubrac vom eigenen Hof' },
  { icon: ChefHat, title: 'Handwerkskunst', desc: 'Traditionelle Zubereitung mit Liebe' },
];

export default function Speisekarte() {
  return (
    <div className="min-h-screen bg-hof-cream">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hof-forest overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-hof-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Die Stub'n
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Unsere Speisekarte
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl">
              Regionale Hofküche auf höchstem Niveau. Alle Fleischgerichte stammen 
              von unseren eigenen Aubrac-Rindern – vom Hof direkt auf Ihren Teller.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="tel:+494181217070"
                className="inline-flex items-center gap-3 bg-hof-terracotta text-white px-6 py-3 rounded-full font-medium hover:bg-hof-terracotta-light transition-colors"
                whileHover={{ y: -2 }}
              >
                <Phone size={18} />
                Tisch reservieren
              </motion.a>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Download size={18} />
                Karte als PDF
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-hof-cream-dark py-8 border-b border-hof-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-hof-forest/10 rounded-full flex items-center justify-center">
                  <feature.icon size={20} className="text-hof-forest" />
                </div>
                <div>
                  <div className="font-medium text-hof-charcoal text-sm">{feature.title}</div>
                  <div className="text-xs text-hof-charcoal/60">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-20 last:mb-0"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-hof-charcoal mb-2">
                  {category.name}
                </h2>
                <p className="text-hof-charcoal/60">{category.description}</p>
                <div className="w-16 h-0.5 bg-hof-gold mx-auto mt-4" />
              </div>

              {/* Items */}
              <div className="space-y-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`flex justify-between items-start gap-4 py-4 border-b border-hof-charcoal/10 ${
                      item.highlight ? 'bg-hof-gold/5 -mx-4 px-4 rounded-lg border-0' : ''
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-semibold text-hof-charcoal">
                          {item.name}
                        </h3>
                        {item.highlight && (
                          <span className="text-xs bg-hof-gold text-hof-charcoal px-2 py-0.5 rounded-full font-medium">
                            Empfehlung
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-hof-charcoal/60 mt-1">{item.description}</p>
                    </div>
                    <span className="font-display text-xl font-bold text-hof-forest whitespace-nowrap">
                      €{item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-hof-forest">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h3 className="font-display text-3xl font-bold text-white mb-4">
            Appetit bekommen?
          </h3>
          <p className="text-white/70 mb-8">
            Reservieren Sie jetzt Ihren Tisch und genießen Sie unsere Hofküche.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <motion.a
              href="tel:+494181217070"
              className="inline-flex items-center gap-3 bg-hof-gold text-hof-charcoal px-8 py-4 rounded-full font-medium hover:bg-hof-gold/90 transition-colors"
              whileHover={{ y: -2 }}
            >
              <Phone size={20} />
              04181 / 217070
            </motion.a>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock size={16} />
              <span>Mo, Do–So ab 17:30 Uhr</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
