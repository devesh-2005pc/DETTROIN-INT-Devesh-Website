import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles
} from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About School', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Campus & Facilities', path: '/campus' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ onOpenVirtualTour, onOpenApplyModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto ${
          scrolled 
            ? 'glass-nav py-3 shadow-xl' 
            : theme === 'light'
              ? 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-200/80 shadow-sm'
              : 'bg-slate-950/85 backdrop-blur-md py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0 cursor-pointer"
            >
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-blue to-brand-sky p-0.5 shadow-lg shadow-brand-blue/30"
              >
                <div className="w-full h-full bg-brand-slate rounded-[10px] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-brand-sky group-hover:scale-110 transition-transform duration-300" />
                </div>
              </motion.div>
              
              <div className="flex flex-col">
                <span className={`font-heading font-extrabold text-sm xs:text-base sm:text-lg tracking-tight leading-tight transition-colors ${
                  theme === 'light' ? 'text-brand-slate' : 'text-white'
                }`}>
                  EXCELLENCE
                </span>
                <span className="text-[8px] xs:text-[9px] sm:text-[10px] tracking-[0.18em] font-bold text-brand-blue dark:text-brand-sky uppercase opacity-90">
                  International School
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className={`hidden lg:flex items-center gap-1 xl:gap-2 p-1.5 rounded-full border backdrop-blur-md transition-all shadow-md ${
              theme === 'light'
                ? 'bg-white/95 border-slate-300/80'
                : 'bg-slate-900/90 border-white/15'
            }`}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-4 py-2 text-xs xl:text-sm font-extrabold tracking-wide transition-all duration-200 rounded-full cursor-pointer hover:scale-105 active:scale-95 ${
                      isActive 
                        ? 'text-white shadow-md' 
                        : theme === 'light'
                          ? 'text-slate-800 hover:text-brand-blue hover:bg-slate-100'
                          : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-brand-blue to-blue-600 rounded-full shadow-md shadow-brand-blue/40 -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons & Theme Switcher */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <ThemeToggle />

              <button
                type="button"
                onClick={onOpenVirtualTour}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-extrabold rounded-full backdrop-blur-md transition-all duration-200 border cursor-pointer hover:scale-105 active:scale-95 min-h-[44px] ${
                  theme === 'light'
                    ? 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200'
                    : 'bg-white/10 text-slate-200 border-white/20 hover:bg-white/20 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-blue dark:text-brand-sky animate-pulse" />
                <span>360° Tour</span>
              </button>

              <button
                type="button"
                onClick={onOpenApplyModal}
                className="relative group overflow-hidden rounded-full p-[1px] font-bold focus:outline-none cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-sky to-cyan-400 rounded-full animate-pulse" />
                <span className="relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-brand-blue text-white text-xs sm:text-sm font-extrabold transition-all duration-200 group-hover:bg-blue-600 shadow-lg shadow-brand-blue/40 min-h-[44px]">
                  <span>Apply 2026</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle & Theme Switcher */}
            <div className="flex sm:hidden items-center gap-1.5">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2.5 rounded-xl border transition-colors focus:outline-none cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  theme === 'light'
                    ? 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                    : 'bg-slate-800/90 border-white/15 text-white hover:bg-slate-700'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 flex flex-col justify-between pt-20 pb-8 px-4 xs:px-6 lg:hidden backdrop-blur-2xl overflow-y-auto ${
              theme === 'light' ? 'bg-white/98 text-slate-900' : 'bg-slate-950/98 text-white'
            }`}
          >
            <div className="space-y-2 mt-2">
              <div className="text-xs font-extrabold uppercase tracking-widest text-brand-blue dark:text-brand-sky mb-3 px-2">
                Navigation Menu
              </div>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3 px-4 rounded-2xl text-base font-extrabold transition-all cursor-pointer min-h-[48px] ${
                      location.pathname === link.path
                        ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30'
                        : theme === 'light' ? 'text-slate-800 hover:bg-slate-100' : 'text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-5 h-5 opacity-70" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-200/40 dark:border-white/15 mt-6">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVirtualTour();
                }}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border font-extrabold text-sm transition-colors cursor-pointer min-h-[48px] ${
                  theme === 'light'
                    ? 'bg-slate-100 border-slate-300 text-slate-800'
                    : 'bg-white/10 border-white/15 text-white'
                }`}
              >
                <Sparkles className="w-4 h-4 text-brand-blue dark:text-brand-sky" />
                <span>360° Virtual Campus Tour</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-sky text-white font-extrabold text-sm shadow-lg shadow-brand-blue/40 text-center cursor-pointer min-h-[48px]"
              >
                Start Application 2026-27
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
