import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-secondary-900 mb-6">
              Build Apps Without <span className="text-primary-600">Code</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Turn your ideas into powerful mobile and web apps without writing a single line of code. Design, build, and launch your app in days, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup" className="btn btn-primary text-center">
                Start Building for Free
              </Link>
              <Link href="#how-it-works" className="btn btn-secondary text-center">
                See How It Works
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-secondary-600">
                <span className="font-semibold">Trusted by 10,000+</span> entrepreneurs & businesses
              </p>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-soft-xl bg-white p-4">
              <div className="aspect-[4/3] relative bg-gray-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  App Preview Image
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                <div className="text-center">
                  <div className="text-2xl">No</div>
                  <div className="text-xs">Coding</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-secondary-100 rounded-lg rotate-12"></div>
            <div className="absolute -bottom-10 left-10 w-12 h-12 bg-primary-100 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 