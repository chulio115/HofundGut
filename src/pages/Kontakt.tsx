import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Car, Train } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse',
    content: ['Itzenbütteler Sod 13-15', '21266 Jesteburg'],
    action: { label: 'Route planen', href: 'https://maps.google.com/?q=Itzenbütteler+Sod+13-15+21266+Jesteburg' }
  },
  {
    icon: Phone,
    title: 'Telefon',
    content: ['04181 / 217070'],
    action: { label: 'Jetzt anrufen', href: 'tel:+494181217070' }
  },
  {
    icon: Mail,
    title: 'E-Mail',
    content: ['info@hof-und-gut.de'],
    action: { label: 'E-Mail senden', href: 'mailto:info@hof-und-gut.de' }
  },
  {
    icon: Clock,
    title: 'Öffnungszeiten',
    content: ['Mo, Do, Fr: 17:30–22:00', 'Sa: 16:30–22:00', 'So: 12:00–22:00', 'Di & Mi: Ruhetag'],
  },
];

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-hof-cream">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hof-forest overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2074')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-hof-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Kontakt
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Wir freuen uns
              <span className="block text-hof-gold">auf Sie.</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl">
              Ob Tischreservierung, Fleischbestellung oder Eventanfrage – 
              wir sind für Sie da.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-hof-cream-dark">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <info.icon size={28} className="text-hof-forest mb-4" />
                <h3 className="font-display font-semibold text-hof-charcoal mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 text-sm text-hof-charcoal/70 mb-4">
                  {info.content.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action.href}
                    target={info.action.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-hof-terracotta text-sm font-medium hover:text-hof-forest transition-colors"
                  >
                    {info.action.label} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl font-bold text-hof-charcoal mb-6">
                Nachricht senden
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-hof-forest/10 rounded-2xl p-12 text-center"
                >
                  <CheckCircle size={64} className="text-hof-forest mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold text-hof-charcoal mb-2">
                    Vielen Dank!
                  </h3>
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
                        className="w-full px-4 py-3 rounded-xl border border-hof-charcoal/20 focus:border-hof-forest focus:ring-2 focus:ring-hof-forest/20 outline-none transition-all bg-white"
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
                        className="w-full px-4 py-3 rounded-xl border border-hof-charcoal/20 focus:border-hof-forest focus:ring-2 focus:ring-hof-forest/20 outline-none transition-all bg-white"
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
                      className="w-full px-4 py-3 rounded-xl border border-hof-charcoal/20 focus:border-hof-forest focus:ring-2 focus:ring-hof-forest/20 outline-none transition-all bg-white"
                      placeholder="Für Rückrufe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-hof-charcoal mb-2">
                      Betreff
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-hof-charcoal/20 focus:border-hof-forest focus:ring-2 focus:ring-hof-forest/20 outline-none transition-all bg-white">
                      <option value="">Bitte auswählen</option>
                      <option value="tisch">Tischreservierung</option>
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
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-hof-charcoal/20 focus:border-hof-forest focus:ring-2 focus:ring-hof-forest/20 outline-none transition-all resize-none bg-white"
                      placeholder="Wie können wir Ihnen helfen?"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-hof-forest text-white py-4 rounded-xl font-medium hover:bg-hof-forest-light transition-colors flex items-center justify-center gap-2"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={18} />
                    Nachricht senden
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map & Directions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl font-bold text-hof-charcoal mb-6">
                So finden Sie uns
              </h2>

              {/* Map */}
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
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
              </div>

              {/* Directions */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-hof-cream-dark rounded-xl">
                  <Car size={24} className="text-hof-forest shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-semibold text-hof-charcoal mb-1">Mit dem Auto</h4>
                    <p className="text-sm text-hof-charcoal/70">
                      A7 Ausfahrt Egestorf, dann der Beschilderung nach Jesteburg folgen. 
                      Parkplätze direkt am Hof vorhanden.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-hof-cream-dark rounded-xl">
                  <Train size={24} className="text-hof-forest shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-semibold text-hof-charcoal mb-1">Mit der Bahn</h4>
                    <p className="text-sm text-hof-charcoal/70">
                      Bahnhof Jesteburg (Strecke Hamburg–Buchholz), ca. 3 km zum Hof. 
                      Taxi empfohlen oder bei Voranmeldung Abholung möglich.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
