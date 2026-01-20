'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <span className="font-semibold text-lg text-neutral-900">
              Harmony TCM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
              Clinical Services
            </Link>
            <Link href="/what-we-treat" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
              What We Treat
            </Link>
            <Link href="/fee" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
              Fee
            </Link>
            <Link href="/is-your-acupuncturist-board-certified" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="tel:7174905991"
              className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition-colors"
            >
              (717) 490-5991
            </Link>
            <Link
              href="https://portal.holbie.com/prc-appt-form/GT5/DCW/0/direct"
              className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-neutral-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="pt-4 space-y-1 border-t border-neutral-100">
            <Link
              href="/"
              className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clinical Services
            </Link>
            <Link
              href="/what-we-treat"
              className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              What We Treat
            </Link>
            <Link
              href="/fee"
              className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fee
            </Link>
            <Link
              href="/is-your-acupuncturist-board-certified"
              className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Link
                href="https://portal.holbie.com/prc-appt-form/GT5/DCW/0/direct"
                className="block text-center bg-primary-600 text-white px-4 py-2.5 rounded-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
}
