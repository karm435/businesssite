'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showNote?: boolean;
}

const CTA = ({
  title = "Ready to Build Your App Without Coding?",
  description = "Join thousands of users who are building powerful applications without writing a single line of code. Start for free and upgrade as you grow.",
  buttonText = "Start Building for Free",
  buttonLink = "/signup",
  secondaryButtonText = "Request a Demo",
  secondaryButtonLink = "/demo",
  showNote = true
}: CTAProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 lg:py-24 bg-primary-600 text-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-primary-700 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary-500 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-500 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative py-16 px-8 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              {title}
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={buttonLink}
                className="btn bg-white text-primary-600 hover:bg-primary-50 text-center"
              >
                {buttonText}
              </Link>
              <Link
                href={secondaryButtonLink}
                className="btn bg-primary-600 border border-primary-400 hover:bg-primary-500 text-center"
              >
                {secondaryButtonText}
              </Link>
            </div>
            {showNote && (
              <p className="mt-6 text-sm text-primary-200">
                No credit card required. 14-day free trial on all paid plans.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 