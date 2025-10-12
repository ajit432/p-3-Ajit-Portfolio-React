import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Eye, Lock, User, Clipboard, Users } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      id: 1,
      title: 'Bikewala - Bike Rental Platform',
      description: 'A comprehensive web application for bike rental services with real-time availability, booking management System.',
      technologies: ['Django', 'Python', 'SQLite Database', 'HTML/CSS/JavaScript', 'Bootstrap','Django ORM'],
      category: 'Web Application',
      icon: Smartphone,
      image: '/api/placeholder/400/250',
      features: [
      'Bike catalog with search and filters',
      'Real-time booking management',
      'User authentication and profile management',
    ],
      github: 'https://github.com/nitishkumar/grocery-app',
      demo: 'https://grocery-app-demo.netlify.app',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Student Registration System',
      description: 'A Django-based system that enables student registration with profile pictures, encrypted authentication, and admin dashboard for managing student details.',
      technologies: ['Python', 'Django', 'SQLite Database', 'Bootstrap', 'HTML/CSS/JavaScript'],
      category: 'Web Application',
      icon: User,
      image: '/api/placeholder/400/250',
      features: [
        'Student registration with class, branch, and profile photo',
        'Encrypted login system with email and password',
        'Admin panel to view and manage all student details'
      ],
      github: 'https://github.com/nitishkumar/ar-scanner',
      demo: 'https://ar-scanner-demo.com',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio built with React, showcasing front-end development, animations, and seamless project integration.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      category: 'Portfolio Website',
      icon: Globe,
      image: '/api/placeholder/400/250',
      features: [
      'Responsive design for all devices',
      'Project showcase and personal information',
      'Interactive and dynamic UI with React'
      ],
      github: 'https://github.com/nitishkumar/smart-lock',
      demo: 'https://smart-lock-dashboard.herokuapp.com',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Hospital Leave Management System',
      description: 'A role-based leave management system where doctors can apply for leave, and admins can set, approve, or reject leave requests with custom conditions.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'MySQL', 'JWT', 'XAMPP (phpMyAdmin)'],
      category: 'Web Application',
      icon: Clipboard,
      image: '/api/placeholder/400/250',
      features: [
      'Role-based authentication for admin and doctors',
      'Doctors can apply leave with conditions',
      'Admin can approve, reject, or set leave policies'
      ],
      github: 'https://github.com/nitishkumar/employee-manager',
      demo: 'https://employee-manager-demo.com',
      status: 'In Development'
    },
      {
    id: 5,
    title: 'IT Employee Management System',
    description: 'A Flutter and Node.js-based employee management system for HRs to manage employees, leaves, appraisals, and work attendance tracking with email integration.',
    technologies: ['Flutter', 'Bloc', 'Node.js', 'JWT', 'Mailer', 'MySQL', 'XAMPP (phpMyAdmin)'],
    category: 'Mobile & Web Application',
    icon: Users,
    image: '/api/placeholder/400/250',
    features: [
      'Employee work details and attendance tracking',
      'HR dashboard for employee management, leave, and appraisal',
      'Admin access with role-based authentication'
    ],
    github: 'https://github.com/nitishkumar/it-employee-management',
    demo: 'https://it-employee-demo.com',
    status: 'In Development'
  }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'In Development':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A showcase of my recent work spanning mobile applications, web development, 
            AR/VR experiences, and IoT solutions. Each project demonstrates my commitment 
            to quality and innovation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <IconComponent size={40} className="sm:w-12 sm:h-12 text-blue-500 mx-auto mb-2" />
                      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{project.category}</p>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github size={16} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-3 sm:px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-center rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium"
                    >
                      <Github size={12} className="sm:w-[14px] sm:h-[14px]" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium"
                    >
                      <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px]" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
