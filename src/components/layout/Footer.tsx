import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const footerLinks = {
  restaurant: [
    { name: 'Speisekarte', href: '/speisekarte' },
    { name: 'Reservieren', href: 'tel:+494181217070', external: true },
    { name: 'Öffnungszeiten', href: '/kontakt' },
  ],
  hof: [
    { name: 'Aubrac Rinder', href: '/aubrac' },
    { name: 'Der Hof', href: '/hof' },
    { name: 'Hofladen', href: '/hofladen' },
  ],
  mehr: [
    { name: 'Übernachten', href: '/uebernachten' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative text-white"
      style={{
        background: 'linear-gradient(135deg, #1a3d2e 0%, #152f24 50%, #0f2018 100%)',
      }}
    >
      {/* Gold Accent Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: 'linear-gradient(90deg, #8B4513 0%, #c9a227 50%, #8B4513 100%)',
        }}
      />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h3 className="font-display text-3xl font-bold text-white">
                Hof & Gut
              </h3>
              <p className="text-hof-gold text-sm font-medium tracking-wider">JESTEBURG</p>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Regionale Hofküche unter historischem Reetdach. 
              Familientradition seit 1500.
            </p>
            
            {/* Contact Quick Links */}
            <div className="space-y-3">
              <a 
                href="tel:+494181217070" 
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-hof-gold" />
                <span className="text-sm">04181 / 217070</span>
              </a>
              <a 
                href="mailto:info@hof-und-gut.de" 
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-hof-gold" />
                <span className="text-sm">info@hof-und-gut.de</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 grid grid-cols-3 gap-8">
            {/* Restaurant */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Restaurant</h4>
              <ul className="space-y-3">
                {footerLinks.restaurant.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Der Hof */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Der Hof</h4>
              <ul className="space-y-3">
                {footerLinks.hof.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mehr */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Mehr</h4>
              <ul className="space-y-3">
                {footerLinks.mehr.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Info Card */}
          <div className="lg:col-span-1">
            <div 
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(255, 255, 255, 0.05)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-hof-gold" />
                <h4 className="text-sm font-semibold text-white">Öffnungszeiten</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50">Do – Fr</span>
                  <span className="text-white/80">ab 17:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Samstag</span>
                  <span className="text-white/80">ab 16:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Sonntag</span>
                  <span className="text-white/80">ab 12:00</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-white/40 mt-0.5" />
                  <div className="text-sm text-white/50">
                    <p>Itzenbütteler Sod 13-15</p>
                    <p>21266 Jesteburg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              © {currentYear} Hof & Gut Jesteburg. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6 text-xs">
              <Link to="/impressum" className="text-white/30 hover:text-white/60 transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-white/30 hover:text-white/60 transition-colors">
                Datenschutz
              </Link>
              <a 
                href="https://adaptify-labs.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white/60 transition-colors"
              >
                Made by Adaptify Labs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
