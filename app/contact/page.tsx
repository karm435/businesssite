'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import appsData from '@/data/apps.json';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <main>
      <Header />
      
      <section className="pt-24 lg:pt-32 pb-16 md:pb-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                Have questions about our apps or want to get in touch with our team? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-soft-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg text-primary-600 flex items-center justify-center mx-auto mb-4">
                  <FiMail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <p className="text-secondary-600 mb-2">For general inquiries:</p>
                <a href="mailto:info@karmaacademy.com.au" className="text-primary-600 hover:text-primary-700">
                  info@karmaacademy.com.au
                </a>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-soft-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg text-primary-600 flex items-center justify-center mx-auto mb-4">
                  <FiPhone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                <p className="text-secondary-600 mb-2">Monday-Friday, 9am-5pm:</p>
                <a href="tel:+61412345678" className="text-primary-600 hover:text-primary-700">
                  +61 4 1234 5678
                </a>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-soft-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg text-primary-600 flex items-center justify-center mx-auto mb-4">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                <p className="text-secondary-600 mb-2">Our headquarters:</p>
                <address className="not-italic text-primary-600">
                  Sydney, Australia
                </address>
              </motion.div>
            </div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-soft-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary-900 mb-6 text-center">
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full text-primary-600 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-secondary-600">
                    Thank you for contacting {appsData.company.name}. We'll get back to you as soon as possible.
                  </p>
                  <button 
                    className="mt-6 text-primary-600 font-medium hover:text-primary-700"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">App Support</option>
                      <option value="feature">Feature Request</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <div className="text-right">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-primary px-8 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 