import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Sparkles, Shield, HeartHandshake, Compass, Lightbulb, User, Crown, BookOpen } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const coreValues = [
  {
    title: 'Academic Excellence',
    description: 'Fostering critical thinking, rigorous inquiry, and mastery across international IB & Cambridge standards.',
    icon: Compass,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Ethical Leadership',
    description: 'Instilling integrity, empathy, and social responsibility to prepare students as compassionate global citizens.',
    icon: Shield,
    color: 'from-sky-400 to-blue-500'
  },
  {
    title: 'AI & STEM Innovation',
    description: 'Integrating computational thinking, robotics, and creative problem solving early in every grade level.',
    icon: Lightbulb,
    color: 'from-amber-400 to-orange-500'
  },
  {
    title: 'Intercultural Unity',
    description: 'Celebrating diversity across nationalities, fostering multilingualism and open global dialogues.',
    icon: HeartHandshake,
    color: 'from-emerald-400 to-teal-500'
  }
];

const leadershipProfiles = [
  {
    id: 'principal',
    tabLabel: "Principal's Message",
    role: 'Principal',
    title: 'Head of School',
    initial: 'P',
    gradient: 'from-brand-blue to-indigo-600',
    icon: User,
    quote: '"Education is the most powerful tool we can offer our children — a foundation of knowledge, character, and compassion that empowers them to shape the future."',
    message: [
      'Welcome to Excellence International School. Our institution is committed to nurturing each student\'s unique potential through a balanced approach to academic rigor, creative expression, and ethical character development.',
      'We believe that true education goes beyond textbooks — it is about kindling curiosity, building resilience, and preparing young minds to lead with integrity in an ever-evolving global landscape.'
    ],
    badge: 'Educational Leadership'
  },
  {
    id: 'chairman',
    tabLabel: "Chairman's Vision",
    role: 'Chairman',
    title: 'Board of Governors',
    initial: 'C',
    gradient: 'from-amber-500 to-orange-600',
    icon: Crown,
    quote: '"Our vision is to build an institution that stands as a beacon of academic excellence, innovation, and holistic development for generations to come."',
    message: [
      'Excellence International School was founded on the conviction that every child deserves access to world-class education. Our governance is guided by a commitment to transparency, continuous improvement, and community partnership.',
      'As we look to the future, we remain dedicated to investing in state-of-the-art infrastructure, attracting distinguished educators, and fostering an environment where students from all backgrounds can thrive and excel.'
    ],
    badge: 'Strategic Vision'
  },
  {
    id: 'academic',
    tabLabel: 'Academic Leadership',
    role: 'Academic Director',
    title: 'Curriculum & Standards',
    initial: 'A',
    gradient: 'from-emerald-500 to-teal-600',
    icon: BookOpen,
    quote: '"A rigorous, well-designed curriculum is the backbone of meaningful education — it transforms potential into achievement and curiosity into expertise."',
    message: [
      'Our academic framework integrates the best of international curricula including the IB Diploma Programme and Cambridge IGCSE, ensuring our students meet and exceed global benchmarks.',
      'Through personalized learning pathways, dedicated mentorship, and continuous assessment innovation, we empower every scholar to discover their strengths, challenge their limits, and achieve distinction.'
    ],
    badge: 'Curriculum Excellence'
  }
];

export default function AboutPrincipalSection() {
  const [activeTab, setActiveTab] = useState('principal');
  const { theme } = useTheme();

  const activeProfile = leadershipProfiles.find(p => p.id === activeTab);

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'light' ? 'bg-slate-50 text-slate-900' : 'bg-brand-slate text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-blue dark:text-brand-sky text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Leadership & Vision</span>
          </div>

          <h2 className={`font-heading text-3xl sm:text-5xl font-extrabold tracking-tight ${
            theme === 'light' ? 'text-brand-slate' : 'text-white'
          }`}>
            Messages from Our Leadership
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Guided by a shared commitment to academic distinction and holistic growth, our leadership team shapes the vision and values of Excellence International School.
          </p>

          {/* Toggle Tabs */}
          <div className={`inline-flex flex-wrap justify-center p-1.5 rounded-2xl border shadow-inner mt-4 gap-1 ${
            theme === 'light' ? 'bg-slate-200/80 border-slate-300' : 'bg-slate-900/80 border-white/10'
          }`}>
            {leadershipProfiles.map((profile) => (
              <button
                key={profile.id}
                onClick={() => setActiveTab(profile.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[44px] flex items-center justify-center ${
                  activeTab === profile.id
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30'
                    : theme === 'light' ? 'text-slate-700 hover:text-brand-slate' : 'text-slate-300 hover:text-white'
                }`}
              >
                {profile.tabLabel}
              </button>
            ))}
            <button
              onClick={() => setActiveTab('values')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[44px] flex items-center justify-center ${
                activeTab === 'values'
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30'
                  : theme === 'light' ? 'text-slate-700 hover:text-brand-slate' : 'text-slate-300 hover:text-white'
              }`}
            >
              Our Core Pillars
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab !== 'values' && activeProfile ? (
            <motion.div
              key={activeProfile.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Portrait Placeholder */}
              <div className="lg:col-span-5 relative">
                <div className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 ${
                  theme === 'light' ? 'border-white bg-slate-100' : 'border-white/15 bg-slate-900'
                }`}>
                  {/* Gradient avatar placeholder */}
                  <div className={`w-full h-[300px] xs:h-[360px] sm:h-[450px] bg-gradient-to-br ${activeProfile.gradient} flex flex-col items-center justify-center relative`}>
                    {/* Decorative pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-8 left-8 w-24 h-24 border-2 border-white rounded-full" />
                      <div className="absolute bottom-12 right-8 w-32 h-32 border-2 border-white rounded-full" />
                      <div className="absolute top-1/3 right-12 w-16 h-16 border-2 border-white rounded-full" />
                    </div>
                    
                    {/* Large initial */}
                    <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center mb-6 shadow-2xl">
                      <span className="font-heading font-black text-6xl text-white">{activeProfile.initial}</span>
                    </div>
                    
                    <span className="text-white/90 font-heading font-bold text-lg">{activeProfile.role}</span>
                    <span className="text-white/60 text-sm font-medium mt-1">Official portrait coming soon</span>
                  </div>
                  
                  {/* Bottom label bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6">
                    <h3 className="font-heading font-bold text-xl text-white">{activeProfile.role}</h3>
                    <p className="text-xs text-brand-sky font-bold">{activeProfile.title} • Excellence International School</p>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-3 w-12 h-12 rounded-2xl bg-brand-blue/15 text-brand-blue dark:text-brand-sky flex items-center justify-center">
                  <Quote className="w-6 h-6" />
                </div>

                <h3 className={`font-heading text-2xl sm:text-3xl font-bold leading-tight ${
                  theme === 'light' ? 'text-brand-slate' : 'text-white'
                }`}>
                  {activeProfile.quote}
                </h3>

                <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${
                  theme === 'light' ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  {activeProfile.message.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Info note */}
                <div className={`p-4 rounded-2xl border border-dashed flex items-start gap-3 ${
                  theme === 'light' ? 'bg-blue-50/60 border-blue-200 text-slate-600' : 'bg-brand-blue/5 border-brand-blue/30 text-slate-400'
                }`}>
                  <Sparkles className="w-4 h-4 text-brand-blue dark:text-brand-sky mt-0.5 shrink-0" />
                  <p className="text-xs leading-relaxed">
                    This section will be updated with the official profile, photograph, and message from the {activeProfile.role} of Excellence International School once available.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <div className={`font-serif italic text-xl font-bold ${
                      theme === 'light' ? 'text-brand-slate' : 'text-white'
                    }`}>{activeProfile.role}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">{activeProfile.title}</div>
                  </div>

                  <div className={`px-4 py-2 rounded-xl border text-xs font-bold ${
                    theme === 'light' ? 'bg-white border-slate-300 text-slate-800 shadow-sm' : 'bg-white/10 border-white/15 text-slate-200'
                  }`}>
                    {activeProfile.badge}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="values"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {coreValues.map((value) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    whileHover={{ y: -8 }}
                    className={`p-8 rounded-3xl border shadow-lg hover:shadow-xl transition-all duration-300 group ${
                      theme === 'light' ? 'bg-white border-slate-200/90 text-slate-900' : 'bg-slate-900/90 border-white/10 text-white'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h4 className={`font-heading font-bold text-xl mb-3 ${
                      theme === 'light' ? 'text-brand-slate' : 'text-white'
                    }`}>
                      {value.title}
                    </h4>

                    <p className={`text-sm leading-relaxed ${
                      theme === 'light' ? 'text-slate-600' : 'text-slate-300'
                    }`}>
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
