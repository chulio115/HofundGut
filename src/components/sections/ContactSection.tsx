import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="kontakt" className="py-24 bg-hof-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-hof-terracotta font-medium text-sm uppercase tracking-wider mb-4"
          >
            Kontakt
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6"
          >
            Wir freuen uns{' '}
            <span className="text-hof-forest">auf Sie</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-hof-charcoal/70 max-w-3xl mx-auto"
          >
            Ob Tischreservierung, Zimmeranfrage oder Fleischbestellung – 
            wir sind für Sie da. Rufen Sie an oder schreiben Sie uns.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div>
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <MapPin size={24} className="text-hof-forest mb-3" />
                <h4 className="font-display font-semibold text-hof-charcoal mb-2">Adresse</h4>
                <p className="text-sm text-hof-charcoal/60">
                  Itzenbütteler Sod 13-15<br />
                  21266 Jesteburg
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <Phone size={24} className="text-hof-forest mb-3" />
                <h4 className="font-display font-semibold text-hof-charcoal mb-2">Telefon</h4>
                <a href="tel:+494181217070" className="text-sm text-hof-terracotta hover:underline">
                  04181 / 217070
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <Mail size={24} className="text-hof-forest mb-3" />
                <h4 className="font-display font-semibold text-hof-charcoal mb-2">E-Mail</h4>
                <a href="mailto:info@hof-und-gut.de" className="text-sm text-hof-terracotta hover:underline">
                  info@hof-und-gut.de
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <Clock size={24} className="text-hof-forest mb-3" />
                <h4 className="font-display font-semibold text-hof-charcoal mb-2">Öffnungszeiten</h4>
                <p className="text-sm text-hof-charcoal/60">
                  Mo, Do-So geöffnet<br />
                  Di & Mi Ruhetag
                </p>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="aspect-video rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2416.1234567890123!2d9.9234567!3d53.3234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHof%20%26%20Gut%20Jesteburg!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hof & Gut Jesteburg Standort"
              />
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="font-display text-2xl font-bold text-hof-charcoal mb-6">
              Nachricht senden
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <CheckCircle size={64} className="text-hof-forest mb-4" />
                <h4 className="font-display text-xl font-semibold text-hof-charcoal mb-2">
                  Vielen Dank!
                </h4>
                <p className="text-hof-charcoal/60">
                  Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-hof-charcoal mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-hof-cream-dark focus:border-hof-forest focus:ring-2 focus:ring-hof-forest/20 outline-none transition-all"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-hof-charcoal mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-hof-cream-dark focus:border-hof-forest focus:ring-2 focus:ring-hof-forest/20 outline-none transition-all"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-hof-charcoal mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-hof-cream-dark focus:border-hof-forest focus:ring-2 focus:ring-hof-forest/20 outline-none transition-all"
                    placeholder="Für Rückrufe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-hof-charcoal mb-2">
                    Betreff
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-hof-cream-dark focus:border-hof-forest focus:ring-2 focus:ring-hof-forest/20 outline-none transition-all bg-white"
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="tisch">Tischreservierung</option>
                    <option value="zimmer">Zimmeranfrage</option>
                    <option value="fleisch">Fleischbestellung</option>
                    <option value="event">Veranstaltung / Event</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-hof-charcoal mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-hof-cream-dark focus:border-hof-forest focus:ring-2 focus:ring-hof-forest/20 outline-none transition-all resize-none"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-hof-forest text-hof-cream py-4 rounded-xl font-medium hover:bg-hof-forest-light transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  Nachricht senden
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
