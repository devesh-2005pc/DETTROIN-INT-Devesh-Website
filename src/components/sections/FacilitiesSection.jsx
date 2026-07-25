import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Sparkles, Cpu, Dumbbell, Compass, Music, BookOpen, ExternalLink, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const facilities = [
  {
    id: 1,
    title: 'AI & Robotics Innovation Hub',
    category: 'STEM & Tech',
    icon: Cpu,
    description: 'Equipped with industrial 3D printers, humanoid robotics platforms, micro-controller benches, and VR simulation suites.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    specs: ['3D Printing Workstations', 'GPU AI Training Rig', 'FIRST Robotics Field']
  },
  {
    id: 2,
    title: 'Olympic Swimming & Aquatics Complex',
    category: 'Sports & Wellness',
    icon: Dumbbell,
    description: '50-meter temperature-controlled aquatic center with touch-pad timing, spectator seating for 600, and certified coaching staff.',
    image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1000&q=80',
    specs: ['10-Lane 50m Pool', 'Electronic Touchpads', 'Aquatic Therapy Zone']
  },
  {
    id: 3,
    title: 'Carl Sagan Astronomical Observatory',
    category: 'Science & Cosmos',
    icon: Compass,
    description: 'Computerized optical telescope dome for deep-sky observation, astrophotography, and student-led space research.',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1000&q=80',
    specs: ['14-inch Celestron Telescope', 'Spectroscopy Camera', 'Planetarium Dome']
  },
  {
    id: 4,
    title: 'Grand Performing Arts Auditorium',
    category: 'Culture & Arts',
    icon: Music,
    description: '800-seat acoustic theater featuring motorized stage rigging, broadcast-grade audio, and orchestral pit.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    specs: ['800-Seat Capacity', 'Digital Mixing Console', 'Green Rooms & Dressing Bays']
  },
  {
    id: 5,
    title: 'Digital Knowledge Commons',
    category: 'Library & Media',
    icon: BookOpen,
    description: 'Collaborative study space with access to 80,000+ print volumes, global academic journal databases, and pod quiet rooms.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
    specs: ['JSTOR & IEEE Access', 'Private Pod Rooms', 'Podcast Production Studio']
  },
  {
    id: 6,
    title: 'Eco-Biotechnology Research Lab',
    category: 'Environment',
    icon: Building2,
    description: 'Climate-controlled greenhouse and hydroponic research laboratory for hydroponic agriculture and genetics projects.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1000&q=80',
    specs: ['Hydroponic Systems', 'DNA Sequencer Benches', 'Climate Controlled Bays']
  }
];

export default function FacilitiesSection({ onOpenVirtualTour }) {
  const [activeFacility, setActiveFacility] = useState(null);
  const { theme } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-white text-slate-900' : 'bg-brand-slate text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue dark:text-brand-sky text-xs font-extrabold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Campus Infrastructure</span>
            </div>
            <h2 className={`font-heading text-3xl sm:text-5xl font-extrabold tracking-tight ${
              theme === 'light' ? 'text-brand-slate' : 'text-white'
            }`}>
              State-of-the-Art Learning Spaces
            </h2>
            <p className={`text-base sm:text-lg ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Designed to inspire discovery, athletic mastery, artistic brilliance, and scientific breakthroughs.
            </p>
          </div>

          <button
            onClick={onOpenVirtualTour}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-sm shadow-xl shadow-brand-blue/30 transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>Launch Virtual 3D Tour</span>
          </button>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const IconComponent = fac.icon;
            return (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setActiveFacility(fac)}
                className={`group cursor-pointer rounded-3xl border shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  theme === 'light'
                    ? 'bg-slate-50 border-slate-200 text-slate-900 hover:border-brand-blue/40'
                    : 'bg-slate-900/90 border-white/15 text-white hover:border-brand-sky/40'
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 px-3 py-1 bg-brand-slate/80 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/10">
                    {fac.category}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold text-slate-200">Click for specifications</span>
                    <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white group-hover:bg-brand-sky group-hover:text-brand-slate transition-all shadow-md">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-brand-blue/15 text-brand-blue dark:text-brand-sky">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue dark:text-brand-sky">
                        {fac.category}
                      </span>
                    </div>

                    <h3 className={`font-heading font-bold text-xl transition-colors ${
                      theme === 'light' ? 'text-brand-slate group-hover:text-brand-blue' : 'text-white group-hover:text-brand-sky'
                    }`}>
                      {fac.title}
                    </h3>

                    <p className={`text-sm line-clamp-2 mt-2 leading-relaxed ${
                      theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                    }`}>
                      {fac.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-1.5">
                    {fac.specs.slice(0, 2).map((spec, sIdx) => (
                      <span 
                        key={sIdx} 
                        className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${
                          theme === 'light' ? 'bg-slate-200/70 text-slate-700' : 'bg-white/10 text-slate-200'
                        }`}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Facility Detail Modal */}
      <AnimatePresence>
        {activeFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border ${
                theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-brand-slate border-white/20 text-white'
              }`}
            >
              <div className="relative h-64 sm:h-72">
                <img
                  src={activeFacility.image}
                  alt={activeFacility.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveFacility(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 px-4 py-1.5 bg-brand-blue text-white text-xs font-bold rounded-full">
                  {activeFacility.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <h3 className={`font-heading text-2xl font-extrabold ${
                  theme === 'light' ? 'text-brand-slate' : 'text-white'
                }`}>
                  {activeFacility.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  {activeFacility.description}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Specifications & Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeFacility.specs.map((spec, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${
                          theme === 'light' ? 'bg-slate-100 border-slate-300 text-slate-800' : 'bg-white/10 border-white/15 text-white'
                        }`}
                      >
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    onClick={() => {
                      setActiveFacility(null);
                      onOpenVirtualTour();
                    }}
                    className="w-full py-3 bg-brand-blue hover:bg-blue-600 rounded-xl text-white font-bold text-sm shadow-md"
                  >
                    View in 360° Virtual Tour
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
