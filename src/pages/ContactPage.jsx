import React from 'react';
import ContactSection from '../components/sections/ContactSection';
import FAQSection from '../components/sections/FAQSection';
import { Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ContactPage() {
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
            <Mail className="w-3.5 h-3.5" />
            <span>Campus Direct Contact</span>
          </div>
          <h1 className={`font-heading text-4xl sm:text-6xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-brand-slate' : 'text-white'
          }`}>
            Contact & Location Directory
          </h1>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
            theme === 'light' ? 'text-slate-600 font-medium' : 'text-slate-300'
          }`}>
            Get in touch with our admissions department, book a campus visit, or inquire about sports & transport.
          </p>
        </div>
      </section>

      <ContactSection />
      <FAQSection />
    </main>
  );
}
