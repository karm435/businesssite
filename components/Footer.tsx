'use client';

import Link from 'next/link';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Templates', href: '/templates' },
      { name: 'Showcase', href: '/showcase' },
      { name: 'Integrations', href: '/integrations' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Blog', href: '/blog' },
      { name: 'Community', href: '/community' },
      { name: 'API Reference', href: '/api' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Partners', href: '/partners' },
      { name: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ],
  },
];

const socialLinks = [
  { icon: <FiTwitter className="w-5 h-5" />, href: 'https://twitter.com' },
  { icon: <FiFacebook className="w-5 h-5" />, href: 'https://facebook.com' },
  { icon: <FiLinkedin className="w-5 h-5" />, href: 'https://linkedin.com' },
  { icon: <FiInstagram className="w-5 h-5" />, href: 'https://instagram.com' },
  { icon: <FiGithub className="w-5 h-5" />, href: 'https://github.com' },
];

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold text-white">BusinessSite</span>
            </Link>
            <p className="text-secondary-400 mb-6">
              Create powerful web and mobile apps without writing a single line of code. Turn your ideas into reality.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h3 className="font-display font-bold text-white mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-secondary-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BusinessSite. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link href="/terms" className="text-secondary-400 hover:text-white text-sm">
              Terms
            </Link>
            <Link href="/privacy" className="text-secondary-400 hover:text-white text-sm">
              Privacy
            </Link>
            <Link href="/cookies" className="text-secondary-400 hover:text-white text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 