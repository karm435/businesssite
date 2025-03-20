'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiSmartphone, FiUsers, FiAward } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import appsData from '@/data/apps.json';

export default function About() {
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-6">
              About <span className="text-primary-600">{appsData.company.name}</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
              We're a team of passionate iOS developers creating innovative solutions that help people work smarter and live better.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Simplifying Lives Through Technology
              </h2>
              <p className="text-secondary-600 text-lg mb-6">
                At {appsData.company.name}, our mission is to create intuitive, powerful iOS applications that solve real-world problems and make everyday tasks easier for our users.
              </p>
              <p className="text-secondary-600 text-lg">
                We believe in building technology that works for people, not the other way around. Our apps are designed with real users in mind, focusing on simplicity, efficiency, and delight.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/about-mission.jpg" 
                alt="Our mission" 
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" fill="none"%3E%3Crect width="800" height="600" fill="%23f1f5f9"%3E%3C/rect%3E%3Ctext x="400" y="300" font-family="system-ui" font-size="24" text-anchor="middle" fill="%2394a3b8"%3EImage placeholder%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-secondary-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-secondary-600">
              Our core values shape everything we do, from how we design our products to how we work as a team.
            </p>
          </div>

          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-soft-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                <FiUsers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">
                User-Centric
              </h3>
              <p className="text-secondary-600">
                We put our users at the center of everything we do, focusing on their needs, challenges, and goals.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-soft-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                <FiSmartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">
                Quality First
              </h3>
              <p className="text-secondary-600">
                We never compromise on quality, ensuring our apps are reliable, efficient, and beautifully designed.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-soft-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                <FiCode className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">
                Innovation
              </h3>
              <p className="text-secondary-600">
                We constantly explore new ideas and technologies to create better solutions for our users.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-soft-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                <FiAward className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">
                Integrity
              </h3>
              <p className="text-secondary-600">
                We build trust through transparency, honesty, and ethical business practices.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section - Placeholder */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              Meet the People Behind Our Apps
            </h2>
            <p className="text-xl text-secondary-600">
              Our diverse team of talented developers, designers, and product specialists work together to create exceptional iOS experiences.
            </p>
          </div>

          <motion.div
            ref={teamRef}
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center py-10"
          >
            <p className="text-xl text-secondary-600 italic">
              "We're a small but mighty team dedicated to crafting iOS apps that make a real difference in people's lives."
            </p>
            <p className="mt-4 text-primary-600 font-medium">
              — The {appsData.company.name} Team
            </p>
          </motion.div>
        </div>
      </section>

      <CTA 
        title="Ready to Experience Our Apps?"
        description="Download our iOS applications today and see how they can transform the way you work."
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