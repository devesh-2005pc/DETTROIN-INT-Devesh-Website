import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import SmoothScroll from './components/layout/SmoothScroll';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import VirtualTourModal from './components/ui/VirtualTourModal';
import ApplyModal from './components/ui/ApplyModal';
import Lightbox from './components/ui/Lightbox';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import CampusPage from './pages/CampusPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleOpenVirtualTour = () => setIsVirtualTourOpen(true);
  const handleCloseVirtualTour = () => setIsVirtualTourOpen(false);

  const handleOpenApplyModal = () => setIsApplyModalOpen(true);
  const handleCloseApplyModal = () => setIsApplyModalOpen(false);

  const handleOpenLightbox = (image) => setLightboxImage(image);
  const handleCloseLightbox = () => setLightboxImage(null);

  return (
    <ThemeProvider>
      <Router>
        <SmoothScroll>
          <div className="min-h-screen flex flex-col font-sans selection:bg-brand-blue selection:text-white transition-colors duration-300">
            <ScrollProgress />
            
            <Navbar 
              onOpenVirtualTour={handleOpenVirtualTour} 
              onOpenApplyModal={handleOpenApplyModal} 
            />

            <div className="flex-grow">
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <HomePage 
                      onOpenVirtualTour={handleOpenVirtualTour} 
                      onOpenApplyModal={handleOpenApplyModal} 
                      onOpenLightbox={handleOpenLightbox}
                    />
                  } 
                />
                <Route 
                  path="/about" 
                  element={
                    <AboutPage 
                      onOpenApplyModal={handleOpenApplyModal} 
                      onOpenVirtualTour={handleOpenVirtualTour} 
                    />
                  } 
                />
                <Route 
                  path="/academics" 
                  element={<AcademicsPage onOpenApplyModal={handleOpenApplyModal} />} 
                />
                <Route 
                  path="/campus" 
                  element={
                    <CampusPage 
                      onOpenVirtualTour={handleOpenVirtualTour} 
                      onOpenApplyModal={handleOpenApplyModal} 
                      onOpenLightbox={handleOpenLightbox}
                    />
                  } 
                />
                <Route 
                  path="/admissions" 
                  element={<AdmissionsPage onOpenApplyModal={handleOpenApplyModal} />} 
                />
                <Route 
                  path="/contact" 
                  element={<ContactPage />} 
                />
              </Routes>
            </div>

            <Footer onOpenApplyModal={handleOpenApplyModal} />

            {/* Global Interactive Modals */}
            <VirtualTourModal 
              isOpen={isVirtualTourOpen} 
              onClose={handleCloseVirtualTour} 
            />

            <ApplyModal 
              isOpen={isApplyModalOpen} 
              onClose={handleCloseApplyModal} 
            />

            <Lightbox 
              isOpen={!!lightboxImage} 
              image={lightboxImage} 
              onClose={handleCloseLightbox} 
            />
          </div>
        </SmoothScroll>
      </Router>
    </ThemeProvider>
  );
}
