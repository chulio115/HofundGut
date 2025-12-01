import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Utensils, Award, Home, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Utensils,
    title: 'Regionale Hofküche',
    description: 'Kreative Gerichte aus frischen, saisonalen Zutaten unserer Region.',
    link: '#restaurant',
  },
  {
    icon: Award,
    title: 'Premium Fleischqualität',
    description: '4 Wochen dry-aged. Aus eigener Zucht. Ehrlich und würzig.',
    link: '#fleisch',
  },
  {
    icon: Home,
    title: 'Historisches Ambiente',
    description: 'Ein denkmalgeschütztes Bauernhaus aus dem 16. Jahrhundert.',
    link: '#hof',
  },
  {
    icon: Heart,
    title: 'Mit Leidenschaft',
    description: 'Familienbetrieb mit Herz – persönlich und authentisch.',
    link: '#kontakt',
  },
];

export default function HighlightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="highlights" className="py-20 bg-hof-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-hof-forest to-hof-forest-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-hof-forest/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-hof-cream/20 transition-colors">
                  <item.icon 
                    size={24} 
                    className="text-hof-forest group-hover:text-hof-cream transition-colors" 
                  />
                </div>
                
                <h3 className="font-display text-lg font-semibold text-hof-charcoal mb-2 group-hover:text-hof-cream transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-hof-charcoal/60 leading-relaxed group-hover:text-hof-cream/80 transition-colors">
                  {item.description}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-1 text-hof-forest group-hover:text-hof-gold transition-colors">
                  <span className="text-sm font-medium">Mehr erfahren</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
