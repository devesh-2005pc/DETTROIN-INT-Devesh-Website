import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, GraduationCap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function AdmissionsCTA({ onOpenApplyModal }) {
  const { theme } = useTheme();

  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50 text-slate-900 border-t border-slate-200' : 'bg-brand-slate text-white border-t border-white/10'
    }`}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`p-6 xs:p-8 sm:p-14 rounded-3xl border shadow-2xl backdrop-blur-2xl text-center space-y-5 sm:space-y-6 ${
          theme === 'light'
            ? 'bg-gradient-to-r from-blue-50/80 via-white to-sky-50/80 border-slate-200/90 text-slate-900'
            : 'bg-gradient-to-r from-brand-blue/40 via-brand-slate to-brand-sky/20 border-white/20 text-white'
        }`}>
          
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-wider border max-w-full truncate ${
            theme === 'light'
              ? 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue'
              : 'bg-white/10 border-white/15 text-brand-sky'
          }`}>
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Admissions Session 2026-2027 Open</span>
          </div>

          <h2 className={`font-heading text-2xl xs:text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight ${
            theme === 'light' ? 'text-brand-slate' : 'text-white'
          }`}>
            Begin Your Journey Toward Global Academic Distinction
          </h2>

          <p className={`text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed ${
            theme === 'light' ? 'text-slate-600 font-medium' : 'text-slate-300'
          }`}>
            Join a vibrant community of scholars, innovators, and leaders. Experience world-class IB & Cambridge education today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 sm:pt-4">
            <button
              onClick={onOpenApplyModal}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-sky text-white font-extrabold text-sm sm:text-base shadow-xl shadow-brand-blue/40 hover:scale-105 transition-all flex items-center justify-center gap-3 cursor-pointer min-h-[48px]"
            >
              <span>Apply for Admissions Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className={`pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-bold ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Rolling Admissions Available
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-brand-blue dark:text-brand-sky" /> Merit Scholarships Open
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
