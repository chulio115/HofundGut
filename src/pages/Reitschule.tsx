import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Smile, Sun, ShieldCheck, MapPin, Clock } from 'lucide-react';

export default function Reitschule() {
  return (
    <div className="min-h-screen bg-hof-cream">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2942&auto=format&fit=crop')",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(20,50,42,0.6) 0%, rgba(20,50,42,0.88) 55%, rgba(20,50,42,0.96) 100%)',
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
            <span className="inline-block text-hof-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">
              Reitschule
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.05]">
              Reiten lernen auf Hof &amp; Gut
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Unter dem Reetdach unseres historischen Hofes beginnt für viele Kinder der erste Kontakt mit Pony,
              Pferd und Reitsport – behutsam, spielerisch und immer mit Blick auf das Tier.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-hof-gold text-hof-charcoal px-8 py-4 rounded-full font-semibold hover:bg-hof-gold-light transition-all duration-300 hover:-translate-y-1"
              >
                Anfrage zur Reitschule
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/hof"
                className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Mehr über den Hof
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REITSCHULE – UNTERRICHT */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-hof-bordeaux text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              <Sun size={16} />
              Reitunterricht
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6">
              Reiten mit Gefühl statt Druck
            </h2>
            <p className="text-lg text-hof-charcoal/70 max-w-2xl mx-auto">
              Kleine Gruppen, ruhige Pferde und viel Zeit – so lernen Kinder, Jugendliche und Erwachsene bei uns
              Schritt für Schritt den sicheren Umgang mit dem Pferd.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl border border-hof-charcoal/10 p-8 shadow-lg"
            >
              <h3 className="font-display text-xl font-bold text-hof-charcoal mb-3">Einsteiger &amp; Wiedereinsteiger</h3>
              <p className="text-sm text-hof-charcoal/70 mb-4">
                Vom ersten Hufe auskratzen bis zum sicheren Reiten in Schritt und Trab – mit Ruhe und klaren
                Erklärungen.
              </p>
              <ul className="space-y-2 text-sm text-hof-charcoal/70">
                <li>• Geführter Unterricht an der Longe</li>
                <li>• Fokus auf Sitzschulung und Balance</li>
                <li>• Verständnis für Pferdeverhalten</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl border border-hof-charcoal/10 p-8 shadow-lg"
            >
              <h3 className="font-display text-xl font-bold text-hof-charcoal mb-3">Kinder &amp; Jugendliche</h3>
              <p className="text-sm text-hof-charcoal/70 mb-4">
                Spielerisch reiten lernen – mit altersgerechten Übungen auf braven Ponys und Pferden.
              </p>
              <ul className="space-y-2 text-sm text-hof-charcoal/70">
                <li>• Kleine Gruppen mit fester Bezugsperson</li>
                <li>• Theorie rund ums Pferd kindgerecht erklärt</li>
                <li>• Reitstunden drinnen und draußen je nach Wetter</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl border border-hof-charcoal/10 p-8 shadow-lg"
            >
              <h3 className="font-display text-xl font-bold text-hof-charcoal mb-3">Einzelstunden</h3>
              <p className="text-sm text-hof-charcoal/70 mb-4">
                Für alle, die an einem Thema konzentriert arbeiten möchten – ob Sitz, Übergänge oder Gelassenheit.
              </p>
              <ul className="space-y-2 text-sm text-hof-charcoal/70">
                <li>• Individuelle Förderung</li>
                <li>• Vorbereitung auf Ausritte oder Turniere</li>
                <li>• Nach Absprache auch mit eigenem Pferd</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PONYREITEN FÜR KINDER */}
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
                <Smile size={16} />
                Ponyreiten für Kinder
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6">
                Erste Runden auf vier Hufen
              </h2>
              <p className="text-lg text-hof-charcoal/70 mb-6 leading-relaxed">
                Ponyreiten ist oft der erste Kontakt von Kindern mit Pferden. Bei uns findet das in ruhiger Umgebung
                statt – geführt, begleitet und mit viel Zeit zum Streicheln.
              </p>
              <div className="space-y-3 text-sm text-hof-charcoal/80 mb-8">
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-hof-bordeaux">•</span>
                  <p>Geführtes Ponyreiten für Kinder ab ca. 3 Jahren (nach Absprache).</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-hof-bordeaux">•</span>
                  <p>Kurze Runden auf dem Hof oder kleine Ausritte je nach Erfahrung.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 text-hof-bordeaux">•</span>
                  <p>Eltern können am Rand begleiten, fotografieren und anfeuern.</p>
                </div>
              </div>
              <p className="text-sm text-hof-charcoal/60">
                Termine und Verfügbarkeiten sprechen wir individuell mit Ihnen ab – am besten telefonisch oder per
                E-Mail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2942&auto=format&fit=crop"
                  alt="Kinder beim Ponyreiten auf dem Hof"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INFOS & SICHERHEIT */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-hof-bordeaux text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              <ShieldCheck size={16} />
              Infos &amp; Sicherheit
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-hof-charcoal mb-6">
              Gut vorbereitet in den Sattel
            </h2>
            <p className="text-lg text-hof-charcoal/70 max-w-2xl mx-auto">
              Damit der Besuch in der Reitschule für alle entspannt wird, haben wir die wichtigsten Punkte hier
              zusammengefasst.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl border border-hof-charcoal/10 p-7 shadow-md"
            >
              <div className="flex items-center gap-3 mb-3 text-hof-charcoal">
                <Clock size={18} />
                <h3 className="font-semibold">Termine &amp; Dauer</h3>
              </div>
              <p className="text-sm text-hof-charcoal/70">
                Reitstunden dauern in der Regel 45–60 Minuten. Wir planen genug Zeit für Ankommen, Putzen und Satteln
                ein.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl border border-hof-charcoal/10 p-7 shadow-md"
            >
              <div className="flex items-center gap-3 mb-3 text-hof-charcoal">
                <Sun size={18} />
                <h3 className="font-semibold">Ausrüstung</h3>
              </div>
              <p className="text-sm text-hof-charcoal/70">
                Bequeme, wetterfeste Kleidung, feste Schuhe mit kleinem Absatz reichen für den Anfang. Reithelme können
                bei uns ausgeliehen werden.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl border border-hof-charcoal/10 p-7 shadow-md"
            >
              <div className="flex items-center gap-3 mb-3 text-hof-charcoal">
                <MapPin size={18} />
                <h3 className="font-semibold">Treffpunkt</h3>
              </div>
              <p className="text-sm text-hof-charcoal/70">
                Wir treffen uns immer einige Minuten vor Beginn am Reitplatz oder in der Halle – die genaue Info erhalten
                Sie mit der Terminbestätigung.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-hof-forest">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Fragen zur Reitschule?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Schreiben Sie uns oder rufen Sie an – gemeinsam finden wir den passenden Einstieg für Sie oder Ihr Kind.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-hof-gold text-hof-charcoal px-8 py-4 rounded-full font-semibold hover:bg-hof-gold-light transition-colors"
              >
                Kontakt aufnehmen
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
