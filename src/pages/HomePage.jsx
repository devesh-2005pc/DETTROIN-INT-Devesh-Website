import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import StatsCounter from '../components/sections/StatsCounter';
import AboutPrincipalSection from '../components/sections/AboutPrincipalSection';
import AcademicPrograms from '../components/sections/AcademicPrograms';
import FacilitiesSection from '../components/sections/FacilitiesSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import GallerySection from '../components/sections/GallerySection';
import EventsSection from '../components/sections/EventsSection';
import FacultySection from '../components/sections/FacultySection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AdmissionsCalculator from '../components/sections/AdmissionsCalculator';
import FAQSection from '../components/sections/FAQSection';
import AdmissionsCTA from '../components/sections/AdmissionsCTA';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage({ onOpenVirtualTour, onOpenApplyModal, onOpenLightbox }) {
  return (
    <main>
      <HeroSection onOpenVirtualTour={onOpenVirtualTour} onOpenApplyModal={onOpenApplyModal} />
      <StatsCounter />
      <AboutPrincipalSection />
      <AcademicPrograms onOpenApplyModal={onOpenApplyModal} />
      <FacilitiesSection onOpenVirtualTour={onOpenVirtualTour} />
      <AchievementsSection />
      <GallerySection onOpenLightbox={onOpenLightbox} />
      <EventsSection />
      <FacultySection />
      <AdmissionsCalculator onOpenApplyModal={onOpenApplyModal} />
      <TestimonialsSection />
      <FAQSection />
      <AdmissionsCTA onOpenApplyModal={onOpenApplyModal} />
      <ContactSection />
    </main>
  );
}
