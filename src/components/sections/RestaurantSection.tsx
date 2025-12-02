import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function RestaurantSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop"
        alt="Restaurant Die Stub'n"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Elegant Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 63, 46, 0.7) 0%, rgba(0, 63, 46, 0.85) 100%)',
        }}
      />
      
      {/* Content - Storytelling Teaser */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-hof-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Restaurant
          </span>
          
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]">
            Die Stub'n
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/85 leading-relaxed mb-4 max-w-2xl mx-auto">
            Wo Geschichte auf Genuss trifft.
          </p>
          
          <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Unter dem historischen Reetdach von 1500 servieren wir ehrliche Hofküche – 
            jedes Gericht erzählt die Geschichte unserer Weiden und Gärten.
          </p>

          <Link
            to="/restaurant"
            className="group inline-flex items-center gap-3 text-hof-gold font-semibold text-lg hover:text-white transition-colors duration-300"
          >
            <span>Unsere Philosophie entdecken</span>
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
