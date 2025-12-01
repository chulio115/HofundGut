import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import ReservationModal from '../ui/ReservationModal';

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="cta" className="py-24 lg:py-32 bg-hof-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="relative rounded-3xl overflow-hidden p-8 lg:p-16"
            style={{
              background: 'linear-gradient(135deg, #1a3d2e 0%, #152f24 50%, #0f2018 100%)',
            }}
          >
            {/* Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            {/* Gold Accent Line */}
            <div 
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{
                background: 'linear-gradient(90deg, #8B4513 0%, #c9a227 50%, #8B4513 100%)',
              }}
            />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                  Wir freuen uns auf 
                  <span className="text-hof-gold"> Ihren Besuch</span>
                </h2>

                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Reservieren Sie Ihren Tisch und erleben Sie regionale 
                  Hofküche im historischen Ambiente – mit frischen Zutaten 
                  vom eigenen Hof und Fleisch von unseren Aubrac-Rindern.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #8B4513 0%, #a65d2e 100%)',
                      boxShadow: '0 4px 20px rgba(139, 69, 19, 0.4)',
                    }}
                    whileHover={{ 
                      y: -3, 
                      boxShadow: '0 8px 30px rgba(139, 69, 19, 0.5)' 
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone size={18} />
                    Tisch reservieren
                  </motion.button>

                  <motion.a
                    href="mailto:info@hof-und-gut.de"
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: 'white',
                    }}
                    whileHover={{ y: -2 }}
                  >
                    <Mail size={18} />
                    E-Mail schreiben
                  </motion.a>
                </div>
              </motion.div>

              {/* Right: Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                {/* Phone */}
                <a 
                  href="tel:+494181217070"
                  className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:bg-white/10"
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <div className="p-3 rounded-xl bg-hof-gold/20">
                    <Phone size={24} className="text-hof-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Telefon</p>
                    <p className="text-white text-lg font-semibold">04181 / 217070</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:info@hof-und-gut.de"
                  className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:bg-white/10"
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <div className="p-3 rounded-xl bg-hof-terracotta/20">
                    <Mail size={24} className="text-hof-terracotta" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">E-Mail</p>
                    <p className="text-white text-lg font-semibold">info@hof-und-gut.de</p>
                  </div>
                </a>

                {/* Address */}
                <div 
                  className="flex items-center gap-4 p-5 rounded-2xl"
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <div className="p-3 rounded-xl bg-white/10">
                    <MapPin size={24} className="text-white/70" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Adresse</p>
                    <p className="text-white text-lg font-semibold">Itzenbütteler Sod 13-15</p>
                    <p className="text-white/70 text-sm">21266 Jesteburg</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <ReservationModal onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
