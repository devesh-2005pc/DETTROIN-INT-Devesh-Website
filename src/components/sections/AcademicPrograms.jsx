import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Cpu, Sparkles, Download, CheckCircle2, ArrowRight, Layers, Award } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const programs = [
  {
    id: 'early',
    title: 'Early Childhood Foundation',
    grades: 'Ages 3 – 5',
    description: 'Play-based experiential inquiry fostering early literacy, numeracy, social emotional resilience, and sensory exploration.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Reggio Emilia Inspired Learning Spaces',
      'Dual Language Immersion (English & French/Mandarin)',
      'Early STEM & Coding Through Play',
      'Motor & Kinesthetic Development'
    ]
  },
  {
    id: 'primary',
    title: 'Primary School (IB PYP)',
    grades: 'Grades 1 – 5',
    description: 'IB Primary Years Program instilling transdisciplinary inquiry, mathematical mastery, artistic expression, and global awareness.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Conceptual Inquiry Units',
      'Robotics & Maker Space Labs',
      'Performing Arts & String Orchestra',
      'Individualized Growth Diagnostics'
    ]
  },
  {
    id: 'middle',
    title: 'Cambridge Secondary',
    grades: 'Grades 6 – 8',
    description: 'Rigorous academic preparation emphasizing analytical science, advanced mathematics, global perspectives, and leadership.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Cambridge Checkpoint & IGCSE Foundations',
      'Competitive Olympiad Training Tracks',
      'Design Technology & 3D Prototyping',
      'Model United Nations & Debate Society'
    ]
  },
  {
    id: 'senior',
    title: 'IB Diploma & Advanced Placement',
    grades: 'Grades 9 – 12',
    description: 'World-renowned IB Diploma Programme & AP courses preparing scholars for admissions at premier universities globally.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Full IB Diploma & AP Capstone Credentials',
      'Independent Research Theory of Knowledge (TOK)',
      'University Guidance & Ivy League Placement Support',
      'Global Service & Entrepreneurship Internships'
    ]
  }
];

export default function AcademicPrograms({ onOpenApplyModal }) {
  const [selectedProg, setSelectedProg] = useState(programs[3]);
  const { theme } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-brand-slate text-white'
    }`}>
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue dark:text-brand-sky text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>World-Class Pathways</span>
            </div>
            <h2 className={`font-heading text-3xl sm:text-5xl font-extrabold tracking-tight ${
              theme === 'light' ? 'text-brand-slate' : 'text-white'
            }`}>
              Academic Curricula Designed for Mastery
            </h2>
            <p className={`text-base sm:text-lg ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Structured to challenge curiosity, spark innovation, and equip scholars for global leadership.
            </p>
          </div>

          <button
            onClick={() => alert('Downloading 2026 Academic Prospectus PDF...')}
            className={`self-start md:self-auto flex items-center gap-2 px-6 py-3 rounded-2xl border font-semibold text-sm backdrop-blur-md transition-all group cursor-pointer ${
              theme === 'light'
                ? 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 shadow-sm'
                : 'bg-white/10 hover:bg-white/15 border-white/20 text-white'
            }`}
          >
            <Download className="w-4 h-4 text-brand-blue dark:text-brand-sky group-hover:translate-y-0.5 transition-transform" />
            <span>Download Prospectus</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {programs.map((prog) => {
            const isSelected = selectedProg.id === prog.id;
            return (
              <button
                key={prog.id}
                onClick={() => setSelectedProg(prog)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer min-h-[52px] ${
                  isSelected
                    ? theme === 'light'
                      ? 'bg-gradient-to-r from-brand-blue/15 to-brand-sky/20 border-brand-blue shadow-lg shadow-brand-blue/10'
                      : 'bg-gradient-to-r from-brand-blue/30 to-brand-sky/20 border-brand-sky shadow-xl shadow-brand-blue/20'
                    : theme === 'light'
                      ? 'bg-white border-slate-200/90 text-slate-800 hover:bg-slate-100/80 shadow-sm'
                      : 'bg-slate-900/60 border-white/10 hover:bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="text-xs font-extrabold uppercase tracking-wider text-brand-blue dark:text-brand-sky mb-1">
                  {prog.grades}
                </div>
                <div className={`font-heading font-bold text-sm sm:text-base lg:text-lg ${
                  theme === 'light' ? 'text-brand-slate' : 'text-white'
                }`}>
                  {prog.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Program Detailed Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center rounded-3xl border p-5 sm:p-10 backdrop-blur-xl shadow-2xl ${
              theme === 'light'
                ? 'bg-white border-slate-200 text-slate-900'
                : 'bg-slate-900/80 border-white/15 text-white'
            }`}
          >
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/15 text-brand-blue dark:text-brand-sky text-xs font-extrabold">
                <Award className="w-4 h-4" />
                <span>{selectedProg.grades}</span>
              </div>

              <h3 className={`font-heading text-2xl sm:text-4xl font-extrabold ${
                theme === 'light' ? 'text-brand-slate' : 'text-white'
              }`}>
                {selectedProg.title}
              </h3>

              <p className={`text-sm sm:text-base leading-relaxed ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-300'
              }`}>
                {selectedProg.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className={`text-xs font-extrabold uppercase tracking-wider ${
                  theme === 'light' ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  Key Curriculum Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {selectedProg.highlights.map((item, idx) => (
                    <div key={idx} className={`flex items-start gap-2 text-xs sm:text-sm font-semibold ${
                      theme === 'light' ? 'text-slate-700' : 'text-slate-200'
                    }`}>
                      <CheckCircle2 className="w-4 h-4 text-brand-blue dark:text-brand-sky shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 sm:pt-4 flex items-center gap-4">
                <button
                  onClick={onOpenApplyModal}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-sky text-white font-bold text-sm shadow-lg shadow-brand-blue/30 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
                >
                  <span>Apply for {selectedProg.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className={`relative rounded-2xl overflow-hidden border shadow-xl group ${
                theme === 'light' ? 'border-slate-200' : 'border-white/10'
              }`}>
                <img
                  src={selectedProg.image}
                  alt={selectedProg.title}
                  className="w-full h-[240px] xs:h-[300px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-transparent to-transparent opacity-80" />
                
                <div className={`absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl border flex items-center justify-between gap-2 ${
                  theme === 'light'
                    ? 'bg-white/95 border-slate-200 text-slate-900 shadow-md'
                    : 'glass-card-dark border-white/10 text-white'
                }`}>
                  <div className="text-[11px] sm:text-xs">
                    <span className={`font-bold block ${
                      theme === 'light' ? 'text-brand-slate' : 'text-white'
                    }`}>Accredited Curricula</span>
                    <span className={theme === 'light' ? 'text-slate-600' : 'text-slate-300'}>
                      IB & Cambridge Assessment
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-brand-blue/15 text-brand-blue dark:text-brand-sky border border-brand-blue/30 text-[10px] sm:text-xs font-bold rounded-lg shrink-0">
                    STEM Integrated
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
