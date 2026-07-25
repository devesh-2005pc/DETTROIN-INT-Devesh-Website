import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, GraduationCap, Users, User } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const testimonials = [
  {
    id: 1,
    quote: "The academic environment here truly nurtures both intellectual growth and personal character. The IB Diploma programme, combined with dedicated mentorship, provides a strong foundation for university and beyond.",
    role: "Alumni",
    label: "Alumni Voice",
    initial: "A",
    gradient: "from-brand-blue to-indigo-600",
    rating: 5
  },
  {
    id: 2,
    quote: "As parents, we value the school's commitment to holistic development. The balanced approach to academics, sports, and creative arts ensures our children grow into well-rounded individuals.",
    role: "Parent",
    label: "Parent Perspective",
    initial: "P",
    gradient: "from-emerald-500 to-teal-600",
    rating: 5
  },
  {
    id: 3,
    quote: "The opportunities available here — from robotics competitions to performing arts — have helped me discover my passions and develop real-world skills. The faculty's guidance has been truly inspiring.",
    role: "Student",
    label: "Student Voice",
    initial: "S",
    gradient: "from-amber-500 to-orange-600",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[currentIndex];

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-brand-slate text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue dark:text-brand-sky text-xs font-bold uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>Community Voices</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-5xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-brand-slate' : 'text-white'
          }`}>
            What Our Community Says
          </h2>

          <p className={`text-base sm:text-lg ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Hear from our alumni, parents, and students about their experience at Excellence International School.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className={`p-5 xs:p-7 sm:p-12 rounded-3xl border shadow-2xl backdrop-blur-xl relative ${
                theme === 'light'
                  ? 'bg-white border-slate-200 text-slate-900'
                  : 'bg-slate-900/90 border-white/15 text-white'
              }`}
            >
              {/* Role label badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  theme === 'light' ? 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue' : 'bg-white/10 border-white/15 text-brand-sky'
                }`}>
                  {active.label}
                </span>
              </div>

              <blockquote className={`font-heading text-base sm:text-2xl font-semibold leading-relaxed mb-6 sm:mb-8 ${
                theme === 'light' ? 'text-slate-800' : 'text-slate-100'
              }`}>
                "{active.quote}"
              </blockquote>

              <div className={`flex items-center gap-3.5 sm:gap-4 pt-5 sm:pt-6 border-t ${
                theme === 'light' ? 'border-slate-200' : 'border-white/10'
              }`}>
                {/* Gradient avatar placeholder */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${active.gradient} flex items-center justify-center border-2 shadow-md shrink-0 ${
                  theme === 'light' ? 'border-white' : 'border-white/30'
                }`}>
                  <span className="font-heading font-black text-xl sm:text-2xl text-white">{active.initial}</span>
                </div>
                <div>
                  <div className={`font-heading font-bold text-base sm:text-lg ${
                    theme === 'light' ? 'text-brand-slate' : 'text-white'
                  }`}>
                    {active.role}
                  </div>
                  <div className="text-[11px] sm:text-xs text-brand-blue dark:text-brand-sky font-bold">
                    Name to be updated — Excellence International School
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 sm:mt-8">
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === i
                      ? 'w-8 bg-brand-blue dark:bg-brand-sky'
                      : theme === 'light' ? 'w-2.5 bg-slate-300' : 'w-2.5 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={handlePrev}
                className={`p-3 rounded-full backdrop-blur-md transition-all cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  theme === 'light'
                    ? 'bg-slate-200/80 hover:bg-slate-300 text-slate-800'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className={`p-3 rounded-full backdrop-blur-md transition-all cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  theme === 'light'
                    ? 'bg-slate-200/80 hover:bg-slate-300 text-slate-800'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
