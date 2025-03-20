'use client';

import { 
  FiCamera, FiFolder, FiFileText, FiCloud, FiDollarSign, FiSmartphone,
  FiCreditCard, FiBell, FiUsers, FiBarChart2, FiClock, FiUserCheck,
  FiTool, FiPieChart, FiHome, FiSearch, FiLock, FiShare2, FiEdit
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Interface for feature items
interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

interface AppFeaturesProps {
  title: string;
  description: string;
  features: FeatureItem[];
  accentColor?: string;
}

const getIconComponent = (iconName: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    FiCamera: <FiCamera className="w-6 h-6" />,
    FiFolder: <FiFolder className="w-6 h-6" />,
    FiFileText: <FiFileText className="w-6 h-6" />,
    FiCloud: <FiCloud className="w-6 h-6" />,
    FiDollarSign: <FiDollarSign className="w-6 h-6" />,
    FiSmartphone: <FiSmartphone className="w-6 h-6" />,
    FiCreditCard: <FiCreditCard className="w-6 h-6" />,
    FiBell: <FiBell className="w-6 h-6" />,
    FiUsers: <FiUsers className="w-6 h-6" />,
    FiBarChart2: <FiBarChart2 className="w-6 h-6" />,
    FiClock: <FiClock className="w-6 h-6" />,
    FiUserCheck: <FiUserCheck className="w-6 h-6" />,
    FiTool: <FiTool className="w-6 h-6" />,
    FiPieChart: <FiPieChart className="w-6 h-6" />,
    FiHome: <FiHome className="w-6 h-6" />,
    FiSearch: <FiSearch className="w-6 h-6" />,
    FiLock: <FiLock className="w-6 h-6" />,
    FiShare2: <FiShare2 className="w-6 h-6" />,
    FiEdit: <FiEdit className="w-6 h-6" />
  };

  return icons[iconName] || <FiFileText className="w-6 h-6" />;
};

const AppFeatures = ({ title, description, features, accentColor = '#0284c7' }: AppFeaturesProps) => {
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

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const bgColor = hexToRgba(accentColor, 0.1);

  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4"
            style={{ color: accentColor, backgroundColor: bgColor }}
          >
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-secondary-600">
            {description}
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
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ color: accentColor, backgroundColor: bgColor }}
              >
                {getIconComponent(feature.icon)}
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

export default AppFeatures; 