import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import ReservationModal from '../ui/ReservationModal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showReservation, setShowReservation] = useState(false);

  return (
    <>
      <footer className="bg-gradient-to-b from-hof-sage to-hof-forest">
        {/* Main Footer - Lighter top section */}
        <div className="bg-hof-cream/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              
              {/* Brand + Öffnungszeiten */}
              <div className="text-center md:text-left">
                <Link to="/" className="inline-block mb-6">
                  <div className="flex items-baseline gap-1 justify-center md:justify-start">
                    <span className="font-display text-2xl font-bold text-hof-forest">Hof</span>
                    <span className="font-display text-3xl font-light text-hof-gold">&</span>
                    <span className="font-display text-2xl font-bold text-hof-forest">Gut</span>
                  </div>
                  <p className="text-hof-bordeaux text-[10px] font-semibold tracking-[0.3em] uppercase mt-1 text-center md:text-left">
                    Jesteburg
                  </p>
                </Link>
                
                <div className="space-y-1 text-sm text-hof-charcoal/70">
                  <p className="text-hof-bordeaux text-xs font-semibold uppercase tracking-wider mb-3">Öffnungszeiten</p>
                  <p>Do – Fr: ab 17:30</p>
                  <p>Samstag: ab 16:30</p>
                  <p>Sonntag: ab 12:00</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="text-center md:text-left">
                <h4 className="text-hof-bordeaux text-xs font-semibold uppercase tracking-wider mb-6">Navigation</h4>
                <ul className="space-y-3 text-sm text-hof-charcoal/70">
                  <li><Link to="/restaurant" className="hover:text-hof-bordeaux transition-colors">Restaurant</Link></li>
                  <li><Link to="/aubrac" className="hover:text-hof-bordeaux transition-colors">Die Rinder</Link></li>
                  <li><Link to="/hof" className="hover:text-hof-bordeaux transition-colors">Der Hof</Link></li>
                  <li><Link to="/hofladen" className="hover:text-hof-bordeaux transition-colors">Hofladen</Link></li>
                  <li><Link to="/speisekarte" className="hover:text-hof-bordeaux transition-colors">Speisekarte</Link></li>
                </ul>
              </div>

              {/* Kontakt */}
              <div className="text-center md:text-left">
                <h4 className="text-hof-bordeaux text-xs font-semibold uppercase tracking-wider mb-6">Kontakt</h4>
                <div className="space-y-4 text-sm text-hof-charcoal/70">
                  <div className="flex items-start gap-3 justify-center md:justify-start">
                    <MapPin size={18} className="text-hof-forest flex-shrink-0 mt-0.5" />
                    <div>
                      <p>Itzenbütteler Sod 13-15</p>
                      <p>21266 Jesteburg</p>
                    </div>
                  </div>
                  <a href="tel:+494181217070" className="flex items-center gap-3 justify-center md:justify-start hover:text-hof-bordeaux transition-colors">
                    <Phone size={18} className="text-hof-forest flex-shrink-0" />
                    <span>04181 / 217070</span>
                  </a>
                  <a href="mailto:info@hof-und-gut.de" className="flex items-center gap-3 justify-center md:justify-start hover:text-hof-bordeaux transition-colors">
                    <Mail size={18} className="text-hof-forest flex-shrink-0" />
                    <span>info@hof-und-gut.de</span>
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center md:text-left">
                <h4 className="text-hof-bordeaux text-xs font-semibold uppercase tracking-wider mb-6">Reservierung</h4>
                <p className="text-sm text-hof-charcoal/70 mb-6 leading-relaxed">
                  Wir freuen uns auf Ihren Besuch in unserem Restaurant.
                </p>
                <button
                  onClick={() => setShowReservation(true)}
                  className="inline-block px-8 py-3.5 text-sm font-semibold text-white bg-hof-bordeaux rounded-full hover:bg-hof-bordeaux-light transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Tisch reservieren
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Dark */}
        <div className="bg-hof-forest border-t border-white/10 safe-bottom">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
              <p>© {currentYear} Hof & Gut Jesteburg. Alle Rechte vorbehalten.</p>
              <div className="flex items-center gap-6 sm:gap-8">
                <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
                <a href="https://adaptify-labs.de" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  by Adaptify Labs
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showReservation && <ReservationModal onClose={() => setShowReservation(false)} />}
    </>
  );
}
