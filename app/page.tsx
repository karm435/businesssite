'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiSmartphone, FiCode, FiUsers, FiAward } from 'react-icons/fi';
import appsData from '@/data/apps.json';

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [appsRef, appsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutRef, aboutInView] = useInView({
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
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-28 pb-16 md:pb-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="container">
          <motion.div 
            ref={heroRef}
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6">
              Innovative iOS Apps by <span className="text-primary-600">{appsData.company.name}</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
              {appsData.company.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="btn btn-primary">
                Learn About Us
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apps Showcase Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-4">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Explore Our iOS Applications
            </h2>
            <p className="text-xl text-secondary-600">
              Discover our suite of powerful mobile applications designed to make your life easier.
            </p>
          </div>

          <motion.div
            ref={appsRef}
            variants={containerVariants}
            initial="hidden"
            animate={appsInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 gap-8"
          >
            {appsData.apps.map((app, index) => (
              <motion.div
                key={app.id}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-soft-xl hover:shadow-soft-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ backgroundColor: `${app.color}20`, color: app.color }}
                >
                  <FiSmartphone className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {app.name}
                </h3>
                <p className="text-secondary-600 mb-6">
                  {app.description}
                </p>
                <Link
                  href={`/apps/${app.slug}`}
                  className="flex items-center font-medium text-primary-600 hover:text-primary-700"
                >
                  Learn more <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-secondary-900 text-white">
        <div className="container">
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-500 text-white rounded-full mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Why Choose {appsData.company.name}?
              </h2>
              <p className="text-secondary-200 text-lg mb-8">
                We're passionate about creating intuitive, powerful iOS applications that solve real-world problems. With years of experience and a dedication to quality, we deliver solutions that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-primary-600 p-2 rounded-lg mr-4">
                    <FiCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Expert Developers</h4>
                    <p className="text-secondary-300">Skilled iOS specialists</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-600 p-2 rounded-lg mr-4">
                    <FiUsers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">User-Focused</h4>
                    <p className="text-secondary-300">Intuitive UX design</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-600 p-2 rounded-lg mr-4">
                    <FiSmartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">iOS Native</h4>
                    <p className="text-secondary-300">Built for performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-600 p-2 rounded-lg mr-4">
                    <FiAward className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Award-Winning</h4>
                    <p className="text-secondary-300">Recognized quality</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-secondary-800 rounded-lg p-4 transform translate-y-8">
                    <img 
                      src="/images/receiptsco-hero.png" 
                      alt="ReceiptsCo App" 
                      className="rounded-lg shadow-lg"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/app-placeholder.png';
                      }}
                    />
                  </div>
                  <div className="bg-secondary-800 rounded-lg p-4">
                    <img 
                      src="/images/paperless-hero.png" 
                      alt="Paperless App" 
                      className="rounded-lg shadow-lg"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/app-placeholder.png';
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-secondary-800 rounded-lg p-4">
                    <img 
                      src="/images/invoease-hero.png" 
                      alt="InvoEase App" 
                      className="rounded-lg shadow-lg"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/app-placeholder.png';
                      }}
                    />
                  </div>
                  <div className="bg-secondary-800 rounded-lg p-4 transform translate-y-8">
                    <img 
                      src="/images/landlordsco-hero.png" 
                      alt="LandlordsCo App" 
                      className="rounded-lg shadow-lg"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/app-placeholder.png';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA 
        title="Ready to Transform Your Experience?"
        description="Download our iOS apps today and experience the difference. Built for simplicity, designed for power."
        buttonText="View Our Apps"
        buttonLink="/apps/receiptsco"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        showNote={false}
      />
      <Footer />
    </main>
  );
} 