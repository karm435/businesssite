'use client';

import { FiLayers, FiSmartphone, FiDatabase, FiZap, FiShield, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: <FiLayers className="w-6 h-6" />,
    title: 'Drag & Drop Interface',
    description: 'Build your app visually with our intuitive drag and drop interface. No coding required.',
  },
  {
    icon: <FiSmartphone className="w-6 h-6" />,
    title: 'Responsive Design',
    description: 'Create apps that look great on any device with automatic responsive layouts.',
  },
  {
    icon: <FiDatabase className="w-6 h-6" />,
    title: 'Built-in Database',
    description: 'Store and manage your app data with our powerful built-in database system.',
  },
  {
    icon: <FiZap className="w-6 h-6" />,
    title: 'Instant Updates',
    description: 'Push updates to your app instantly without going through app store review process.',
  },
  {
    icon: <FiShield className="w-6 h-6" />,
    title: 'Secure & Scalable',
    description: 'Enterprise-grade security and scalability to support apps of any size.',
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: 'User Management',
    description: 'Built-in user authentication and management systems for your app.',
  },
];

const Features = () => {
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
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            Everything You Need to Build Powerful Apps
          </h2>
          <p className="text-xl text-secondary-600">
            Our platform provides all the tools you need to create professional apps without writing a single line of code.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-soft-xl hover:shadow-soft-2xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-secondary-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 