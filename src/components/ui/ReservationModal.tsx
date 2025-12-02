import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Users, Clock, User, Mail, Phone, Check } from 'lucide-react';

interface ReservationModalProps {
  onClose: () => void;
}

export default function ReservationModal({ onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    date: '',
    time: '18:00',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    agreed: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send to backend/email
    console.log('Reservation:', formData);
    setIsSubmitted(true);
  };

  const timeSlots = [
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-hof-charcoal/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-md bg-hof-cream rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-hof-forest px-6 py-5 flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold text-white">
            Tisch reservieren
          </h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {isSubmitted ? (
          /* Success State */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-hof-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-hof-forest" />
            </div>
            <h3 className="font-display text-xl font-semibold text-hof-charcoal mb-2">
              Anfrage gesendet!
            </h3>
            <p className="text-hof-charcoal/60 mb-6">
              Wir melden uns in Kürze bei Ihnen.
            </p>
            <button
              onClick={onClose}
              className="bg-hof-forest text-white px-6 py-3 rounded-full font-medium hover:bg-hof-forest-light transition-colors"
            >
              Schließen
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Date */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-hof-charcoal mb-2">
                <Calendar size={16} />
                Datum
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-hof-cream-light border border-hof-charcoal/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-hof-forest/20 transition-all"
              />
            </div>

            {/* Time & Guests Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-hof-charcoal mb-2">
                  <Clock size={16} />
                  Uhrzeit
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 bg-hof-cream-light border border-hof-charcoal/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-hof-forest/20 transition-all"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time} Uhr</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-hof-charcoal mb-2">
                  <Users size={16} />
                  Personen
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, guests: Math.max(1, formData.guests - 1) })}
                    className="w-10 h-10 bg-hof-cream-light border border-hof-charcoal/10 rounded-lg hover:bg-hof-cream-dark transition-colors"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center font-medium">{formData.guests}</span>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, guests: Math.min(12, formData.guests + 1) })}
                    className="w-10 h-10 bg-hof-cream-light border border-hof-charcoal/10 rounded-lg hover:bg-hof-cream-dark transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-hof-charcoal mb-2">
                <User size={16} />
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Ihr Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-hof-cream-light border border-hof-charcoal/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-hof-forest/20 transition-all"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-hof-charcoal mb-2">
                  <Mail size={16} />
                  E-Mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@beispiel.de"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-hof-cream-light border border-hof-charcoal/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-hof-forest/20 transition-all"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-hof-charcoal mb-2">
                  <Phone size={16} />
                  Telefon
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0170..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-hof-cream-light border border-hof-charcoal/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-hof-forest/20 transition-all"
                />
              </div>
            </div>

            {/* DSGVO */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.agreed}
                onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                className="mt-1 w-4 h-4 accent-hof-forest"
              />
              <span className="text-sm text-hof-charcoal/60">
                Ich stimme der Verarbeitung meiner Daten zur Bearbeitung der Reservierungsanfrage zu.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-hof-forest text-white py-4 rounded-xl font-medium hover:bg-hof-forest-light transition-colors"
            >
              Anfrage senden
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
