'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    quote: "I was able to build and launch my business app in just two weeks. What would have cost me tens of thousands of dollars with a development agency was accomplished at a fraction of the cost.",
    author: "Sarah Johnson",
    role: "Founder, EcoTrack",
    stars: 5,
  },
  {
    quote: "As a non-technical entrepreneur, this platform has been a game-changer. I've built multiple apps for my business without writing a single line of code.",
    author: "Mark Davis",
    role: "CEO, ServicePro",
    stars: 5,
  },
  {
    quote: "The drag-and-drop interface is so intuitive! I was able to create a fully functional inventory management app for my small business in just days.",
    author: "Jennifer Lopez",
    role: "Business Owner",
    stars: 5,
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-secondary-600">
            Thousands of entrepreneurs and businesses have transformed their ideas into apps with our platform.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-soft-xl"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-secondary-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-bold text-secondary-900">{testimonial.author}</div>
                <div className="text-sm text-secondary-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 