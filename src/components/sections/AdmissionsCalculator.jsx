import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const gradeFees = {
  early: { name: 'Early Childhood (Ages 3-5)', base: 14500, registration: 800 },
  primary: { name: 'Primary School PYP (Grades 1-5)', base: 18200, registration: 1000 },
  middle: { name: 'Middle School (Grades 6-8)', base: 21500, registration: 1000 },
  senior: { name: 'IB Diploma & AP (Grades 9-12)', base: 26800, registration: 1200 }
};

export default function AdmissionsCalculator({ onOpenApplyModal }) {
  const [selectedGrade, setSelectedGrade] = useState('senior');
  const [includeTransport, setIncludeTransport] = useState(true);
  const [includeLunch, setIncludeLunch] = useState(true);
  const [includeRobotics, setIncludeRobotics] = useState(true);
  const { theme } = useTheme();

  const currentGrade = gradeFees[selectedGrade];
  const transportFee = includeTransport ? 2400 : 0;
  const lunchFee = includeLunch ? 1800 : 0;
  const roboticsFee = includeRobotics ? 950 : 0;

  const totalTuition = currentGrade.base + currentGrade.registration + transportFee + lunchFee + roboticsFee;

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-brand-slate text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue dark:text-brand-sky text-xs font-extrabold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparency & Value</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-5xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-brand-slate' : 'text-white'
          }`}>
            Interactive Fee Estimator
          </h2>

          <p className={`text-base sm:text-lg ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            We believe in complete financial transparency. Estimate tuition, registration, and optional auxiliary services instantly.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className={`max-w-4xl mx-auto rounded-3xl border shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 ${
          theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-900 border-white/15'
        }`}>
          
          {/* Controls Form */}
          <div className="lg:col-span-7 p-5 sm:p-10 space-y-5 sm:space-y-6">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                1. Select Academic Grade Level
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {Object.keys(gradeFees).map((key) => {
                  const item = gradeFees[key];
                  const isSelected = selectedGrade === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedGrade(key)}
                      className={`w-full p-4 rounded-2xl text-left border text-xs sm:text-sm font-bold transition-all flex items-center justify-between cursor-pointer min-h-[48px] ${
                        isSelected
                          ? 'bg-brand-blue text-white border-brand-blue shadow-md'
                          : theme === 'light'
                            ? 'bg-slate-100/80 border-slate-300/80 text-slate-800 hover:bg-slate-200'
                            : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="font-heading font-extrabold text-base">${item.base.toLocaleString()} / yr</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                2. Optional Auxiliary Services
              </label>
              <div className="space-y-3">
                {[
                  { state: includeTransport, setter: setIncludeTransport, title: 'Smart Transport & Bus Service', price: '$2,400 / yr' },
                  { state: includeLunch, setter: setIncludeLunch, title: 'Organic Chef Dining & Lunch Plan', price: '$1,800 / yr' },
                  { state: includeRobotics, setter: setIncludeRobotics, title: 'Advanced AI & Robotics Lab Access', price: '$950 / yr' },
                ].map((opt, i) => (
                  <label 
                    key={i} 
                    className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer font-bold transition-all ${
                      theme === 'light' ? 'bg-slate-100/70 border-slate-300/70 text-slate-900' : 'bg-white/5 border-white/10 text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={opt.state}
                        onChange={(e) => opt.setter(e.target.checked)}
                        className="w-4 h-4 text-brand-blue rounded border-slate-400 focus:ring-brand-blue"
                      />
                      <span className="text-sm">{opt.title}</span>
                    </div>
                    <span className="text-xs font-extrabold text-brand-blue dark:text-brand-sky">{opt.price}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Breakdown Summary Sidebar */}
          <div className="lg:col-span-5 bg-brand-slate text-white p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-brand-sky mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Estimated Annual Total</span>
              </div>

              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-2">
                ${totalTuition.toLocaleString()}
                <span className="text-xs font-semibold text-slate-300 block mt-1">USD / Academic Year</span>
              </div>

              <div className="space-y-2.5 py-4 my-4 border-y border-white/15 text-xs text-slate-200 font-medium">
                <div className="flex justify-between">
                  <span>Base Academic Tuition:</span>
                  <span className="font-bold text-white">${currentGrade.base.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Registration & Technology Fee:</span>
                  <span className="font-bold text-white">${currentGrade.registration.toLocaleString()}</span>
                </div>
                {includeTransport && (
                  <div className="flex justify-between">
                    <span>Door-to-Door Transport:</span>
                    <span className="font-bold text-white">$2,400</span>
                  </div>
                )}
                {includeLunch && (
                  <div className="flex justify-between">
                    <span>Dining Plan:</span>
                    <span className="font-bold text-white">$1,800</span>
                  </div>
                )}
                {includeRobotics && (
                  <div className="flex justify-between">
                    <span>AI & Robotics Pass:</span>
                    <span className="font-bold text-white">$950</span>
                  </div>
                )}
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 text-[11px] text-slate-200 font-medium">
                💡 Need Merit Scholarship Guidance? Up to 40% Merit Scholarships available for STEM & Athletics.
              </div>
            </div>

            <button
              onClick={onOpenApplyModal}
              className="mt-6 w-full py-4 bg-gradient-to-r from-brand-blue to-brand-sky rounded-2xl text-white font-extrabold text-sm shadow-xl shadow-brand-blue/40 flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
            >
              <span>Proceed to Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
