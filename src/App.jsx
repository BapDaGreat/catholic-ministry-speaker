import React, { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CredibilityBanner from './components/CredibilityBanner';
import OfferingsSection from './components/OfferingsSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import MediaSection from './components/MediaSection';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import TechStackRationaleModal from './components/TechStackRationaleModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [techModalOpen, setTechModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['contact', 'media', 'testimonials', 'about', 'services', 'home'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        if (section === 'home' && window.scrollY < 300) {
          setActiveSection('home');
          break;
        }
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-gold-500/20 selection:text-navy-950">
      {/* Emil Kowalski's Sonner Toaster: Mounted once at root */}
      <Toaster
        position="bottom-right"
        richColors
        closeButton
        toastOptions={{
          style: {
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            borderRadius: '12px',
            border: '1px solid rgba(206, 195, 178, 0.4)',
          }
        }}
      />

      {/* Global Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenTechModal={() => setTechModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero onNavigate={scrollToSection} />
        <CredibilityBanner onNavigate={scrollToSection} />
        <OfferingsSection onNavigate={scrollToSection} />
        <AboutSection onNavigate={scrollToSection} />
        <TestimonialsSection />
        <MediaSection />
        <InquiryForm />
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenTechModal={() => setTechModalOpen(true)}
      />

      {/* Suggested Tech Stack Rationale Modal */}
      <TechStackRationaleModal
        isOpen={techModalOpen}
        onClose={() => setTechModalOpen(false)}
      />
    </div>
  );
}
