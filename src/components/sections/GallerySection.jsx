import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const galleryItems = [
  {
    id: 1,
    title: 'Robotics Team Preparing Autonomous Rover',
    category: 'STEM',
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    aspect: 'aspect-square'
  },
  {
    id: 2,
    title: 'Spring Symphony Orchestra Performance',
    category: 'Arts',
    src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    aspect: 'aspect-video'
  },
  {
    id: 3,
    title: 'Inter-School Swimming Championship',
    category: 'Sports',
    src: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1000&q=80',
    aspect: 'aspect-square'
  },
  {
    id: 4,
    title: 'Graduation Ceremony at Grand Hall',
    category: 'Campus Life',
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    aspect: 'aspect-video'
  },
  {
    id: 5,
    title: 'Biotechnology Hydroponic Experimentation',
    category: 'STEM',
    src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1000&q=80',
    aspect: 'aspect-square'
  },
  {
    id: 6,
    title: 'Astronomical Stargazing Night',
    category: 'Campus Life',
    src: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1000&q=80',
    aspect: 'aspect-square'
  }
];

const categories = ['All', 'STEM', 'Arts', 'Sports', 'Campus Life'];

export default function GallerySection({ onOpenLightbox }) {
  const [filter, setFilter] = useState('All');
  const { theme } = useTheme();

  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-white text-slate-900' : 'bg-brand-slate text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue dark:text-brand-sky text-xs font-bold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>Campus Moments</span>
            </div>
            <h2 className={`font-heading text-3xl sm:text-5xl font-extrabold tracking-tight ${
              theme === 'light' ? 'text-brand-slate' : 'text-white'
            }`}>
              Life at Excellence
            </h2>
            <p className={`text-base ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Explore vibrant glimpses of student inquiry, performances, athletic triumphs, and campus traditions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/30'
                    : theme === 'light'
                      ? 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => onOpenLightbox(item)}
                className={`group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border bg-slate-900 cursor-pointer ${
                  theme === 'light' ? 'border-slate-200' : 'border-white/15'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white" />

                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-brand-blue text-white text-xs font-bold rounded-full">
                      {item.category}
                    </span>
                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-sky mt-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Click to enlarge
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
