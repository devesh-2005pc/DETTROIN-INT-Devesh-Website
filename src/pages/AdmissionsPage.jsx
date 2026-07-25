import React from 'react';
import AdmissionsCalculator from '../components/sections/AdmissionsCalculator';
import FAQSection from '../components/sections/FAQSection';
import AdmissionsCTA from '../components/sections/AdmissionsCTA';
import { GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function AdmissionsPage({ onOpenApplyModal }) {
  const { theme } = useTheme();

  return (
    <main className="pt-28">
      <section className={`bg-mesh-gradient py-20 border-b relative overflow-hidden transition-colors duration-300 ${
        theme === 'light' ? 'text-slate-900 border-slate-200' : 'text-white border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider ${
            theme === 'light' ? 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue' : 'bg-white/10 border-white/15 text-brand-sky'
          }`}>
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Admissions Portal</span>
          </div>
          <h1 className={`font-heading text-4xl sm:text-6xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-brand-slate' : 'text-white'
          }`}>
            Admissions & Tuition 2026-27
          </h1>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
            theme === 'light' ? 'text-slate-600 font-medium' : 'text-slate-300'
          }`}>
            Step-by-step application guidelines, tuition estimator, and scholarship application details.
          </p>
        </div>
      </section>

      {/* Admission Steps */}
      <section className={`py-16 border-b transition-colors duration-300 ${
        theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-brand-slate border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`font-heading text-2xl sm:text-3xl font-extrabold text-center mb-12 ${
            theme === 'light' ? 'text-brand-slate' : 'text-white'
          }`}>
            4-Step Admission Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Application', desc: 'Fill out online student profile and submit past academic records.' },
              { step: '02', title: 'Academic Assessment', desc: 'Scholastic diagnostic evaluation in mathematics, logic, and English literacy.' },
              { step: '03', title: 'Interactive Interview', desc: 'One-on-one conversation with our admissions counselor and student.' },
              { step: '04', title: 'Enrollment & Welcome', desc: 'Receive offer letter, complete registration, and receive orientation pack.' }
            ].map((st) => (
              <div key={st.step} className={`p-6 rounded-2xl border shadow-md space-y-2 ${
                theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-900 border-white/15 text-white'
              }`}>
                <span className="font-heading font-black text-3xl text-brand-blue dark:text-brand-sky">{st.step}</span>
                <h3 className={`font-heading font-bold text-lg ${
                  theme === 'light' ? 'text-brand-slate' : 'text-white'
                }`}>{st.title}</h3>
                <p className={`text-xs ${
                  theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                }`}>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdmissionsCalculator onOpenApplyModal={onOpenApplyModal} />
      <FAQSection />
      <AdmissionsCTA onOpenApplyModal={onOpenApplyModal} />
    </main>
  );
}
