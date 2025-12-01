import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Users } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Regional & Saisonal',
    description: 'Zutaten von unseren Feldern und regionalen Partnern',
  },
  {
    icon: Heart,
    title: 'Mit Liebe gemacht',
    description: 'Traditionelle Rezepte, modern interpretiert',
  },
  {
    icon: Users,
    title: 'Familiär & Ehrlich',
    description: 'Gastfreundschaft seit über 500 Jahren',
  },
];

export default function PhilosophieSection() {
  return (
    <section id="philosophie" className="py-24 lg:py-32 bg-hof-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2565&auto=format&fit=crop"
                alt="Historischer Hof"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-hof-forest/40 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:right-8 px-6 py-4 rounded-2xl shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #1a3d2e 0%, #152f24 100%)',
              }}
            >
              <p className="text-hof-gold text-sm font-medium">Familientradition</p>
              <p className="text-white text-2xl font-display font-bold">Seit 1500</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-hof-terracotta text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Unsere Philosophie
            </p>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-hof-charcoal mb-6 leading-tight">
              Vom Hof auf 
              <span className="text-hof-forest"> den Teller</span>
            </h2>
            
            <p className="text-lg text-hof-charcoal/60 leading-relaxed mb-8">
              Ein denkmalgeschützter Bauernhof in der Lüneburger Heide, 
              liebevoll saniert und neu belebt. 85 Hektar bio-zertifiziertes Land, 
              eigene Aubrac-Rinderzucht und ein Restaurant, das diese 
              Geschichte auf den Teller bringt.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/60 hover:bg-white transition-colors"
                >
                  <div 
                    className="p-2 rounded-lg"
                    style={{ background: 'rgba(26, 61, 46, 0.1)' }}
                  >
                    <value.icon size={20} className="text-hof-forest" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-hof-charcoal mb-1">{value.title}</h4>
                    <p className="text-sm text-hof-charcoal/60">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/hof"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #1a3d2e 0%, #152f24 100%)',
                boxShadow: '0 4px 15px rgba(26, 61, 46, 0.3)',
              }}
            >
              Den Hof entdecken
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
