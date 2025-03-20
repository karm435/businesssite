import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Design Your App',
    description: 'Start by designing your app visually. Choose from pre-built templates or create your own screens with our drag-and-drop editor.',
  },
  {
    number: '02',
    title: 'Connect Your Data',
    description: 'Define your data structure and connect components to your database. Create relationships between data and set up your business logic.',
  },
  {
    number: '03',
    title: 'Add Functionality',
    description: 'Add actions, workflows, and integrations to make your app functional. Connect to third-party services or use our built-in features.',
  },
  {
    number: '04',
    title: 'Publish & Share',
    description: 'Publish your app to web, iOS, and Android with one click. Share with users instantly or submit to app stores.',
  },
];

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            Build Your App in 4 Simple Steps
          </h2>
          <p className="text-xl text-secondary-600">
            Our intuitive platform makes it easy to create powerful apps without any coding knowledge.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-display font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-secondary-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-secondary-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:h-[500px] bg-gray-100 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg">
              App Building Process Illustration
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 