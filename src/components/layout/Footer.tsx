import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import ReservationModal from '../ui/ReservationModal';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showReservation, setShowReservation] = useState(false);

  return (
    <>
      {/* Footer with Premium Shine Effect */}
      <footer className="relative overflow-hidden">
        {/* Base Color */}
        <div className="absolute inset-0 bg-hof-bordeaux" />
        
        {/* Subtle Gradient Shine - Top Light */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 100%)',
          }}
        />
        
        {/* Subtle Radial Glow */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 60%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            
            {/* Brand */}
            <div>
              <Link to="/" className="inline-block mb-5">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-xl font-bold text-hof-cream">Hof</span>
                  <span className="font-display text-2xl font-light text-hof-gold">&</span>
                  <span className="font-display text-xl font-bold text-hof-cream">Gut</span>
                </div>
                <p className="text-hof-gold/80 text-[9px] font-medium tracking-[0.25em] uppercase mt-0.5">Jesteburg</p>
              </Link>
              <div className="space-y-1 text-sm text-hof-cream/70">
                <p className="text-hof-cream/50 text-xs uppercase tracking-wider mb-2">Öffnungszeiten</p>
                <p>Do – Fr: ab 17:30</p>
                <p>Sa: ab 16:30 · So: ab 12:00</p>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-hof-cream/50 text-xs uppercase tracking-wider mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-hof-cream/70">
                <li><Link to="/restaurant" className="hover:text-hof-cream transition-colors">Restaurant</Link></li>
                <li><Link to="/aubrac" className="hover:text-hof-cream transition-colors">Die Rinder</Link></li>
                <li><Link to="/hof" className="hover:text-hof-cream transition-colors">Der Hof</Link></li>
                <li><Link to="/hofladen" className="hover:text-hof-cream transition-colors">Hofladen</Link></li>
              </ul>
            </div>

            {/* Kontakt */}
            <div>
              <h4 className="text-hof-cream/50 text-xs uppercase tracking-wider mb-4">Kontakt</h4>
              <div className="space-y-3 text-sm text-hof-cream/70">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-hof-gold mt-1 shrink-0" />
                  <span>Itzenbütteler Sod 13-15, 21266 Jesteburg</span>
                </div>
                <a href="tel:+494181217070" className="flex items-center gap-2 hover:text-hof-cream transition-colors">
                  <Phone size={14} className="text-hof-gold" />
                  <span>04181 / 217070</span>
                </a>
                <a href="mailto:info@hof-und-gut.de" className="flex items-center gap-2 hover:text-hof-cream transition-colors">
                  <Mail size={14} className="text-hof-gold" />
                  <span>info@hof-und-gut.de</span>
                </a>
              </div>
            </div>

            {/* CTA */}
            <div>
              <h4 className="text-hof-cream/50 text-xs uppercase tracking-wider mb-4">Reservierung</h4>
              <p className="text-sm text-hof-cream/70 mb-4">Wir freuen uns auf Ihren Besuch.</p>
              <button
                onClick={() => setShowReservation(true)}
                className="px-6 py-2.5 text-sm font-medium bg-hof-cream text-hof-bordeaux rounded-full hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                Tisch reservieren
              </button>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 pt-6 border-t border-hof-cream/10 flex flex-col sm:flex-row items-center gap-3 text-xs text-hof-cream/40">
            {/* Left: Copyright */}
            <div className="w-full sm:w-auto flex-1 text-center sm:text-left">
              <p>© {currentYear} Hof & Gut Jesteburg</p>
            </div>

            {/* Center: Adaptify Branding */}
            <div className="w-full sm:w-auto flex-1 text-center">
              <a
                href="https://adaptify-labs.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 text-hof-cream/60 hover:text-hof-cream transition-colors"
              >
                <span>made with</span>
                <span className="text-hof-gold">&lt;3</span>
                <span>by Adaptify Labs</span>
              </a>
            </div>

            {/* Right: Legal + Admin */}
            <div className="w-full sm:w-auto flex-1 flex items-center justify-center sm:justify-end gap-6">
              <Link to="/impressum" className="hover:text-hof-cream/60 transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-hof-cream/60 transition-colors">Datenschutz</Link>
              <Link to="/admin" className="hover:text-hof-cream/60 transition-colors">Admin Login</Link>
            </div>
          </div>
        </div>
      </footer>
      {showReservation && <ReservationModal onClose={() => setShowReservation(false)} />}
    </>
  );
}
