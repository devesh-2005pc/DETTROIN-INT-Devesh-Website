import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      className={`relative p-2.5 rounded-full backdrop-blur-md transition-colors border shadow-md flex items-center justify-center ${
        theme === 'dark'
          ? 'bg-slate-800/90 text-amber-400 border-amber-400/30 hover:bg-slate-700'
          : 'bg-white/90 text-brand-slate border-slate-300 hover:bg-slate-100'
      }`}
      aria-label="Toggle Theme"
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.25 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-4 h-4 fill-amber-400/20" />
        ) : (
          <Moon className="w-4 h-4 text-brand-blue fill-brand-blue/20" />
        )}
      </motion.div>
    </motion.button>
  );
}
