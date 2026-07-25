import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const faqs = [
  {
    id: 1,
    category: 'Admissions',
    question: 'What is the application deadline for the 2026-2027 Academic Year?',
    answer: 'Early Admissions close on October 30, 2026. Rolling admissions continue based on grade seat availability. We recommend applying early for IB Diploma and Primary PYP tracks.'
  },
  {
    id: 2,
    category: 'Academics',
    question: 'How does Excellence International integrate AI and STEM into humanities?',
    answer: 'Our cross-disciplinary curriculum mandates computational thinking in history, arts, and languages. Students utilize data analytics for history research projects and generative AI in design tech.'
  },
  {
    id: 3,
    category: 'Admissions',
    question: 'What are the language requirements for non-native English speakers?',
    answer: 'We offer comprehensive EAL (English as an Additional Language) support programs for primary and secondary students to achieve full IB proficiency.'
  },
  {
    id: 4,
    category: 'Transport',
    question: 'Is campus transportation equipped with real-time GPS tracking?',
    answer: 'Yes, our smart bus fleet is equipped with GPS live tracking, RFID student check-in, speed governors, and onboard safety chaperones.'
  },
  {
    id: 5,
    category: 'Financial Aid',
    question: 'Are merit-based scholarships available for international students?',
    answer: 'Yes! We award up to 40% Merit Scholarships based on academic performance, STEM Olympiad achievements, or elite athletics credentials.'
  }
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { theme } = useTheme();

  const filteredFaqs = faqs.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-white text-slate-900' : 'bg-brand-slate text-white'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue dark:text-brand-sky text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Knowledge Base</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-5xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-brand-slate' : 'text-white'
          }`}>
            Frequently Asked Questions
          </h2>

          <p className={`text-base ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Find answers regarding admissions, IB curriculum, campus safety, transport, and financial aid.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto pt-2">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions or keywords..."
              className={`w-full pl-12 pr-4 py-3 border rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                theme === 'light'
                  ? 'bg-slate-100/90 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white'
                  : 'bg-slate-900/90 border-white/15 text-white placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = activeId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border overflow-hidden transition-all shadow-sm ${
                    theme === 'light'
                      ? 'bg-slate-50 border-slate-200/90 hover:border-slate-300'
                      : 'bg-slate-900/80 border-white/10'
                  }`}
                >
                  <button
                    onClick={() => setActiveId(isOpen ? null : faq.id)}
                    className={`w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-lg cursor-pointer transition-colors ${
                      theme === 'light' ? 'text-brand-slate hover:text-brand-blue' : 'text-white hover:text-brand-sky'
                    }`}
                  >
                    <span>{faq.question}</span>
                    <div className={`p-2 rounded-xl transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-brand-blue text-white shadow-md'
                        : theme === 'light' ? 'bg-slate-200/80 text-slate-700' : 'bg-white/5 text-brand-sky'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`px-6 pb-6 text-sm leading-relaxed border-t pt-4 ${
                          theme === 'light' ? 'text-slate-700 border-slate-200/80' : 'text-slate-300 border-white/5'
                        }`}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className={`text-center py-12 text-sm ${
              theme === 'light' ? 'text-slate-500' : 'text-slate-400'
            }`}>
              No matching questions found for "{searchTerm}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
