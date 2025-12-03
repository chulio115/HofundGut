import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Clock, Star, Download, Utensils, Wine, ChefHat } from 'lucide-react';
import ReservationModal from '../components/ui/ReservationModal';
import menuHighlightsData from '../content/menu-highlights.json';
import menuSettings from '../content/menu-settings.json';

// Menu Highlights (from content file, prepared for Decap CMS)
const menuHighlights = menuHighlightsData.items;
const menuPdfUrl = menuSettings.pdf;

// Philosophy Points
const philosophy = [
  {
    icon: Leaf,
    title: '100% Bio',
    desc: 'Alle Zutaten aus kontrolliert biologischem Anbau.',
  },
  {
    icon: Clock,
    title: 'Zeit zum Reifen',
    desc: 'Unser Fleisch reift mindestens 21 Tage am Knochen.',
  },
  {
    icon: Star,
    title: 'Eigene Rinder',
    desc: 'Das Aubrac-Fleisch stammt zu 100% vom eigenen Hof.',
  },
];

export default function Speisekarte() {
  const [showReservation, setShowReservation] = useState(false);

  return (
    <div className="min-h-screen bg-hof-cream">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2940')`,
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 63, 46, 0.6) 0%, rgba(0, 63, 46, 0.85) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-hof-gold text-sm font-medium tracking-[0.3em] uppercase mb-6">
              Speisekarte
            </span>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.95]">
              Vom Feld auf den Teller
            </h1>
            
            <p className="text-lg text-white/70 mb-10 max-w-2xl leading-relaxed">
              Unsere Karte erzählt Geschichten. Von den Weiden nebenan, 
              vom Rhythmus der Jahreszeiten und vom Handwerk in unserer Küche.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={menuPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-hof-bordeaux text-hof-cream px-8 py-4 rounded-full font-semibold hover:bg-hof-bordeaux-light transition-all duration-300 hover:-translate-y-1"
              >
                Zur aktuellen Karte
                <ArrowRight size={18} />
              </a>
              <a
                href={menuPdfUrl}
                download
                className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Download size={18} />
                PDF Download
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Bar */}
      <section className="py-10 bg-hof-forest">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 text-center md:text-left"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon size={24} className="text-hof-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: HIGHLIGHTS (Essen zuerst!)
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-hof-bordeaux text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              <Utensils size={16} />
              Aktuelle Highlights
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-hof-charcoal mb-6">
              Was wir empfehlen
            </h2>
            <p className="text-lg text-hof-charcoal/70 max-w-2xl mx-auto">
              Ein Auszug aus unserer aktuellen Karte – 
              unsere Favoriten der Saison.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {menuHighlights.map((dish, index) => (
              <motion.div
                key={dish.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-hof-charcoal/10 p-8 shadow-lg"
              >
                <span className="inline-block bg-hof-bordeaux/10 text-hof-bordeaux text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {dish.badge}
                </span>
                <p className="text-sm text-hof-charcoal/50 uppercase tracking-wider mb-2">
                  {dish.category}
                </p>
                <h3 className="font-display text-xl font-bold text-hof-charcoal mb-3">
                  {dish.title}
                </h3>
                <p className="text-hof-charcoal/70 mb-4 text-sm leading-relaxed">
                  {dish.desc}
                </p>
                <p className="font-display text-2xl font-bold text-hof-forest">
                  {dish.price}€
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href={menuPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-hof-forest text-white px-8 py-4 rounded-full font-semibold hover:bg-hof-forest-light transition-all"
            >
              Komplette Karte ansehen
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: UNSERE RINDER (nach dem Essen)
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-hof-sage">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 text-hof-bordeaux text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                <ChefHat size={16} />
                Unsere Küchenphilosophie
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6">
                Ehrlich. Regional. Saisonal.
              </h2>
              
              <p className="text-lg text-hof-charcoal/70 mb-6 leading-relaxed">
                Wir kochen, was die Saison hergibt. Im Frühjahr Bärlauch aus dem Wald, 
                im Sommer Kräuter aus dem Garten, im Herbst Wild aus der Heide, 
                im Winter deftige Schmorgerichte.
              </p>
              
              <p className="text-lg text-hof-charcoal/70 mb-8 leading-relaxed">
                Das Herzstück unserer Karte: unser eigenes Aubrac-Rind. 
                Drei Jahre wachsen sie auf, ohne Stress, auf den Weiden nebenan. 
                Dann reift das Fleisch 21 bis 28 Tage am Knochen. 
                Das Ergebnis schmeckt man.
              </p>

              <Link
                to="/aubrac"
                className="group inline-flex items-center gap-3 text-hof-bordeaux font-semibold text-lg"
              >
                <span>Mehr über unsere Rinder</span>
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/aubrac-rinder.jpg"
                  alt="Aubrac Rinder auf der Weide"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: GETRÄNKE
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940"
                  alt="Weine und Getränke"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-flex items-center gap-2 text-hof-bordeaux text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                <Wine size={16} />
                Getränke
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6">
                Die passende Begleitung
              </h2>
              
              <p className="text-lg text-hof-charcoal/70 mb-6 leading-relaxed">
                Zu jedem Gericht der passende Tropfen. Unsere Weinkarte spiegelt 
                unsere Philosophie wider: Regional, handwerklich, mit Charakter.
              </p>
              
              <p className="text-lg text-hof-charcoal/70 mb-8 leading-relaxed">
                Neben ausgewählten Weinen bieten wir hausgemachte Limonaden, 
                regionale Biere und – für den perfekten Abschluss – 
                edle Brände aus der Lüneburger Heide.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-hof-charcoal">
                  <span className="w-2 h-2 bg-hof-bordeaux rounded-full" />
                  <span>Regionale Weine von kleinen Winzern</span>
                </div>
                <div className="flex items-center gap-3 text-hof-charcoal">
                  <span className="w-2 h-2 bg-hof-bordeaux rounded-full" />
                  <span>Craft-Biere aus Norddeutschland</span>
                </div>
                <div className="flex items-center gap-3 text-hof-charcoal">
                  <span className="w-2 h-2 bg-hof-bordeaux rounded-full" />
                  <span>Hausgemachte Limonaden & Eistees</span>
                </div>
                <div className="flex items-center gap-3 text-hof-charcoal">
                  <span className="w-2 h-2 bg-hof-bordeaux rounded-full" />
                  <span>Edle Brände & Digestifs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: CTA
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-hof-forest">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Haben wir Appetit gemacht?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Reservieren Sie jetzt Ihren Tisch und erleben Sie unsere Küche.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowReservation(true)}
                className="inline-flex items-center gap-3 bg-hof-gold text-hof-charcoal px-8 py-4 rounded-full font-semibold hover:bg-hof-gold-light transition-colors"
              >
                Tisch reservieren
              </button>
              <Link
                to="/karte"
                className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors"
              >
                Zur Karte
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reservation Modal */}
      {showReservation && (
        <ReservationModal onClose={() => setShowReservation(false)} />
      )}
    </div>
  );
}
