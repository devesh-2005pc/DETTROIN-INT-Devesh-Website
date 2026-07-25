import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Award, 
  CheckCircle2, 
  Globe2, 
  Users, 
  ChevronDown,
  ShieldCheck
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function HeroSection({ onOpenVirtualTour, onOpenApplyModal }) {
  const { theme } = useTheme();

  return (
    <section className={`relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-mesh-gradient transition-colors duration-300 ${
      theme === 'light' ? 'text-slate-900' : 'text-white'
    }`}>
      {/* Background ambient lighting blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-brand-sky/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md text-xs font-bold shadow-lg ${
                theme === 'light'
                  ? 'bg-brand-blue/10 border-brand-blue/25 text-brand-blue'
                  : 'bg-white/10 border-white/15 text-brand-sky'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-blue dark:text-brand-sky animate-spin-slow" />
              <span>Admissions Open for Academic Session 2026-2027</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className={`font-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] ${
                theme === 'light' ? 'text-brand-slate' : 'text-white'
              }`}>
                Where Academic <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-brand-blue via-brand-sky to-cyan-500 dark:from-brand-sky dark:via-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                  Distinction Meets
                </span> <br />
                Global Innovation
              </h1>
              <p className={`text-base sm:text-lg xl:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-300'
              }`}>
                Excellence International School nurtures world-ready leaders through IB & Cambridge curricula, state-of-the-art AI laboratories, and a global mindset across 45+ nationalities.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onOpenApplyModal}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-blue via-blue-600 to-brand-sky text-white font-extrabold text-base shadow-xl shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>Apply for Admissions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenVirtualTour}
                className={`w-full sm:w-auto px-7 py-4 rounded-2xl border font-bold text-base backdrop-blur-md transition-all flex items-center justify-center gap-3 group cursor-pointer ${
                  theme === 'light'
                    ? 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-md'
                    : 'bg-white/10 hover:bg-white/15 border-white/20 text-white'
                }`}
              >
                <div className="w-7 h-7 rounded-full bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-blue dark:text-brand-sky group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Take 360° Virtual Tour</span>
              </button>
            </motion.div>

            {/* Micro Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`pt-6 border-t grid grid-cols-3 gap-4 text-center lg:text-left ${
                theme === 'light' ? 'border-slate-200' : 'border-white/10'
              }`}
            >
              <div className="space-y-1">
                <div className={`text-xl sm:text-2xl font-bold font-heading ${
                  theme === 'light' ? 'text-brand-slate' : 'text-white'
                }`}>99.4%</div>
                <div className={`text-xs font-semibold ${
                  theme === 'light' ? 'text-slate-500' : 'text-slate-400'
                }`}>IB Pass Rate</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold font-heading text-brand-blue dark:text-brand-sky">1 : 8</div>
                <div className={`text-xs font-semibold ${
                  theme === 'light' ? 'text-slate-500' : 'text-slate-400'
                }`}>Teacher Ratio</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-bold font-heading text-emerald-600 dark:text-emerald-400">100%</div>
                <div className={`text-xs font-semibold ${
                  theme === 'light' ? 'text-slate-500' : 'text-slate-400'
                }`}>Uni Acceptance</div>
              </div>
            </motion.div>

          </div>

          {/* Right Visual Card Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className={`relative rounded-3xl overflow-hidden border shadow-2xl group ${
              theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-900 border-white/15'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                alt="Excellence International Students in STEM Innovation Lab"
                className="w-full h-[460px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-brand-slate/20 to-transparent" />

              {/* Floating Glass Badge 1 - Oxford Placement */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute top-6 right-6 p-3.5 rounded-2xl border shadow-xl flex items-center gap-3 ${
                  theme === 'light'
                    ? 'bg-white/95 border-slate-200 text-slate-900'
                    : 'bg-slate-900/90 border-white/20 text-white'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-500 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs font-semibold ${
                    theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                  }`}>Top Destination</div>
                  <div className={`text-sm font-bold font-heading ${
                    theme === 'light' ? 'text-brand-slate' : 'text-white'
                  }`}>Oxford & MIT Placements</div>
                </div>
              </motion.div>

              {/* Floating Glass Badge 2 - Global Community */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className={`absolute bottom-6 left-6 right-6 p-4 rounded-2xl border shadow-2xl ${
                  theme === 'light'
                    ? 'bg-white/95 border-slate-200 text-slate-900'
                    : 'bg-slate-900/90 border-white/20 text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 text-brand-blue dark:text-brand-sky flex items-center justify-center shrink-0">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`text-sm font-bold font-heading ${
                        theme === 'light' ? 'text-brand-slate' : 'text-white'
                      }`}>45+ Nationalities</div>
                      <div className={`text-xs font-medium ${
                        theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                      }`}>Vibrant Intercultural Community</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-full">
                    Active IB World
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-xs font-semibold ${
        theme === 'light' ? 'text-slate-500' : 'text-slate-400'
      }`}>
        <span>Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 text-brand-blue dark:text-brand-sky" />
        </motion.div>
      </div>
    </section>
  );
}
