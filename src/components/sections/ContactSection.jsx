import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from '../../context/ThemeContext';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admissions Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 100, spread: 60, origin: { y: 0.7 } });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'Admissions Inquiry', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className={`py-20 sm:py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-white text-slate-900' : 'bg-brand-slate text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue dark:text-brand-sky text-xs font-extrabold uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Campus Direct Contact</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-5xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-brand-slate' : 'text-white'
          }`}>
            Connect with Our Team
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Have questions regarding admissions, campus visits, or scholarship applications? Our team is available Monday through Saturday.
          </p>
        </div>

        {/* Clean 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Contact Cards & Map Preview */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className={`p-5 rounded-3xl border shadow-lg flex items-start gap-4 transition-all hover:scale-[1.01] ${
                theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900/90 border-white/15 text-white'
              }`}>
                <div className="p-3.5 rounded-2xl bg-brand-blue/15 text-brand-blue dark:text-brand-sky shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`font-heading font-extrabold text-lg mb-1 ${
                    theme === 'light' ? 'text-brand-slate' : 'text-white'
                  }`}>Main Campus Location</h4>
                  <p className={`text-sm leading-relaxed ${
                    theme === 'light' ? 'text-slate-600 font-medium' : 'text-slate-300'
                  }`}>
                    45 Innovation Boulevard, Academic District, Suite 100
                  </p>
                </div>
              </div>

              <div className={`p-5 rounded-3xl border shadow-lg flex items-start gap-4 transition-all hover:scale-[1.01] ${
                theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900/90 border-white/15 text-white'
              }`}>
                <div className="p-3.5 rounded-2xl bg-brand-blue/15 text-brand-blue dark:text-brand-sky shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`font-heading font-extrabold text-lg mb-1 ${
                    theme === 'light' ? 'text-brand-slate' : 'text-white'
                  }`}>Admissions Office Hotline</h4>
                  <p className={`text-sm leading-relaxed ${
                    theme === 'light' ? 'text-slate-600 font-medium' : 'text-slate-300'
                  }`}>
                    +1 (800) 456-8890 • admissions@excellence.edu
                  </p>
                </div>
              </div>

              <div className={`p-5 rounded-3xl border shadow-lg flex items-start gap-4 transition-all hover:scale-[1.01] ${
                theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-900/90 border-white/15 text-white'
              }`}>
                <div className="p-3.5 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`font-heading font-extrabold text-lg mb-1 ${
                    theme === 'light' ? 'text-brand-slate' : 'text-white'
                  }`}>Visiting Hours</h4>
                  <p className={`text-sm leading-relaxed ${
                    theme === 'light' ? 'text-slate-600 font-medium' : 'text-slate-300'
                  }`}>
                    Mon - Fri: 8:00 AM – 5:00 PM | Sat: 9:00 AM – 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Map Preview Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/15 h-60 bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
                alt="Interactive Map Preview"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex flex-col items-center justify-center text-white p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-sky mb-2 animate-bounce" />
                <span className="font-heading font-extrabold text-xl mb-1">Interactive Campus Map</span>
                <span className="text-xs font-semibold text-slate-300">Click to open directions in Google Maps</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className={`p-5 sm:p-10 rounded-3xl border shadow-2xl backdrop-blur-xl ${
            theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-900/90 border-white/15 text-white'
          }`}>
            <h3 className={`font-heading text-2xl sm:text-3xl font-extrabold mb-2 ${
              theme === 'light' ? 'text-brand-slate' : 'text-white'
            }`}>
              Send Us a Message
            </h3>
            <p className={`text-sm mb-6 sm:mb-8 ${
              theme === 'light' ? 'text-slate-600 font-medium' : 'text-slate-300'
            }`}>
              Fill out the form below and an admissions counselor will reply within 24 hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue min-h-[48px] ${
                        theme === 'light'
                          ? 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                          : 'bg-slate-950 border-white/15 text-white placeholder-slate-500'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="sarah@example.com"
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                        theme === 'light'
                          ? 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                          : 'bg-slate-950 border-white/15 text-white placeholder-slate-500'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                        theme === 'light'
                          ? 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                          : 'bg-slate-950 border-white/15 text-white placeholder-slate-500'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                      Topic / Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                        theme === 'light'
                          ? 'bg-white border-slate-300 text-slate-900'
                          : 'bg-slate-950 border-white/15 text-white'
                      }`}
                    >
                      <option className="text-slate-900">Admissions Inquiry</option>
                      <option className="text-slate-900">Campus Visit Request</option>
                      <option className="text-slate-900">Merit Scholarship Support</option>
                      <option className="text-slate-900">General Information</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="How can we assist you with your school selection?"
                    className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none ${
                      theme === 'light'
                        ? 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                        : 'bg-slate-950 border-white/15 text-white placeholder-slate-500'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-sky rounded-2xl font-extrabold text-sm text-white shadow-xl shadow-brand-blue/40 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                <h4 className={`font-heading font-extrabold text-2xl ${
                  theme === 'light' ? 'text-brand-slate' : 'text-white'
                }`}>Message Dispatched!</h4>
                <p className={`text-sm max-w-sm mx-auto ${
                  theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  Thank you for reaching out. An admissions counselor will respond to your email address shortly.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
