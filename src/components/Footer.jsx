import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Experience', href: '#experience' },
      { name: 'Skills', href: '#skills' },
      { name: 'Resume', href: '#resume' },
      { name: 'Contact', href: '#contact' }
    ],
    projects: [ 
      { name: 'Bikewala - Bike Rental Platform', href: '#projects' },
      { name: 'Student Registration System', href: '#projects' },
      { name: 'Portfolio Website', href: '#projects' },
      { name: 'Hospital Leave Management System', href: '#projects' },
      { name: 'IT Employee Management System', href: '#projects' }
    ],
    connect: [
      { name: 'GitHub', href: 'https://github.com/sampleritgithuber', icon: Github },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nitish-kumar-7900a9248/', icon: Linkedin },
      { name: 'Twitter', href: 'https://twitter.com/nitishkumar', icon: Twitter },
      { name: 'Email', href: 'mailto:nitishpatel212000@gmail.com', icon: Mail }
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand & Description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-3 sm:mb-4">
                  Ajit Kumar Behera
                </h3>
                <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Passionate Software Developer specializing in mobile and web applications. 
                  Creating innovative solutions with modern technologies.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
                    <MapPin size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>Bhubaneswar, Odisha, India</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
                    <Phone size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>+91 9861500797</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
                    <Mail size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">ajitkumarbehera875@gmail.com</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Navigation</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {footerLinks.navigation.map((link, index) => (
                    <li key={index}>
                      <motion.button
                        onClick={() => scrollToSection(link.href)}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                      >
                        {link.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Featured Projects */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Featured Projects</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {footerLinks.projects.map((project, index) => (
                    <li key={index}>
                      <motion.button
                        onClick={() => scrollToSection(project.href)}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                      >
                        {project.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Social & Newsletter */}
            <div className="sm:col-span-2 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Connect With Me</h4>
                
                {/* Social Links */}
                <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {footerLinks.connect.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : '_self'}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                      >
                        <IconComponent size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </motion.a>
                    );
                  })}
                </div>

                {/* Newsletter Signup */}
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">
                    Stay updated with my latest projects and articles
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-2.5 sm:px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-xs sm:text-sm text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-xs sm:text-sm font-medium hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 text-center md:text-left"
              >
                <span>© {currentYear} Ajit Kumar Behera. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart size={14} className="sm:w-4 sm:h-4 text-red-500" fill="currentColor" />
                </motion.div>
                <span>using React & Tailwind CSS</span>
              </motion.div>

              <div className="flex items-center gap-3 sm:gap-6">
                <motion.button
                  onClick={() => scrollToSection('#about')}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  whileHover={{ scale: 1.05 }}
                  className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </motion.button>
                
                {/* Back to Top */}
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                >
                  <ArrowUp size={16} className="sm:w-[18px] sm:h-[18px]" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
        style={{
          width: "var(--scroll-progress, 0%)"
        }}
        initial={{ width: "0%" }}
      />
    </footer>
  );
};

export default Footer;
