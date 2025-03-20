
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck } from 'react-icons/fi';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'Perfect for individuals and small projects.',
    features: [
      'Up to 2 apps',
      '1,000 monthly active users',
      'Basic components',
      'Community support',
      'Standard integrations',
      'Basic analytics',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    monthlyPrice: 79,
    yearlyPrice: 790,
    description: 'Ideal for growing businesses and teams.',
    features: [
      'Up to 5 apps',
      '10,000 monthly active users',
      'Advanced components',
      'Priority support',
      'Advanced integrations',
      'Detailed analytics',
      'Custom domains',
      'Remove branding',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 249,
    yearlyPrice: 2490,
    description: 'For large organizations with complex needs.',
    features: [
      'Unlimited apps',
      'Unlimited monthly active users',
      'Premium components',
      'Dedicated support',
      'Custom integrations',
      'Advanced analytics',
      'Custom domains',
      'White labeling',
      'SLA guarantee',
      'HIPAA compliance',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

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
    <section id="pricing" className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-secondary-600 mb-8">
            Choose the plan that fits your needs. All plans include core features.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center">
            <span className={`mr-3 text-sm ${!isAnnual ? 'font-semibold text-secondary-900' : 'text-secondary-500'}`}>
              Monthly
            </span>
            <button
              onClick={toggleBilling}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
              aria-pressed={isAnnual}
            >
              <span className="sr-only">Toggle billing frequency</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 text-sm ${isAnnual ? 'font-semibold text-secondary-900' : 'text-secondary-500'}`}>
              Yearly <span className="text-primary-600">(Save 20%)</span>
            </span>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col rounded-xl ${
                plan.popular
                  ? 'bg-white border-2 border-primary-500 shadow-soft-xl'
                  : 'bg-white border border-gray-200 shadow-soft-xl'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary-500 text-white text-center text-sm font-medium py-2 rounded-t-xl">
                  Most Popular
                </div>
              )}
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-2">{plan.name}</h3>
                <p className="text-secondary-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-display font-bold text-secondary-900">
                    ${isAnnual ? plan.yearlyPrice / 12 : plan.monthlyPrice}
                  </span>
                  <span className="text-secondary-500">/month</span>
                  {isAnnual && (
                    <div className="text-sm text-primary-600 font-medium">
                      Billed annually (${plan.yearlyPrice})
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0">
                <Link
                  href="/signup"
                  className={`w-full btn text-center ${
                    plan.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 