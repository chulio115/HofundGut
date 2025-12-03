import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Users, Utensils, ArrowRight, ChefHat, Calendar, Sparkles, Leaf, Wine } from 'lucide-react';
import ReservationModal from '../components/ui/ReservationModal';

const events = [
  {
    title: 'Sonntagsbraten',
    date: 'Jeden Sonntag',
    desc: 'Klassiker aus Omas Küche – Braten, Knödel, Rotkohl. So wie früher.',
    badge: 'Tradition',
    color: 'bg-hof-bordeaux',
  },
  {
    title: 'Wine & Dine',
    date: 'Jeden ersten Freitag',
    desc: '5-Gänge-Menü mit passender Weinbegleitung. Ein Abend für Genießer.',
    badge: 'Genuss',
    color: 'bg-hof-gold',
  },
  {
    title: 'Hoffest',
    date: '14. September 2025',
    desc: 'Unser großes Jahresfest mit Live-Musik, Hofführungen und Grillen am Spieß.',
    badge: 'Highlight',
    color: 'bg-hof-forest',
  },
];

const seasons = [
  { name: 'Frühling', months: 'März – Mai', highlights: ['Bärlauch aus dem Wald', 'Frühlingslamm', 'Spargel aus der Region'], icon: '🌱' },
  { name: 'Sommer', months: 'Juni – August', highlights: ['Grillabende auf der Terrasse', 'Frische Kräuter vom Hof', 'Beeren-Desserts'], icon: '☀️' },
  { name: 'Herbst', months: 'September – November', highlights: ['Wild aus der Heide', 'Kürbis & Wurzelgemüse', 'Pilze aus dem Wald'], icon: '🍂' },
  { name: 'Winter', months: 'Dezember – Februar', highlights: ['Deftige Schmorgerichte', 'Gänsebraten', 'Kaminabende'], icon: '❄️' },
];

export default function Restaurant() {
  const [showReservation, setShowReservation] = useState(false);

  return (
    <div className="min-h-screen bg-hof-cream">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940')` }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0, 63, 46, 0.6) 0%, rgba(0, 63, 46, 0.85) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="inline-block text-hof-gold text-sm font-medium tracking-[0.3em] uppercase mb-6">Restaurant</span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.95]">Die Stub'n</h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-4 font-display">Wo Geschichte auf Genuss trifft</p>
            <p className="text-lg text-white/70 mb-10 max-w-2xl leading-relaxed">
              Unter dem historischen Reetdach von 1500 servieren wir ehrliche Hofküche – jedes Gericht erzählt die Geschichte unserer Weiden und Gärten.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setShowReservation(true)} className="inline-flex items-center gap-3 bg-hof-bordeaux text-hof-cream px-8 py-4 rounded-full font-semibold hover:bg-hof-bordeaux-light transition-all duration-300 hover:-translate-y-1">
                Tisch reservieren
              </button>
              <Link to="/speisekarte" className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                Speisekarte <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Info Bar */}
      <section className="py-8 bg-hof-forest">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center"><Clock size={24} className="text-hof-gold mb-2" /><span className="text-white/80 text-sm">Mo, Do–So ab 17:30</span></div>
            <div className="flex flex-col items-center"><Users size={24} className="text-hof-gold mb-2" /><span className="text-white/80 text-sm">60 Plätze innen</span></div>
            <div className="flex flex-col items-center"><Utensils size={24} className="text-hof-gold mb-2" /><span className="text-white/80 text-sm">Regionale Hofküche</span></div>
            <div className="flex flex-col items-center"><Leaf size={24} className="text-hof-gold mb-2" /><span className="text-white/80 text-sm">100% Bio</span></div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-hof-bordeaux text-sm font-semibold tracking-[0.2em] uppercase mb-4"><Calendar size={16} />Events & Angebote</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-hof-charcoal mb-6">Besondere Momente</h2>
            <p className="text-lg text-hof-charcoal/70 max-w-2xl mx-auto">Regelmäßige Events und saisonale Highlights – es gibt immer einen guten Grund, uns zu besuchen.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div key={event.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-hof-charcoal/10">
                <span className={`inline-block ${event.color} text-white text-xs font-semibold px-3 py-1 rounded-full mb-4`}>{event.badge}</span>
                <h3 className="font-display text-2xl font-bold text-hof-charcoal mb-2">{event.title}</h3>
                <p className="text-hof-bordeaux font-medium mb-3">{event.date}</p>
                <p className="text-hof-charcoal/70">{event.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
            <button onClick={() => setShowReservation(true)} className="inline-flex items-center gap-3 bg-hof-bordeaux text-hof-cream px-8 py-4 rounded-full font-semibold hover:bg-hof-bordeaux-light transition-all">
              Event-Anfrage stellen <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SAISONALER KALENDER */}
      <section className="py-24 lg:py-32 bg-hof-sage">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-hof-bordeaux text-sm font-semibold tracking-[0.2em] uppercase mb-4"><Sparkles size={16} />Saisonaler Kalender</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-hof-charcoal mb-6">Immer zur besten Zeit</h2>
            <p className="text-lg text-hof-charcoal/70 max-w-2xl mx-auto">Unsere Küche folgt dem Rhythmus der Natur. Jede Jahreszeit bringt ihre eigenen Schätze.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons.map((season, index) => (
              <motion.div key={season.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-hof-cream rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-hof-charcoal/5">
                <div className="text-4xl mb-4">{season.icon}</div>
                <h3 className="font-display text-xl font-bold text-hof-charcoal mb-1">{season.name}</h3>
                <p className="text-sm text-hof-bordeaux font-medium mb-4">{season.months}</p>
                <ul className="space-y-2">{season.highlights.map((item) => (<li key={item} className="text-sm text-hof-charcoal/70 flex items-start gap-2"><span className="text-hof-gold mt-1">•</span>{item}</li>))}</ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KOCH FRANK */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2877" alt="Küchenteam Hof & Gut" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-hof-forest text-white p-6 rounded-2xl shadow-xl">
                <ChefHat size={32} className="mb-2" />
                <div className="text-sm text-white/80">Küchenchef seit</div>
                <div className="text-2xl font-display font-bold">2008</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="inline-flex items-center gap-2 text-hof-bordeaux text-sm font-semibold tracking-[0.2em] uppercase mb-4"><ChefHat size={16} />Küche & Team</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6">Frank & das Küchenteam</h2>
              <blockquote className="text-xl text-hof-charcoal/80 italic mb-6 border-l-4 border-hof-gold pl-6">„Gute Küche ist Teamarbeit. Wenn die Zutaten stimmen, müssen wir nicht viel daran herumzaubern."</blockquote>
              <p className="text-lg text-hof-charcoal/70 mb-6 leading-relaxed">Frank und sein kleines Team kochen nicht für Punkte oder Sterne, sondern für Gäste, Nachbarn und Freunde.</p>
              <p className="text-lg text-hof-charcoal/70 mb-8 leading-relaxed">Keine Convenience-Produkte. Keine Showeffekte. Nur Handwerk, Zeit und die besten Zutaten der Lüneburger Heide.</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-hof-sage px-4 py-2 rounded-full"><Leaf size={18} className="text-hof-forest" /><span className="text-sm font-medium text-hof-charcoal">100% Bio</span></div>
                <div className="flex items-center gap-3 bg-hof-sage px-4 py-2 rounded-full"><Wine size={18} className="text-hof-forest" /><span className="text-sm font-medium text-hof-charcoal">Regionale Partner</span></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEASER */}
      <section className="py-24 bg-hof-forest">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative group">
              <Link to="/aubrac" className="block">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                  <img src="/images/aubrac-rinder.jpg" alt="Aubrac Rinder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-hof-charcoal/80 to-transparent" />
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-hof-gold text-sm font-medium tracking-wider uppercase mb-2 block">Unsere Rinder</span>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Die Aubrac kennenlernen</h3>
                  <span className="inline-flex items-center gap-2 text-white/80 group-hover:text-white group-hover:gap-4 transition-all">Mehr erfahren <ArrowRight size={18} /></span>
                </div>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative group cursor-pointer" onClick={() => setShowReservation(true)}>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940" alt="Restaurant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-hof-charcoal/80 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-hof-gold text-sm font-medium tracking-wider uppercase mb-2 block">Jetzt planen</span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Tisch reservieren</h3>
                <span className="inline-flex items-center gap-2 text-white/80 group-hover:text-white group-hover:gap-4 transition-all">Reservierung starten <ArrowRight size={18} /></span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {showReservation && <ReservationModal onClose={() => setShowReservation(false)} />}
    </div>
  );
}
