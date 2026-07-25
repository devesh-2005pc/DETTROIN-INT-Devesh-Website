import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, CheckCircle2, X, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const upcomingEvents = [
  {
    id: 1,
    day: '15',
    month: 'AUG',
    title: 'Annual IB Science & AI Olympiad 2026',
    time: '09:00 AM - 04:00 PM',
    location: 'Innovation Hub & Grand Auditorium',
    category: 'Academic Competition',
    description: 'Student science showcase featuring 80+ AI robotics, biotechnology, and environmental engineering exhibits.'
  },
  {
    id: 2,
    day: '02',
    month: 'SEP',
    title: 'Global Admissions Open House & Campus Tour',
    time: '10:00 AM - 01:00 PM',
    location: 'Main Campus & Live Stream',
    category: 'Admissions Event',
    description: 'Meet faculty department heads, tour world-class facilities, and learn about 2026-27 scholarship opportunities.'
  },
  {
    id: 3,
    day: '24',
    month: 'SEP',
    title: 'Excellence Model UN International Conference',
    time: '08:30 AM - 05:30 PM',
    location: 'Performing Arts Theater',
    category: 'Leadership & Debate',
    description: '3-day international youth diplomacy summit bringing together delegates from 25 international schools.'
  }
];

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
  const { theme } = useTheme();

  // Countdown calculations
  const [timeLeft, setTimeLeft] = useState({ days: 21, hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59, minutes: prev.minutes > 0 ? prev.minutes - 1 : 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    setRsvpSuccess(true);
    setTimeout(() => {
      setRsvpSuccess(false);
      setSelectedEvent(null);
    }, 3000);
  };

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-brand-slate text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue dark:text-brand-sky text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Campus Calendar</span>
            </div>

            <h2 className={`font-heading text-3xl sm:text-5xl font-extrabold tracking-tight ${
              theme === 'light' ? 'text-brand-slate' : 'text-white'
            }`}>
              Upcoming Events & Open Days
            </h2>

            <p className={`text-base sm:text-lg ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Join our academic symposia, robotics showcases, sports tournaments, and admissions sessions.
            </p>
          </div>

          {/* Countdown Card */}
          <div className={`lg:col-span-5 p-6 rounded-3xl border backdrop-blur-xl shadow-2xl ${
            theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-900/90 border-white/15 text-white'
          }`}>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue dark:text-brand-sky mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Next Major Event Countdown</span>
            </div>
            <h4 className={`font-heading font-bold text-lg mb-4 ${
              theme === 'light' ? 'text-brand-slate' : 'text-white'
            }`}>
              Annual IB Science & AI Olympiad
            </h4>

            <div className="grid grid-cols-2 xs:grid-cols-4 gap-2.5 sm:gap-3 text-center">
              {[
                { label: 'Days', val: timeLeft.days },
                { label: 'Hours', val: timeLeft.hours },
                { label: 'Mins', val: timeLeft.minutes },
                { label: 'Secs', val: timeLeft.seconds },
              ].map((item, idx) => (
                <div key={idx} className={`p-2.5 sm:p-3 rounded-2xl border ${
                  theme === 'light' ? 'bg-slate-100 border-slate-200' : 'bg-white/5 border-white/10'
                }`}>
                  <div className={`font-heading font-extrabold text-xl sm:text-2xl ${
                    theme === 'light' ? 'text-brand-slate' : 'text-white'
                  }`}>
                    {String(item.val).padStart(2, '0')}
                  </div>
                  <div className={`text-[10px] uppercase font-bold ${
                    theme === 'light' ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Events Timeline */}
        <div className="space-y-4 sm:space-y-6">
          {upcomingEvents.map((evt) => (
            <motion.div
              key={evt.id}
              whileHover={{ scale: 1.01 }}
              className={`p-5 sm:p-8 rounded-3xl border shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 ${
                theme === 'light'
                  ? 'bg-white border-slate-200/90 text-slate-900 hover:border-brand-blue/40 shadow-md'
                  : 'bg-slate-900/80 border-white/10 hover:border-brand-sky/40 text-white shadow-xl'
              }`}
            >
              <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4 sm:gap-6 w-full sm:w-auto">
                {/* Date Badge */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-sky p-0.5 shrink-0 shadow-lg shadow-brand-blue/30">
                  <div className="w-full h-full bg-brand-slate rounded-[14px] flex flex-col items-center justify-center text-white">
                    <span className="font-heading font-extrabold text-xl sm:text-2xl text-white">{evt.day}</span>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase text-brand-sky">{evt.month}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-blue/15 text-brand-blue dark:text-brand-sky border border-brand-blue/30">
                    {evt.category}
                  </span>
                  <h3 className={`font-heading font-bold text-xl ${
                    theme === 'light' ? 'text-brand-slate' : 'text-white'
                  }`}>
                    {evt.title}
                  </h3>
                  <p className={`text-xs line-clamp-1 max-w-xl ${
                    theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {evt.description}
                  </p>
                  <div className={`flex flex-wrap items-center gap-4 text-xs font-medium pt-1 ${
                    theme === 'light' ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-blue dark:text-brand-sky" /> {evt.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-blue dark:text-brand-sky" /> {evt.location}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedEvent(evt)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Reserve Seat / RSVP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* RSVP Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`relative w-full max-w-md p-6 rounded-3xl border shadow-2xl ${
                theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-brand-slate border-white/20 text-white'
              }`}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className={`absolute top-4 right-4 p-2 rounded-xl transition-colors ${
                  theme === 'light' ? 'bg-slate-100 text-slate-500 hover:text-slate-900' : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              {!rsvpSuccess ? (
                <div>
                  <h3 className={`font-heading text-xl font-bold mb-1 ${
                    theme === 'light' ? 'text-brand-slate' : 'text-white'
                  }`}>
                    RSVP for {selectedEvent.title}
                  </h3>
                  <p className={`text-xs mb-4 ${
                    theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {selectedEvent.day} {selectedEvent.month} • {selectedEvent.location}
                  </p>

                  <form onSubmit={handleRsvpSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      className={`w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                        theme === 'light' ? 'bg-slate-100 border border-slate-300 text-slate-900' : 'bg-slate-900 border border-white/15 text-white'
                      }`}
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className={`w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                        theme === 'light' ? 'bg-slate-100 border border-slate-300 text-slate-900' : 'bg-slate-900 border border-white/15 text-white'
                      }`}
                    />
                    <select
                      className={`w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                        theme === 'light' ? 'bg-slate-100 border border-slate-300 text-slate-900' : 'bg-slate-900 border border-white/15 text-white'
                      }`}
                    >
                      <option className="text-slate-900">1 Attendee Pass</option>
                      <option className="text-slate-900">2 Attendee Passes (Parent + Student)</option>
                      <option className="text-slate-900">3+ Group Pass</option>
                    </select>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 bg-gradient-to-r from-brand-blue to-brand-sky rounded-xl font-bold text-sm text-white shadow-lg cursor-pointer"
                    >
                      Confirm Event RSVP
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className={`font-heading font-bold text-lg ${
                    theme === 'light' ? 'text-brand-slate' : 'text-white'
                  }`}>Pass Confirmed!</h4>
                  <p className={`text-xs ${
                    theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    We've emailed your QR Event Ticket for {selectedEvent.title}.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
