'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiUser } from 'react-icons/fi';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface AppTestimonialsProps {
  testimonials: Testimonial[];
  title: string;
  accentColor?: string;
}

const AppTestimonials = ({ testimonials, title, accentColor = '#0284c7' }: AppTestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const bgColor = hexToRgba(accentColor, 0.1);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autoplay) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoplay, testimonials.length]);

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  // Direction is used to determine which way the slides should move
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    setPage([newPage, newDirection]);

    if (newDirection > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span 
            className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4"
            style={{ color: accentColor, backgroundColor: bgColor }}
          >
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900">
            {title}
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="relative overflow-hidden min-h-[300px] px-4">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div 
                  className="bg-white p-8 rounded-xl shadow-soft-xl mx-auto max-w-3xl"
                  style={{ borderColor: accentColor, borderWidth: '1px' }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      {testimonials[currentIndex].avatar ? (
                        <img 
                          src={testimonials[currentIndex].avatar} 
                          alt={testimonials[currentIndex].name}
                          className="w-16 h-16 rounded-full object-cover"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"%3E%3C/path%3E%3Ccircle cx="12" cy="7" r="4"%3E%3C/circle%3E%3C/svg%3E';
                          }}
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                          <FiUser className="w-8 h-8 text-gray-500" />
                        </div>
                      )}
                    </div>
                    <p className="text-lg md:text-xl text-secondary-600 italic mb-6">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <h4 className="font-display font-bold text-lg text-secondary-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-secondary-500">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-secondary-500 hover:text-secondary-700 focus:outline-none z-10"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-secondary-500 hover:text-secondary-700 focus:outline-none z-10"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex ? 'bg-secondary-900' : 'bg-secondary-300'
              }`}
              style={index === currentIndex ? { backgroundColor: accentColor } : {}}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppTestimonials; 