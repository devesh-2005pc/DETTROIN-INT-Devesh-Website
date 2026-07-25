import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Award,
  Globe2,
  Globe,
  Share2,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Footer({ onOpenApplyModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { theme } = useTheme();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative pt-20 pb-10 overflow-hidden border-t transition-colors duration-300 ${
      theme === 'light'
        ? 'bg-slate-100 text-slate-900 border-slate-200'
        : 'bg-brand-slate text-white border-white/10'
    }`}>
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b ${
          theme === 'light' ? 'border-slate-300' : 'border-white/10'
        }`}>
          
          {/* Column 1: Brand & Accreditations */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky p-0.5 shadow-lg shadow-brand-blue/30">
                <div className="w-full h-full bg-brand-slate rounded-[10px] flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-brand-sky" />
                </div>
              </div>
              <div>
                <span className={`font-heading font-extrabold text-2xl tracking-tight block ${
                  theme === 'light' ? 'text-brand-slate' : 'text-white'
                }`}>
                  EXCELLENCE
                </span>
                <span className={`text-xs tracking-[0.25em] font-semibold uppercase ${
                  theme === 'light' ? 'text-brand-blue' : 'text-brand-sky'
                }`}>
                  International School
                </span>
              </div>
            </Link>

            <p className={`text-sm leading-relaxed max-w-md ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Empowering global leaders through rigorous academic distinction, holistic character growth, cutting-edge STEM innovation, and intercultural understanding since 1998.
            </p>

            {/* Accreditation Badges */}
            <div className="pt-2">
              <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                theme === 'light' ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Accreditations & Affiliations
              </div>
              <div className="flex flex-wrap gap-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                  theme === 'light'
                    ? 'bg-white border-slate-200 text-slate-700 shadow-sm'
                    : 'bg-white/5 border-white/10 text-slate-300'
                }`}>
                  <Award className={`w-3.5 h-3.5 ${theme === 'light' ? 'text-brand-blue' : 'text-brand-sky'}`} /> IB World School
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                  theme === 'light'
                    ? 'bg-white border-slate-200 text-slate-700 shadow-sm'
                    : 'bg-white/5 border-white/10 text-slate-300'
                }`}>
                  <ShieldCheck className={`w-3.5 h-3.5 ${theme === 'light' ? 'text-brand-blue' : 'text-brand-sky'}`} /> Cambridge Int.
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
                  theme === 'light'
                    ? 'bg-white border-slate-200 text-slate-700 shadow-sm'
                    : 'bg-white/5 border-white/10 text-slate-300'
                }`}>
                  <Globe2 className={`w-3.5 h-3.5 ${theme === 'light' ? 'text-brand-blue' : 'text-brand-sky'}`} /> CIS Accredited
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className={`font-heading text-lg font-bold tracking-wide ${
              theme === 'light' ? 'text-brand-slate' : 'text-white'
            }`}>
              Quick Links
            </h4>
            <ul className={`space-y-2.5 text-sm ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              {['About School', 'Academics', 'Admissions', 'Campus & Facilities', 'Gallery & Life', 'Events Calendar'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().split(' ')[0]}`}
                    className={`transition-colors flex items-center gap-1.5 group ${
                      theme === 'light' ? 'hover:text-brand-blue' : 'hover:text-brand-sky'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                      theme === 'light'
                        ? 'bg-brand-blue group-hover:bg-blue-600 group-hover:scale-125'
                        : 'bg-brand-blue group-hover:bg-brand-sky group-hover:scale-125'
                    }`} />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Pathways */}
          <div className="space-y-4">
            <h4 className={`font-heading text-lg font-bold tracking-wide ${
              theme === 'light' ? 'text-brand-slate' : 'text-white'
            }`}>
              Academics
            </h4>
            <ul className={`space-y-2.5 text-sm ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              {[
                'Early Childhood (Ages 3-5)',
                'Primary School (Grades 1-5)',
                'Middle School (Grades 6-8)',
                'IB Diploma (Grades 11-12)',
                'STEM & AI Innovation',
                'Sports & Athletics'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to="/academics"
                    className={`transition-colors flex items-center gap-1.5 group ${
                      theme === 'light' ? 'hover:text-brand-blue' : 'hover:text-brand-sky'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                      theme === 'light'
                        ? 'bg-slate-400 group-hover:bg-brand-blue'
                        : 'bg-slate-600 group-hover:bg-brand-sky'
                    }`} />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="space-y-4">
            <h4 className={`font-heading text-lg font-bold tracking-wide ${
              theme === 'light' ? 'text-brand-slate' : 'text-white'
            }`}>
              Stay Connected
            </h4>
            <p className={`text-xs ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Subscribe to the Excellence Chronicle for campus news, admissions dates, and event alerts.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address..."
                  required
                  className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                    theme === 'light'
                      ? 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                      : 'bg-slate-900/90 border-white/15 text-white placeholder-slate-400'
                  }`}
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-brand-blue hover:bg-blue-600 rounded-lg text-white transition-all flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-1.5 text-xs text-emerald-500 font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed successfully!</span>
                </motion.div>
              )}
            </form>

            <div className={`pt-3 space-y-2 text-xs ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-300'
            }`}>
              <div className="flex items-center gap-2">
                <MapPin className={`w-4 h-4 shrink-0 ${theme === 'light' ? 'text-brand-blue' : 'text-brand-sky'}`} />
                <span>45 Innovation Boulevard, Academic District</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className={`w-4 h-4 shrink-0 ${theme === 'light' ? 'text-brand-blue' : 'text-brand-sky'}`} />
                <span>+1 (800) 456-8890 / admissions@excellence.edu</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className={`pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs ${
          theme === 'light' ? 'text-slate-500' : 'text-slate-400'
        }`}>
          <div>
            © {new Date().getFullYear()} Excellence International School. All rights reserved. Reimaginings for DETTROIN Showcase.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Globe, href: '#' },
              { icon: Share2, href: '#' },
              { icon: MessageCircle, href: '#' },
              { icon: ExternalLink, href: '#' },
            ].map((social, i) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:bg-brand-blue hover:border-brand-blue hover:text-white ${
                    theme === 'light'
                      ? 'bg-white border-slate-300 text-slate-600 shadow-sm'
                      : 'bg-white/5 border-white/10 text-slate-300'
                  }`}
                  aria-label="Social Link"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 px-4 py-2 border rounded-full transition-all group cursor-pointer ${
              theme === 'light'
                ? 'bg-white border-slate-300 text-slate-600 hover:bg-slate-200 hover:text-brand-slate shadow-sm'
                : 'bg-white/5 border-white/15 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
