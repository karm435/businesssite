'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import appsData from '@/data/apps.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white/95'
    } border-b border-gray-100`}>
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-primary-600">{appsData.company.name}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`text-secondary-600 hover:text-primary-600 font-medium ${pathname === '/' ? 'text-primary-600' : ''}`}
          >
            Home
          </Link>
          {appsData.apps.map((app) => (
            <Link 
              key={app.id}
              href={`/apps/${app.slug}`}
              className={`text-secondary-600 hover:text-primary-600 font-medium ${
                pathname === `/apps/${app.slug}` ? 'text-primary-600' : ''
              }`}
            >
              {app.name}
            </Link>
          ))}
          <Link 
            href="/about" 
            className={`text-secondary-600 hover:text-primary-600 font-medium ${pathname === '/about' ? 'text-primary-600' : ''}`}
          >
            About
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/contact" className="btn btn-primary">
            Contact Us
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
              href="/" 
              className={`block py-2 text-secondary-600 hover:text-primary-600 font-medium ${pathname === '/' ? 'text-primary-600' : ''}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            {appsData.apps.map((app) => (
              <Link 
                key={app.id}
                href={`/apps/${app.slug}`}
                className={`block py-2 text-secondary-600 hover:text-primary-600 font-medium ${
                  pathname === `/apps/${app.slug}` ? 'text-primary-600' : ''
                }`}
                onClick={toggleMenu}
              >
                {app.name}
              </Link>
            ))}
            <Link 
              href="/about"
              className={`block py-2 text-secondary-600 hover:text-primary-600 font-medium ${pathname === '/about' ? 'text-primary-600' : ''}`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="block w-full py-3 text-center bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 