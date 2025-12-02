import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Leaf, Heart, Users, Sprout, TreeDeciduous, Sun } from 'lucide-react';

// Timeline
const timeline = [
  { year: '~1500', title: 'Die Anfänge', desc: 'Der Hof wird erstmals urkundlich erwähnt. Reetdach und Fachwerk prägen das Bild bis heute.' },
  { year: '1850', title: 'Heidebauern', desc: 'Klassische Heidewirtschaft mit Schafen, Bienen und Buchweizen.' },
  { year: '1920', title: 'Landwirtschaft', desc: 'Viehzucht und Ackerbau. Die Familie bewirtschaftet den Hof in dritter Generation.' },
  { year: '1985', title: 'Neuanfang', desc: 'Die jetzige Familie übernimmt den Hof und beginnt mit dem Aufbau der Gastronomie.' },
  { year: '2008', title: 'Bio-Zertifizierung', desc: 'Umstellung auf ökologische Landwirtschaft. Qualität vor Quantität.' },
  { year: '2020', title: 'Aubrac-Rinder', desc: 'Die ersten Aubrac kommen auf den Hof. Ein neues Kapitel beginnt.' },
  { year: 'Heute', title: 'Hof & Gut', desc: 'Restaurant, Hofladen, Reitschule – ein Ort zum Genießen und Erleben.' },
];

// Values
const values = [
  {
    icon: Heart,
    title: 'Respekt vor dem Tier',
    desc: 'Drei Jahre Zeit für unsere Rinder. Kein Stress, keine Kompromisse.',
  },
  {
    icon: Leaf,
    title: 'Nachhaltigkeit',
    desc: 'Bio-zertifiziert, regionale Kreisläufe, kurze Wege.',
  },
  {
    icon: Clock,
    title: 'Zeit statt Tempo',
    desc: 'Gutes braucht Zeit. Beim Reifen und beim Kochen.',
  },
  {
    icon: Users,
    title: 'Familie & Handwerk',
    desc: 'Seit Generationen in Familienhand.',
  },
];

export default function Hof() {
  return (
    <div className="min-h-screen bg-hof-cream">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO – Der Hof
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/hof-historisch.jpg')`,
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
              Der Hof
            </span>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.95]">
              Seit über 500 Jahren
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-4 font-display">
              Ein Ort mit Geschichte und Zukunft
            </p>
            
            <p className="text-lg text-white/70 mb-10 max-w-2xl leading-relaxed">
              Wo Generationen gelebt, gearbeitet und gefeiert haben. 
              Heute ein Ort für Genuss, Begegnung und Verbundenheit mit der Natur.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-hof-bordeaux text-hof-cream px-8 py-4 rounded-full font-semibold hover:bg-hof-bordeaux-light transition-all duration-300 hover:-translate-y-1"
              >
                Uns besuchen
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: GESCHICHTE – Timeline
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
              <Clock size={16} />
              Unsere Geschichte
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-hof-charcoal mb-6">
              Über 500 Jahre Tradition
            </h2>
            <p className="text-lg text-hof-charcoal/70 max-w-2xl mx-auto">
              Von den ersten Heidebauern bis heute – 
              jede Generation hat ihre Spuren hinterlassen.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-hof-forest/20 md:-translate-x-px" />

            {timeline.map((step, index) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-hof-forest rounded-full -translate-x-1/2 mt-2 z-10 ring-4 ring-hof-cream" />
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="inline-block bg-hof-forest text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                    {step.year}
                  </span>
                  <h3 className="font-display text-xl font-bold text-hof-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-hof-charcoal/70">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: PHILOSOPHIE – Werte
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-hof-sage">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 text-hof-bordeaux text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                <Sprout size={16} />
                Philosophie
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6">
                Ein Kreislauf des Guten
              </h2>
              
              <blockquote className="text-xl text-hof-charcoal/80 italic mb-6 border-l-4 border-hof-gold pl-6">
                „Wir glauben, dass man schmeckt, wie ein Tier gelebt hat. 
                Deshalb geben wir unseren Rindern, was sie brauchen."
              </blockquote>
              
              <p className="text-lg text-hof-charcoal/70 mb-8 leading-relaxed">
                Auf Hof & Gut schließt sich der Kreis: Unsere Rinder grasen auf den Weiden 
                rund um den Hof. Das Fleisch landet in unserer Küche. Was übrig bleibt, 
                kommt zurück auf die Felder. Keine langen Transportwege, keine anonymen Lieferanten.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-hof-forest/10 rounded-xl flex items-center justify-center shrink-0">
                      <value.icon size={24} className="text-hof-forest" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-hof-charcoal mb-1">{value.title}</h4>
                      <p className="text-sm text-hof-charcoal/60">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/aubrac-rinder.jpg"
                  alt="Aubrac Rinder auf der Weide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-hof-bordeaux text-hof-cream p-6 rounded-2xl shadow-xl">
                <TreeDeciduous size={32} className="mb-2" />
                <div className="text-2xl font-display font-bold">Bio</div>
                <div className="text-sm text-white/80">Zertifiziert seit 2008</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: REITSCHULE – Emotional
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image First on Mobile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2942"
                  alt="Kinder mit Pferden"
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
                <Sun size={16} />
                Reitschule
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6">
                Wo Kinderaugen leuchten
              </h2>
              
              <p className="text-lg text-hof-charcoal/70 mb-6 leading-relaxed">
                Reiten lernen ist mehr als Sport. Es ist Verantwortung, Vertrauen und die 
                Verbindung zu einem Lebewesen. Auf unserem Hof lernen Kinder und Erwachsene 
                den respektvollen Umgang mit Pferden.
              </p>
              
              <p className="text-lg text-hof-charcoal/70 mb-8 leading-relaxed">
                Vom Putzen über das Satteln bis zum Reiten – hier geht es nicht nur um 
                Technik, sondern um eine Beziehung. Kleine Gruppen, geduldige Pferde, 
                erfahrene Reitlehrer.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-hof-charcoal">
                  <span className="text-hof-gold text-xl">✓</span>
                  <span>Reitunterricht für Kinder ab 6 Jahren</span>
                </div>
                <div className="flex items-center gap-4 text-hof-charcoal">
                  <span className="text-hof-gold text-xl">✓</span>
                  <span>Ponyführen für die Kleinen ab 3 Jahren</span>
                </div>
                <div className="flex items-center gap-4 text-hof-charcoal">
                  <span className="text-hof-gold text-xl">✓</span>
                  <span>Kindergeburtstage auf dem Hof</span>
                </div>
              </div>

              <Link
                to="/reitschule"
                className="inline-flex items-center gap-3 bg-hof-bordeaux text-hof-cream px-8 py-4 rounded-full font-semibold hover:bg-hof-bordeaux-light transition-all"
              >
                Mehr zur Reitschule
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: TEASER – Nächster Bereich
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-hof-forest">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Mehr entdecken
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Der Hof hat viele Seiten. Lernen Sie sie alle kennen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Restaurant */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to="/restaurant" className="block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940"
                    alt="Restaurant"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hof-charcoal/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl font-bold text-white mb-1">Restaurant</h3>
                    <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                      Zur Stub'n →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Aubrac */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <Link to="/aubrac" className="block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <img
                    src="/images/aubrac-rinder.jpg"
                    alt="Aubrac Rinder"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hof-charcoal/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl font-bold text-white mb-1">Die Rinder</h3>
                    <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                      Aubrac entdecken →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Hofladen */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <Link to="/hofladen" className="block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2940"
                    alt="Hofladen"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hof-charcoal/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl font-bold text-white mb-1">Hofladen</h3>
                    <span className="text-white/70 text-sm group-hover:text-white transition-colors">
                      Für zuhause →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
