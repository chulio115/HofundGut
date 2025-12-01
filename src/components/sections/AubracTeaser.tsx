import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Timer, Sprout } from 'lucide-react';

const features = [
  {
    icon: Timer,
    title: '3 Jahre',
    description: 'Artgerechte Aufzucht ohne Zeitdruck',
  },
  {
    icon: Sprout,
    title: '85 Hektar',
    description: 'Bio-zertifizierte Weideflächen',
  },
  {
    icon: Award,
    title: 'Dry Aged',
    description: 'Bis zu 28 Tage gereift',
  },
];

export default function AubracSection() {
  return (
    <section 
      id="aubrac" 
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a3d2e 0%, #152f24 50%, #0f2018 100%)',
      }}
    >
      {/* Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(201, 162, 39, 0.15)',
                border: '1px solid rgba(201, 162, 39, 0.3)',
              }}
            >
              <Award size={16} className="text-hof-gold" />
              <span className="text-hof-gold text-sm font-medium">Unser USP</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Aubrac 
              <span 
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #c9a227 0%, #e8c547 50%, #c9a227 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Rinder
              </span>
            </h2>
            
            <p className="text-lg text-white/70 leading-relaxed mb-10">
              Französische Edelrinder aus dem Zentralmassiv – eine der ältesten 
              und edelsten Rinderrassen Europas. Aufgewachsen auf unseren 
              bio-zertifizierten Weiden in der Lüneburger Heide, mit viel Zeit 
              und ohne Kompromisse.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl"
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <feature.icon size={24} className="text-hof-gold mx-auto mb-2" />
                  <p className="text-white font-bold text-lg">{feature.title}</p>
                  <p className="text-white/50 text-xs">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <Link
              to="/aubrac"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
              }}
            >
              Mehr über unsere Rinder
              <span>→</span>
            </Link>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?q=80&w=2815&auto=format&fit=crop"
                alt="Aubrac Rinder auf der Weide"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.1) 0%, transparent 50%)',
                }}
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 lg:left-8 px-6 py-4 rounded-2xl shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #8B4513 0%, #a65d2e 100%)',
              }}
            >
              <p className="text-white/70 text-sm">Qualitätsversprechen</p>
              <p className="text-white text-xl font-display font-bold">100% eigene Zucht</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gold Accent Line at Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #c9a227 50%, transparent 100%)',
        }}
      />
    </section>
  );
}
