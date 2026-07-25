import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Compass, MapPin, Sparkles, Building2, Cpu, Dumbbell, BookOpen } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const tourSpots = [
  {
    id: 'robotics',
    title: 'AI & Robotics Innovation Hub',
    description: 'State-of-the-art lab equipped with 3D printers, humanoid robotics kits, and AI workstations.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    category: 'Innovation'
  },
  {
    id: 'sports',
    title: 'Olympic Swimming & Aquatics Center',
    description: 'Temperature-controlled 50-meter pool with electronic timing gear and grandstand seating.',
    image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1200&q=80',
    category: 'Athletics'
  },
  {
    id: 'observatory',
    title: 'Carl Sagan Astronomical Observatory',
    description: 'Deep-space optical telescope dome for student-led astronomical study and stargazing nights.',
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    category: 'Science'
  },
  {
    id: 'theater',
    title: 'Grand Performing Arts Auditorium',
    description: '800-seat theater featuring proscenium stage, acoustic acoustics, and broadcast studio equipment.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    category: 'Arts'
  }
];

export default function VirtualTourModal({ isOpen, onClose }) {
  const [activeSpot, setActiveSpot] = useState(tourSpots[0]);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`relative w-full max-w-5xl rounded-3xl border shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] ${
            theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-brand-slate border-white/15 text-white'
          }`}
        >
          {/* Header Bar */}
          <div className={`flex items-center justify-between px-6 py-4 border-b ${
            theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/50 border-white/10'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-brand-blue/15 border border-brand-blue/30 text-brand-blue dark:text-brand-sky">
                <Compass className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <h3 className={`font-heading font-bold text-lg flex items-center gap-2 ${
                  theme === 'light' ? 'text-brand-slate' : 'text-white'
                }`}>
                  <span>360° Interactive Virtual Tour</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider bg-brand-blue/15 text-brand-blue dark:text-brand-sky border border-brand-blue/30">Live 3D</span>
                </h3>
                <p className={`text-xs ${
                  theme === 'light' ? 'text-slate-500' : 'text-slate-400'
                }`}>Explore Excellence International Campus Landmarks</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                theme === 'light' ? 'bg-slate-200/80 text-slate-600 hover:text-slate-900' : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 overflow-y-auto">
            {/* Main Visual Display */}
            <div className="lg:col-span-2 relative min-h-[320px] sm:min-h-[420px] bg-slate-950 group">
              <img
                src={activeSpot.image}
                alt={activeSpot.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate via-transparent to-black/30" />

              {/* Tag overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue text-white shadow-lg">
                  {activeSpot.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-slate-200 border border-white/10 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-sky" /> Main Campus Wing A
                </span>
              </div>

              {/* Interactive Hotspot Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-white">
                <h4 className="font-heading text-xl font-bold text-white mb-1">
                  {activeSpot.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {activeSpot.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-brand-sky font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> High Precision 4K Spatial View
                  </span>
                  <button 
                    onClick={() => alert(`Starting 360° VR Mode for ${activeSpot.title}...`)}
                    className="px-4 py-1.5 rounded-lg bg-brand-blue hover:bg-blue-600 text-white text-xs font-medium transition-all shadow-md cursor-pointer"
                  >
                    Enter 360° VR
                  </button>
                </div>
              </div>
            </div>

            {/* Side Navigation for Hotspots */}
            <div className={`p-6 border-l space-y-4 ${
              theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900/60 border-white/10'
            }`}>
              <h4 className={`font-heading text-sm font-bold uppercase tracking-wider mb-2 ${
                theme === 'light' ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Campus Highlights
              </h4>

              <div className="space-y-3">
                {tourSpots.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => setActiveSpot(spot)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all border cursor-pointer ${
                      activeSpot.id === spot.id
                        ? theme === 'light'
                          ? 'bg-brand-blue/10 border-brand-blue text-brand-slate shadow-md'
                          : 'bg-brand-blue/20 border-brand-sky/60 text-white shadow-lg'
                        : theme === 'light'
                          ? 'bg-white border-slate-200/90 text-slate-800 hover:bg-slate-100'
                          : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-heading font-semibold text-sm ${
                        theme === 'light' ? 'text-brand-slate' : 'text-white'
                      }`}>
                        {spot.title}
                      </span>
                      {activeSpot.id === spot.id && (
                        <span className="w-2 h-2 rounded-full bg-brand-blue dark:bg-brand-sky animate-ping" />
                      )}
                    </div>
                    <span className={`text-xs line-clamp-1 ${
                      theme === 'light' ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {spot.category} • {spot.description}
                    </span>
                  </button>
                ))}
              </div>

              <div className={`pt-4 border-t ${
                theme === 'light' ? 'border-slate-200' : 'border-white/10'
              }`}>
                <div className={`p-4 rounded-xl border ${
                  theme === 'light'
                    ? 'bg-blue-50/80 border-blue-200 text-slate-900'
                    : 'bg-gradient-to-br from-brand-blue/20 to-brand-sky/10 border-brand-sky/20 text-white'
                }`}>
                  <h5 className={`font-heading font-bold text-xs mb-1 ${
                    theme === 'light' ? 'text-brand-slate' : 'text-white'
                  }`}>
                    Book an On-Campus Guided Tour
                  </h5>
                  <p className={`text-[11px] mb-3 ${
                    theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    Prefer in-person visits? Tour our campus with our admissions team every Tuesday & Thursday.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      window.location.href = '#contact';
                    }}
                    className="w-full py-2 bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    Schedule Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
