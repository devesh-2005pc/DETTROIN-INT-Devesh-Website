import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, X, Sparkles, Cpu, BookOpen, Music, FlaskConical } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const faculty = [
  {
    id: 1,
    role: 'STEM & Innovation Director',
    department: 'Science, Technology & Robotics',
    initial: 'S',
    gradient: 'from-brand-blue to-indigo-600',
    icon: Cpu,
    qualifications: 'Advanced degree in STEM Education • Robotics & AI Specialist',
    description: 'Leads our state-of-the-art STEM curriculum, robotics lab, and innovation programs across all grade levels.',
    focus: ['Robotics & AI Lab', 'STEM Competitions', 'Innovation Curriculum']
  },
  {
    id: 2,
    role: 'IB & Cambridge Coordinator',
    department: 'International Curricula',
    initial: 'I',
    gradient: 'from-sky-400 to-blue-600',
    icon: BookOpen,
    qualifications: 'IB Master Examiner • Cambridge Assessment Specialist',
    description: 'Oversees the IB Diploma Programme and Cambridge IGCSE pathways, ensuring global academic standards.',
    focus: ['IB Diploma Programme', 'Cambridge IGCSE', 'Academic Standards']
  },
  {
    id: 3,
    role: 'Performing Arts Director',
    department: 'Music, Drama & Visual Arts',
    initial: 'P',
    gradient: 'from-amber-400 to-orange-600',
    icon: Music,
    qualifications: 'Advanced degree in Music/Performing Arts • Orchestral & Theatre Direction',
    description: 'Directs our orchestral music, theatrical productions, and visual arts programs across all divisions.',
    focus: ['Orchestra & Choir', 'Theatre Productions', 'Visual Arts']
  },
  {
    id: 4,
    role: 'Sciences Department Head',
    department: 'Biological & Environmental Sciences',
    initial: 'D',
    gradient: 'from-emerald-400 to-teal-600',
    icon: FlaskConical,
    qualifications: 'Doctoral-level research background • Laboratory Sciences Specialist',
    description: 'Leads our biological, environmental, and chemical sciences departments with hands-on laboratory approaches.',
    focus: ['Research Labs', 'Environmental Science', 'Advanced Biology']
  }
];

export default function FacultySection() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const { theme } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-brand-slate text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue dark:text-brand-sky text-xs font-extrabold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Our Educators</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-5xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-brand-slate' : 'text-white'
          }`}>
            Academic Departments & Leadership
          </h2>

          <p className={`text-base sm:text-lg ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Our faculty comprises distinguished educators, IB examiners, and industry specialists dedicated to inspiring every student's potential.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((teacher, idx) => {
            const IconComponent = teacher.icon;
            return (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedTeacher(teacher)}
                className={`group cursor-pointer rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  theme === 'light'
                    ? 'bg-white border-slate-200/90 text-slate-900 shadow-lg hover:shadow-2xl'
                    : 'bg-slate-900/90 border-white/15 text-white shadow-2xl'
                }`}
              >
                {/* Gradient avatar area */}
                <div className={`relative h-64 bg-gradient-to-br ${teacher.gradient} flex flex-col items-center justify-center`}>
                  {/* Decorative rings */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-28 h-28 border-2 border-white/10 rounded-full" />
                    <div className="absolute bottom-4 -left-4 w-20 h-20 border-2 border-white/10 rounded-full" />
                  </div>
                  
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center mb-3 shadow-xl group-hover:scale-110 transition-transform">
                    <IconComponent className="w-9 h-9 text-white" />
                  </div>
                  
                  <span className="text-white font-heading font-bold text-sm opacity-80">{teacher.department}</span>
                  
                  {/* Bottom gradient overlay for text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4">
                    <h3 className="font-heading font-bold text-lg text-white">{teacher.role}</h3>
                    <p className="text-xs text-brand-sky font-semibold">Faculty Name — Coming Soon</p>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <p className={`text-xs font-medium line-clamp-2 ${
                    theme === 'light' ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    {teacher.qualifications}
                  </p>

                  <div className={`pt-3 border-t flex items-center justify-between text-xs font-extrabold ${
                    theme === 'light' ? 'border-slate-100 text-brand-blue' : 'border-white/10 text-brand-sky'
                  }`}>
                    <span>View Department Details</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Department Detail Modal */}
      <AnimatePresence>
        {selectedTeacher && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`relative w-full max-w-xl p-6 sm:p-8 rounded-3xl shadow-2xl border ${
                theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-brand-slate border-white/20 text-white'
              }`}
            >
              <button
                onClick={() => setSelectedTeacher(null)}
                className={`absolute top-4 right-4 p-2 rounded-xl transition-colors cursor-pointer ${
                  theme === 'light' ? 'bg-slate-100 text-slate-500 hover:text-slate-900' : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                {/* Gradient avatar */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedTeacher.gradient} flex items-center justify-center border-2 border-white/30 shadow-md`}>
                  <selectedTeacher.icon className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h3 className={`font-heading text-xl font-extrabold ${
                    theme === 'light' ? 'text-brand-slate' : 'text-white'
                  }`}>
                    {selectedTeacher.role}
                  </h3>
                  <p className="text-xs text-brand-blue dark:text-brand-sky font-bold">{selectedTeacher.department}</p>
                  <p className={`text-xs mt-1 ${
                    theme === 'light' ? 'text-slate-500' : 'text-slate-400'
                  }`}>{selectedTeacher.qualifications}</p>
                </div>
              </div>

              <div className={`space-y-4 text-xs leading-relaxed ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-300'
              }`}>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Department Overview</h4>
                  <p>{selectedTeacher.description}</p>
                </div>

                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Key Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTeacher.focus.map((item, i) => (
                      <span key={i} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                        theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-white/5 border-white/10 text-slate-200'
                      }`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Placeholder note */}
                <div className={`p-3 rounded-xl border border-dashed flex items-start gap-2 ${
                  theme === 'light' ? 'bg-blue-50/60 border-blue-200 text-slate-500' : 'bg-brand-blue/5 border-brand-blue/30 text-slate-400'
                }`}>
                  <Sparkles className="w-3.5 h-3.5 text-brand-blue dark:text-brand-sky mt-0.5 shrink-0" />
                  <p className="text-[11px] leading-relaxed">
                    Faculty name, photograph, and detailed biography will be updated with official information from Excellence International School.
                  </p>
                </div>
              </div>

              <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs ${
                theme === 'light' ? 'border-slate-100' : 'border-white/10'
              }`}>
                <span className={theme === 'light' ? 'text-slate-500 font-medium' : 'text-slate-400 font-medium'}>
                  Excellence International Faculty
                </span>
                <button
                  onClick={() => setSelectedTeacher(null)}
                  className="px-4 py-2 bg-brand-blue hover:bg-blue-600 text-white rounded-lg font-bold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
