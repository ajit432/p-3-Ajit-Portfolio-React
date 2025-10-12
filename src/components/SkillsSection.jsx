import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Code, Smartphone, Globe, Database, TestTube, Settings } from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    if (isInView && !animatedSkills) {
      setTimeout(() => setAnimatedSkills(true), 500);
    }
  }, [isInView, animatedSkills]);

  const skillCategories = [
    {
      id: 1,
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Flutter', level: 90, description: 'Cross-platform mobile app development framework' },
        { name: 'Dart', level: 85, description: 'Programming language for Flutter apps' },
        { name: 'Bloc', level: 70, description: 'State management library for Flutter' },
        { name: 'Depencies', level: 80, description: 'Package and plugin integration in Flutter projects' },
      ]
    },
    {
      id: 2,
      title: 'Web Development',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'React', level: 85, description: 'JavaScript library for building user interfaces' },
        { name: 'Node.js', level: 80, description: 'JavaScript runtime for server-side development' },
        { name: 'HTML', level: 75, description: 'Markup language for structuring web content' },
        { name: 'JavaScript', level: 70, description: 'Programming language for web development' },
      ]
    },
    {
      id: 3,
      title: 'Database & Backend',
      icon: Database,
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'MySQL', level: 85, description: 'Relational database management system' }, 
        { name: 'Firebase', level: 75, description: 'Backend-as-a-Service platform with real-time database' },
        { name: 'Express.js', level: 80, description: 'Web framework for Node.js' },
      ]
    },
    {
      id: 4,
      title: 'Programming Languages',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Python', level: 75, description: 'General-purpose programming language for web and data' }, 
        { name: 'JavaScript', level: 85, description: 'Language for web and mobile development' },
        { name: 'Dart', level: 90, description: 'Language optimized for Flutter development' },
      ]
    },
    {
      id: 5,
      title: 'Testing & QA',
      icon: TestTube,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Manual Testing', level: 90, description: 'Designing and executing test cases' }, 
        { name: 'API Testing', level: 85, description: 'Testing REST APIs with Postman' },
        { name: 'JIRA', level: 80, description: 'Bug tracking and project management tool' },
      ]
    },
    {
      id: 6,
      title: 'Tools & Technologies',
      icon: Settings,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'Git/GitHub', level: 85, description: 'Version control and collaboration' },
        { name: 'VS Code', level: 90, description: 'Lightweight and powerful code editor' },
        { name: 'Postman', level: 85, description: 'API development and testing tool' },
        { name: 'Xammp', level: 70, description: 'Local development environment for PHP and MySQL' },
      ]
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
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
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical expertise across different domains 
            of software development, testing, and modern technologies.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-3 sm:mr-4`}>
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="space-y-2"
                    >
                      {/* Skill Name and Level */}
                      <div className="flex justify-between items-start sm:items-center">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            {skill.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                            {skill.description}
                          </p>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-2">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="skill-bar h-2 sm:h-3">
                        <motion.div
                          className="skill-progress h-full"
                          variants={progressVariants}
                          initial="hidden"
                          animate={animatedSkills ? "visible" : "hidden"}
                          custom={skill.level}
                          style={{
                            background: `linear-gradient(90deg, ${category.color.split(' ')[1]} 0%, ${category.color.split(' ')[3]} 100%)`
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 sm:mt-16"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6 sm:mb-8">
            Additional Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              'Flutter BLoC', 'Provider','RESTful APIs', 'Netlify', 
               'TestNG',  'Bootstrap', 'JWT (JSON Web Token)', 'Mailer (Node.js)', 'XAMPP / phpMyAdmin',
              'Tailwind CSS', 'Responsive Design', 'Progressive Web Apps', 'Python', 'Django','Opp','MVT','MVC','React','Props','Context Api', 
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 + 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-400 rounded-full text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
              <div className="text-xl sm:text-2xl font-bold gradient-text mb-1 sm:mb-2">25+</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Technologies</div>
            </div>
            <div className="p-3 sm:p-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
              <div className="text-xl sm:text-2xl font-bold gradient-text mb-1 sm:mb-2">6</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Domains</div>
            </div>
            <div className="p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
              <div className="text-xl sm:text-2xl font-bold gradient-text mb-1 sm:mb-2">10+</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Frameworks</div>
            </div>
            <div className="p-3 sm:p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
              <div className="text-xl sm:text-2xl font-bold gradient-text mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Tools</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
