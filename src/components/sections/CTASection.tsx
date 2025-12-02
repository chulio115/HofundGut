import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: 'Restaurant',
    description: 'Zur Stub\'n',
    href: '/restaurant',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940',
  },
  {
    title: 'Die Rinder',
    description: 'Aubrac entdecken',
    href: '/aubrac',
    image: '/images/aubrac-rinder.jpg',
  },
  {
    title: 'Hofladen',
    description: 'Für zuhause',
    href: '/hofladen',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2670',
  },
];

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-hof-forest">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mehr entdecken
          </h2>
          <p className="text-white/60 text-lg">
            Der Hof hat viele Seiten. Lernen Sie sie alle kennen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={exp.href}
                className="group block relative rounded-xl overflow-hidden aspect-[4/3]"
              >
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hof-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <span className="inline-flex items-center gap-1 text-hof-gold text-sm group-hover:gap-2 transition-all">
                    {exp.description} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
