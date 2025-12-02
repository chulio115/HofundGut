import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import ReservationModal from '../ui/ReservationModal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showReservation, setShowReservation] = useState(false);

  return (
    <>
      <footer className="bg-hof-forest text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            {/* Brand */}
            <div>
              <Link to="/" className="inline-block mb-5">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-xl font-bold text-white">Hof</span>
                  <span className="font-display text-2xl font-light text-hof-gold">&</span>
                  <span className="font-display text-xl font-bold text-white">Gut</span>
                </div>
                <p className="text-hof-gold/80 text-[9px] font-medium tracking-[0.25em] uppercase mt-0.5">Jesteburg</p>
              </Link>
              <div className="space-y-1 text-sm text-white/60">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Öffnungszeiten</p>
                <p>Do – Fr: ab 17:30</p>
                <p>Sa: ab 16:30 · So: ab 12:00</p>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link to="/restaurant" className="hover:text-white transition-colors">Restaurant</Link></li>
                <li><Link to="/aubrac" className="hover:text-white transition-colors">Die Rinder</Link></li>
                <li><Link to="/hof" className="hover:text-white transition-colors">Der Hof</Link></li>
                <li><Link to="/hofladen" className="hover:text-white transition-colors">Hofladen</Link></li>
              </ul>
            </div>

            {/* Kontakt */}
            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-wider mb-4">Kontakt</h4>
              <div className="space-y-3 text-sm text-white/60">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-hof-gold mt-1 shrink-0" />
                  <span>Itzenbütteler Sod 13-15, 21266 Jesteburg</span>
                </div>
                <a href="tel:+494181217070" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={14} className="text-hof-gold" />
                  <span>04181 / 217070</span>
                </a>
                <a href="mailto:info@hof-und-gut.de" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={14} className="text-hof-gold" />
                  <span>info@hof-und-gut.de</span>
                </a>
              </div>
            </div>

            {/* CTA */}
            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-wider mb-4">Reservierung</h4>
              <p className="text-sm text-white/60 mb-4">Wir freuen uns auf Ihren Besuch.</p>
              <button
                onClick={() => setShowReservation(true)}
                className="px-6 py-2.5 text-sm font-medium bg-hof-gold text-hof-forest rounded-full hover:bg-hof-gold-light transition-colors"
              >
                Tisch reservieren
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>© {currentYear} Hof & Gut Jesteburg</p>
            <div className="flex items-center gap-6">
              <Link to="/impressum" className="hover:text-white/60 transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-white/60 transition-colors">Datenschutz</Link>
              <a href="https://adaptify-labs.de" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Adaptify Labs</a>
            </div>
          </div>
        </div>
      </footer>
      {showReservation && <ReservationModal onClose={() => setShowReservation(false)} />}
    </>
  );
}
