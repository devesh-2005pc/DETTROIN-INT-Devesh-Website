import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react';

export default function Lightbox({ isOpen, image, onClose, onPrev, onNext }) {
  if (!isOpen || !image) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-2xl">
        {/* Backdrop Close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Top Controls */}
        <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20">
          <div>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brand-sky">
              Excellence Gallery Showcase
            </span>
            <h4 className="text-white font-heading font-bold text-base sm:text-lg line-clamp-1">
              {image.title || 'Campus Image'}
            </h4>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => alert('Image link copied to clipboard!')}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              title="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Previous Button */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all z-20 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all z-20 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Image Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-5xl max-h-[75vh] sm:max-h-[80vh] z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        >
          <img
            src={image.src || image.url || image}
            alt={image.title || 'Gallery Preview'}
            className="w-full h-full max-h-[75vh] sm:max-h-[80vh] object-contain bg-slate-900"
          />
          {image.category && (
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-brand-slate/80 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/10">
              {image.category}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
