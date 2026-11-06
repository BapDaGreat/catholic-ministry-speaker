import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Cross, Sparkles, BookOpen } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate, onOpenTechModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About & Charism' },
    { id: 'services', label: 'Speaking & Retreats' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'media', label: 'Media & Press Kit' },
    { id: 'contact', label: 'Booking Inquiry' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'glass-nav shadow-warm-sm py-3'
            : 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg p-1"
              aria-label="Julian Moreau Catholic Speaker Home"
            >
              <div className="w-10 h-10 rounded-full bg-navy-900 border border-gold-400/40 flex items-center justify-center text-gold-400 shadow-sm transition-transform duration-150 group-hover:scale-105">
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7V2z" />
                </svg>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-navy-950 leading-none">
                  Julian R. Moreau, <span className="text-gold-600 font-sans text-sm font-semibold tracking-normal">M.T.S.</span>
                </span>
                <span className="block font-sans text-[11px] sm:text-xs text-stone-700 tracking-wider uppercase mt-1 font-medium">
                  Catholic Speaker &middot; Retreat Director
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 relative ${
                    activeSection === item.id
                      ? 'text-navy-950 font-semibold'
                      : 'text-stone-700 hover:text-navy-950 hover:bg-stone-150/70'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Architecture Modal Pill */}
              <button
                onClick={onOpenTechModal}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-navy-800 bg-navy-50 hover:bg-navy-100 border border-navy-200/60 transition-colors duration-150"
                title="View Suggested Tech Stack Rationale & Architecture"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Tech Architecture</span>
              </button>

              {/* Primary Booking CTA */}
              <button
                onClick={() => handleNavClick('contact')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-stone-50 text-sm font-semibold shadow-warm-sm border border-navy-700 transition-transform active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Book Engagement</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => handleNavClick('contact')}
                className="sm:hidden px-3 py-1.5 rounded-md bg-navy-900 text-stone-50 text-xs font-semibold"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-navy-950 hover:bg-stone-200/50 transition-colors focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm lg:hidden transition-opacity duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-stone-50 shadow-2xl flex flex-col justify-between p-6 pt-safe pb-safe"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-navy-900 flex items-center justify-center text-gold-400">
                    <Cross className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-navy-950 block text-base">
                      Julian Moreau
                    </span>
                    <span className="text-[10px] text-stone-700 uppercase tracking-wider block">
                      New Orleans, LA
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-stone-500 hover:text-navy-950"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="mt-6 flex flex-col gap-1.5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-3.5 py-3 rounded-lg text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-navy-900 text-stone-50 font-semibold'
                        : 'text-stone-700 hover:bg-stone-200/50 hover:text-navy-950'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Tech Architecture Rationale button on mobile */}
              <div className="mt-6 pt-4 border-t border-stone-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTechModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-navy-50 text-navy-900 border border-navy-200 text-xs font-medium"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  <span>Tech Stack & Platform Rationale</span>
                </button>
              </div>
            </div>

            {/* Mobile Bottom Booking Button */}
            <div className="pt-6 border-t border-stone-200 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 px-4 rounded-lg bg-navy-900 hover:bg-navy-800 text-stone-50 text-center font-semibold text-sm shadow-warm-sm flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Book Speaking Engagement</span>
              </button>
              <p className="text-center text-[11px] text-stone-700">
                Archdiocese of New Orleans &middot; Canonical Letter of Good Standing
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
