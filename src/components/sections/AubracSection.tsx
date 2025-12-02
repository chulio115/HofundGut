import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AubracSection() {
  return (
    <section className="py-24 lg:py-32 bg-hof-sage">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-items-center">
          
          {/* Image - Rechts auf Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-lg lg:max-w-none order-1 lg:order-2"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/aubrac-rinder.jpg"
                alt="Aubrac Rinder auf der Weide von Hof & Gut"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Content - Links auf Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-lg text-center lg:text-left order-2 lg:order-1"
          >
            <span className="inline-block text-hof-bordeaux text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Unsere Rinder
            </span>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-hof-charcoal mb-6 leading-[1.05]">
              Aubrac
            </h2>
            
            <p className="text-lg lg:text-xl text-hof-charcoal/70 leading-relaxed mb-8">
              Eine der ältesten Rinderrassen Europas. Aufgewachsen auf unseren 
              bio-zertifizierten Weiden – mit Zeit, Respekt und ohne Kompromisse.
            </p>

            <Link
              to="/aubrac"
              className="group inline-flex items-center gap-3 text-hof-bordeaux font-semibold text-lg hover:gap-5 transition-all duration-300"
            >
              <span>Die ganze Geschichte</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
