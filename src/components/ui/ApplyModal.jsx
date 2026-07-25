import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, User, Mail, Phone, GraduationCap, Calendar, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../../context/ThemeContext';

export default function ApplyModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: '',
    grade: 'IB Diploma (Grade 11)',
    parentName: '',
    email: '',
    phone: '',
    academicYear: '2026-2027',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl border shadow-2xl z-10 p-5 xs:p-6 sm:p-8 ${
            theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-brand-slate border-white/20 text-white'
          }`}
        >
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2.5 rounded-xl transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center ${
              theme === 'light' ? 'bg-slate-100 text-slate-500 hover:text-slate-900' : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-brand-blue/15 border border-brand-blue/30 text-brand-blue dark:text-brand-sky">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`font-heading text-2xl font-extrabold ${
                    theme === 'light' ? 'text-brand-slate' : 'text-white'
                  }`}>
                    Apply for Admissions 2026-27
                  </h3>
                  <p className={`text-xs ${
                    theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    Step {step} of 2 — Take the first step toward academic excellence
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 ? (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className={`block text-xs font-extrabold uppercase tracking-wider mb-1.5 ${
                        theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                      }`}>
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Alexander Wright"
                        className={`w-full px-4 py-3 border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                          theme === 'light'
                            ? 'bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white'
                            : 'bg-slate-900/80 border-white/15 text-white placeholder-slate-500'
                        }`}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-extrabold uppercase tracking-wider mb-1.5 ${
                          theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                        }`}>
                          Target Grade Level *
                        </label>
                        <select
                          name="grade"
                          value={formData.grade}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                            theme === 'light'
                              ? 'bg-slate-100 border-slate-300 text-slate-900'
                              : 'bg-slate-900/80 border-white/15 text-white'
                          }`}
                        >
                          <option className="text-slate-900" value="Early Childhood (Ages 3-5)">Early Childhood (Ages 3-5)</option>
                          <option className="text-slate-900" value="Primary School (Grades 1-5)">Primary School (Grades 1-5)</option>
                          <option className="text-slate-900" value="Middle School (Grades 6-8)">Middle School (Grades 6-8)</option>
                          <option className="text-slate-900" value="Cambridge IGCSE (Grades 9-10)">Cambridge IGCSE (Grades 9-10)</option>
                          <option className="text-slate-900" value="IB Diploma (Grades 11-12)">IB Diploma (Grades 11-12)</option>
                        </select>
                      </div>

                      <div>
                        <label className={`block text-xs font-extrabold uppercase tracking-wider mb-1.5 ${
                          theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                        }`}>
                          Academic Session *
                        </label>
                        <select
                          name="academicYear"
                          value={formData.academicYear}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                            theme === 'light'
                              ? 'bg-slate-100 border-slate-300 text-slate-900'
                              : 'bg-slate-900/80 border-white/15 text-white'
                          }`}
                        >
                          <option className="text-slate-900" value="2026-2027">2026-2027 Academic Year</option>
                          <option className="text-slate-900" value="Mid-Year 2026">Mid-Year Transfer 2026</option>
                          <option className="text-slate-900" value="2027-2028">2027-2028 Academic Year</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (formData.studentName.trim()) setStep(2);
                        else alert('Please enter student name');
                      }}
                      className="w-full mt-4 py-3.5 bg-gradient-to-r from-brand-blue to-brand-sky rounded-xl text-white font-bold text-sm shadow-lg shadow-brand-blue/30 flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer"
                    >
                      <span>Continue to Contact Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className={`block text-xs font-extrabold uppercase tracking-wider mb-1.5 ${
                        theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                      }`}>
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Dr. Eleanor Wright"
                        className={`w-full px-4 py-3 border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                          theme === 'light'
                            ? 'bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white'
                            : 'bg-slate-900/80 border-white/15 text-white placeholder-slate-500'
                        }`}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-extrabold uppercase tracking-wider mb-1.5 ${
                          theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                        }`}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="parent@example.com"
                          className={`w-full px-4 py-3 border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                            theme === 'light'
                              ? 'bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white'
                              : 'bg-slate-900/80 border-white/15 text-white placeholder-slate-500'
                          }`}
                        />
                      </div>

                      <div>
                        <label className={`block text-xs font-extrabold uppercase tracking-wider mb-1.5 ${
                          theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                        }`}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+1 (555) 019-2834"
                          className={`w-full px-4 py-3 border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                            theme === 'light'
                              ? 'bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white'
                              : 'bg-slate-900/80 border-white/15 text-white placeholder-slate-500'
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-xs font-extrabold uppercase tracking-wider mb-1.5 ${
                        theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                      }`}>
                        Special Academic Interests or Notes
                      </label>
                      <textarea
                        name="notes"
                        rows={2}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="e.g. Interested in Advanced Robotics and Olympiad Track..."
                        className={`w-full px-4 py-2.5 border rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none ${
                          theme === 'light'
                            ? 'bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white'
                            : 'bg-slate-900/80 border-white/15 text-white placeholder-slate-500'
                        }`}
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className={`w-1/3 py-3 border rounded-xl font-bold text-sm transition-colors cursor-pointer ${
                          theme === 'light' ? 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200' : 'bg-white/10 border-white/15 text-white hover:bg-white/20'
                        }`}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 py-3 bg-gradient-to-r from-brand-blue to-brand-sky rounded-xl text-white font-bold text-sm shadow-lg shadow-brand-blue/30 flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-cyan-200" />
                        <span>Submit Application</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-500 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className={`font-heading text-2xl font-extrabold ${
                theme === 'light' ? 'text-brand-slate' : 'text-white'
              }`}>
                Application Received!
              </h3>
              <p className={`text-sm max-w-md mx-auto leading-relaxed ${
                theme === 'light' ? 'text-slate-600 font-medium' : 'text-slate-300'
              }`}>
                Thank you for applying to Excellence International School. Application Reference Code: <span className="font-mono text-brand-blue dark:text-brand-sky font-bold">EX2026-9821</span>. Our Admissions Officer will contact you within 24 hours.
              </p>
              <button
                onClick={resetForm}
                className="mt-4 px-8 py-3 bg-brand-blue hover:bg-blue-600 rounded-xl font-bold text-sm text-white transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
