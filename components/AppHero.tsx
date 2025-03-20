'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

interface AppHeroProps {
  name: string;
  tagline: string;
  description: string;
  url: string;
  accentColor?: string;
  imageSrc?: string;
}

const AppHero = ({ 
  name, 
  tagline, 
  description, 
  url, 
  accentColor = '#0284c7',
  imageSrc = '/images/app-mockup.png'
}: AppHeroProps) => {
  
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const bgGradient = `linear-gradient(135deg, ${hexToRgba(accentColor, 0.1)} 0%, ${hexToRgba(accentColor, 0.05)} 100%)`;

  return (
    <section 
      className="pt-20 lg:pt-28 pb-16 md:pb-20 overflow-hidden"
      style={{ background: bgGradient }}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <motion.div 
            className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {name}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-secondary-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: accentColor }}
            >
              {tagline}
            </motion.p>
            <motion.p 
              className="text-secondary-600 text-lg mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {description}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn flex items-center justify-center gap-2 rounded-lg"
                style={{ backgroundColor: accentColor, color: 'white' }}
              >
                <FiDownload className="w-5 h-5" />
                <span>Download on App Store</span>
              </a>
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary flex items-center justify-center gap-2"
              >
                <span>Learn More</span>
                <FiArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.img
                src={imageSrc}
                alt={`${name} app screenshot`}
                className="w-full h-auto rounded-lg shadow-2xl mx-auto"
                style={{ maxWidth: '400px' }}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/app-placeholder.png';
                }}
              />
              <div 
                className="absolute -inset-0.5 rounded-lg blur-lg opacity-50 -z-10"
                style={{ backgroundColor: hexToRgba(accentColor, 0.5) }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppHero; 