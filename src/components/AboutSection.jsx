import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Code, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'EATM, Bhubaneswar, Odisha - Computer Science Engineering',
      highlight: 'Strong academic foundation'
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: '8 Months Full-time + 6 Months Training',
      highlight: 'Diverse industry exposure'
    },
    {
      icon: Code,
      title: 'Projects',
      description: '10+ Personal & Professional Projects',
      highlight: 'Real-world applications'
    },
    {
      icon: Award,
      title: 'Specialization',
      description: 'Mobile & Web Development',
      highlight: 'Cross-platform expertise'
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

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Profile Image & Quick Info */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 lg:space-y-8"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                <img 
                  src="/Ajit photo New.jpg" 
                  alt="Ajit Kumar - Professional Photo" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center"
              >
                <Code className="text-blue-500" size={24} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center"
              >
                <GraduationCap className="text-purple-500" size={24} />
              </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg card-hover text-center"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Icon className="text-white" size={16} />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      {achievement.highlight}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4 sm:space-y-6 mt-8 lg:mt-0"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Passionate Software Developer
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm <span className="font-semibold gradient-text">Ajit Kumar Behera </span>, a dedicated 
                Software Developer with a strong foundation in both mobile and web technologies. 
                My journey in software development began at <a href="https://eatm.in/" target="_blank" rel="noopener noreferrer" className="font-semibold gradient-text">Einstein Academy of Technology And Management</a>, Bhubaneswar, Odisha, under <a href="https://www.bput.ac.in/" target="_blank" rel="noopener noreferrer" className="font-semibold gradient-text">Biju Patnaik University of Technology</a>,Odisha. where I developed a passion for creating innovative solutions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                My Journey
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <span className="font-medium">8 Months Training In <a href="https://www.instagram.com/qspiders_bhubaneswar/?hl=en" target="_blank" rel="noopener noreferrer" className="font-semibold gradient-text"> Pyspider </a>, Bhubaneswar, Odisha. july 2024 - feb 2025:</span> Started with intensive 
                    training in software development fundamentals and testing methodologies.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Software Developer & Tester |<a href="https://www.linkedin.com/company/keyssin/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="font-semibold gradient-text"> KEYSS </a>  | March 2025 – Present:</span> Worked as both 
                    Software Developer (Client side and Server side) and Software Tester, gaining 
                    comprehensive industry experience.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Current Focus:</span> Specializing in mobile development, mobile applications, and full-stack web development using modern technologies like Python, Django, React,Flutter and Node.js.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Core Competencies
              </h4>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  'Mobile Development',
                  'Web Development',
                  'Django Development',
                  'API Development',
                  'Database Design',
                  'Testing & QA',
                  'UI/UX Design',
                  'Project Management',
                  'React',
                  'HTML & CSS',
                  'Tailwind',
                  'Wordpress',
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-blue-200 dark:border-gray-600"
                  >
                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                What Drives Me
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm passionate about solving real-world problems through technology. Whether it's 
                developing a grocery app with Flutter and React, creating a website with Django, building robust backend systems with Node.js, I strive to deliver high-quality 
                solutions that make a difference.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
