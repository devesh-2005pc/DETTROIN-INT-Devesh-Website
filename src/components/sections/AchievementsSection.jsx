import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, Dumbbell, Palette, Sparkles, Atom } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const achievementCategories = [
  {
    category: 'Board Examination Toppers',
    description: 'Celebrating students who have achieved outstanding results in IB Diploma, Cambridge IGCSE, and board examinations.',
    icon: Trophy,
    color: 'from-amber-400 to-amber-600',
    badge: 'Academic Excellence',
    highlights: ['IB Diploma Distinction', 'Cambridge IGCSE Top Scores', 'Subject-wise Toppers']
  },
  {
    category: 'Olympiad Winners',
    description: 'Honoring scholars who represent our school at national and international academic olympiads in Mathematics, Science, and Computing.',
    icon: Medal,
    color: 'from-blue-500 to-indigo-600',
    badge: 'Competitive Excellence',
    highlights: ['Mathematics Olympiad', 'Science Olympiad', 'Informatics & Computing']
  },
  {
    category: 'Sports Champions',
    description: 'Recognizing athletes who have achieved distinction in inter-school, state, national, and international sports competitions.',
    icon: Dumbbell,
    color: 'from-emerald-400 to-teal-600',
    badge: 'Athletic Achievement',
    highlights: ['Swimming & Aquatics', 'Track & Field', 'Team Sports']
  },
  {
    category: 'Cultural & STEM Excellence',
    description: 'Showcasing achievements in performing arts, visual arts, robotics, science fairs, and innovation challenges.',
    icon: Palette,
    color: 'from-purple-400 to-violet-600',
    badge: 'Creative & Innovation',
    highlights: ['Performing Arts Awards', 'Robotics Competitions', 'Science Fair Honors']
  }
];

export default function AchievementsSection() {
  const { theme } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-white text-slate-900' : 'bg-brand-slate text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-600 dark:text-amber-400 text-xs font-extrabold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Wall of Excellence</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-5xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-brand-slate' : 'text-white'
          }`}>
            Celebrating Student Achievement
          </h2>

          <p className={`text-base sm:text-lg ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Our scholars consistently push the boundaries of intellectual, athletic, and creative achievement. Official achievements will be showcased here.
          </p>
        </div>

        {/* Achievement Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievementCategories.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`p-6 rounded-3xl border hover:border-amber-400/50 transition-all duration-300 group flex flex-col justify-between ${
                  theme === 'light'
                    ? 'bg-slate-50 border-slate-200/90 text-slate-900 shadow-md hover:shadow-xl'
                    : 'bg-slate-900/80 border-white/15 text-white shadow-2xl'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${
                      theme === 'light'
                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                        : 'bg-amber-500/10 text-amber-400 border-amber-400/20'
                    }`}>
                      {item.badge}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className={`font-heading font-bold text-xl mb-3 transition-colors ${
                    theme === 'light' ? 'text-brand-slate group-hover:text-amber-600' : 'text-white group-hover:text-amber-300'
                  }`}>
                    {item.category}
                  </h3>

                  <p className={`text-xs leading-relaxed mb-4 ${
                    theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {item.description}
                  </p>

                  {/* Highlight tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.highlights.map((tag, j) => (
                      <span key={j} className={`px-2 py-1 rounded-lg text-[10px] font-semibold border ${
                        theme === 'light' ? 'bg-white border-slate-200 text-slate-600' : 'bg-white/5 border-white/10 text-slate-400'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`pt-3 border-t text-[11px] font-semibold flex items-center gap-1.5 ${
                  theme === 'light' ? 'border-slate-200 text-slate-500' : 'border-white/10 text-slate-400'
                }`}>
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>Official Achievers — Coming Soon</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom placeholder note */}
        <div className={`mt-12 p-5 rounded-2xl border border-dashed text-center max-w-2xl mx-auto ${
          theme === 'light' ? 'bg-amber-50/50 border-amber-200 text-slate-600' : 'bg-amber-500/5 border-amber-400/20 text-slate-400'
        }`}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Achievements Showcase</span>
          </div>
          <p className="text-xs leading-relaxed">
            Student names, photographs, and detailed achievements will be updated with official records from Excellence International School. Each category above will feature individual achiever cards once information is available.
          </p>
        </div>

      </div>
    </section>
  );
}
