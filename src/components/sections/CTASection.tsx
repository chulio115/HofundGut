import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: 'Hofladen',
    description: 'Regionale Produkte direkt vom Hof',
    href: '/hofladen',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Reitschule',
    description: 'Reitunterricht für Groß und Klein',
    href: '/reitschule',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2671&auto=format&fit=crop',
  },
  {
    title: 'Übernachten',
    description: 'Gästezimmer in der Heide',
    href: '/hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop',
    comingSoon: true,
  },
];

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-hof-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header - ZENTRIERT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-hof-bordeaux text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Entdecken
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal leading-[1.05]">
            Mehr vom Hof
          </h2>
        </motion.div>

        {/* Cards Grid - ZENTRIERT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group"
            >
              <Link
                to={exp.href}
                className={`block relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  exp.comingSoon ? 'cursor-not-allowed' : ''
                }`}
                onClick={(e) => exp.comingSoon && e.preventDefault()}
              >
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    exp.comingSoon ? 'grayscale' : ''
                  }`}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-hof-forest/90 via-hof-forest/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">
                    {exp.description}
                  </p>
                  {exp.comingSoon ? (
                    <span className="inline-block text-xs font-medium text-hof-gold uppercase tracking-wider">
                      Coming Soon
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-hof-gold text-sm font-medium group-hover:gap-2 transition-all">
                      Entdecken <ArrowRight size={14} />
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
