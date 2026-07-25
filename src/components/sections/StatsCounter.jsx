import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Trophy, Award, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const stats = [
  {
    icon: Users,
    value: '—',
    label: 'Global Student Body',
    description: 'Students from diverse nationalities in an inclusive learning environment',
    color: 'from-brand-blue to-blue-600'
  },
  {
    icon: GraduationCap,
    value: '—',
    label: 'University Placement Rate',
    description: 'Graduates placed at top universities worldwide',
    color: 'from-brand-sky to-cyan-400'
  },
  {
    icon: Trophy,
    value: '—',
    label: 'Academic & STEM Awards',
    description: 'Recognitions across academic olympiads, robotics, and competitions',
    color: 'from-amber-400 to-amber-600'
  },
  {
    icon: Award,
    value: '—',
    label: 'Board Examination Results',
    description: 'IB Diploma & Cambridge IGCSE distinction performance',
    color: 'from-emerald-400 to-teal-600'
  }
];

export default function StatsCounter() {
  const { theme } = useTheme();

  return (
    <section className={`relative py-16 border-y overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-100/90 border-slate-200/80' : 'bg-brand-slate border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative p-6 rounded-3xl border transition-all duration-300 group ${
                  theme === 'light'
                    ? 'bg-white border-slate-200/90 text-slate-900 shadow-md hover:shadow-xl hover:border-brand-blue/30'
                    : 'bg-slate-900/80 border-white/10 text-white shadow-xl hover:border-brand-sky/40'
                }`}
              >
                {/* Glow pill */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} p-0.5 mb-4 shadow-lg`}>
                  <div className="w-full h-full bg-brand-slate rounded-[14px] flex items-center justify-center text-white">
                    <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <div className={`font-heading font-extrabold text-3xl sm:text-4xl tracking-tight mb-1 ${
                  theme === 'light' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {stat.value}
                </div>

                <h3 className="font-heading font-extrabold text-base text-brand-blue dark:text-brand-sky mb-2">
                  {stat.label}
                </h3>

                <p className={`text-xs leading-relaxed ${
                  theme === 'light' ? 'text-slate-600 font-medium' : 'text-slate-400'
                }`}>
                  {stat.description}
                </p>

                {/* Official data note */}
                <div className={`mt-3 pt-2 border-t text-[10px] font-semibold flex items-center gap-1 ${
                  theme === 'light' ? 'border-slate-100 text-slate-400' : 'border-white/5 text-slate-500'
                }`}>
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Official data coming soon</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
