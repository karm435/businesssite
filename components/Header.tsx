'use client';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-primary-600">BusinessSite</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-secondary-600 hover:text-primary-600 font-medium">
            Features
          </Link>
          <Link href="#how-it-works" className="text-secondary-600 hover:text-primary-600 font-medium">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-secondary-600 hover:text-primary-600 font-medium">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-secondary-600 hover:text-primary-600 font-medium">
            Pricing
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-secondary-700 hover:text-primary-600 font-medium">
            Log in
          </Link>
          <Link href="/signup" className="btn btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-secondary-500 hover:text-secondary-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-2 bg-white">
            <Link 
              href="#features" 
              className="block py-2 text-secondary-600 hover:text-primary-600 font-medium"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="block py-2 text-secondary-600 hover:text-primary-600 font-medium"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <Link 
              href="#testimonials" 
              className="block py-2 text-secondary-600 hover:text-primary-600 font-medium"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link 
              href="#pricing" 
              className="block py-2 text-secondary-600 hover:text-primary-600 font-medium"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <div className="pt-4 space-y-4">
              <Link 
                href="/login" 
                className="block w-full py-2 text-center text-secondary-700 hover:text-primary-600 font-medium"
                onClick={toggleMenu}
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                className="block w-full py-3 text-center bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 