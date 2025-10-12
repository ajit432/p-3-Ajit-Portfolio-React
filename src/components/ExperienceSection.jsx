import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Award, CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Key Software Services Private Limited",
      location: "Kurukshetra, Haryana, India",
      period: "Mar 2025 - Present",
      duration: "7 months", // update automatically later as time progresses
      type: "Full-time",
      description:
        "Working on end-to-end software solutions using Node.js, MySQL, Flutter, and React with modern tools and frameworks.",
      achievements: [
        "Developed scalable APIs using Node.js with JWT authentication",
        "Integrated MySQL database for optimized data management",
        "Built and deployed Flutter apps with Bloc state management",
        "Worked on cross-platform solutions with React and Flutter",
        "Utilized tools like Postman, XAMPP, and Mailer for testing and integration",
      ],
      technologies: [
        "Node.js",
        "MySQL",
        "Flutter",
        "React",
        "JWT",
        "Mailer",
        "Postman",
        "XAMPP",
      ],
      currentRole: true,
    },
    {
      id: 2,
      title: "Industrial Training - Python Full Stack Developer",
      company: "PySpider",
      location: "Bhubaneswar,Odisha, India",
      period: "Jul 2024 - Feb 2025",
      duration: "8 months",
      type: "Training",
      description:
        "Completed industrial training in Python Full Stack development covering front-end, back-end, and database technologies.",
      achievements: [
        "Learned HTML, CSS, JavaScript, Core Python, Advanced Python, and Django framework",
        "Built two major projects: Bike Rental Platform and Student Registration System",
        "Gained practical experience in full-stack development workflows",
        "Strengthened problem-solving and debugging skills",
        "Worked with databases and web frameworks for real-world applications",
      ],
      technologies: [
        "Python",
        "Django",
        "HTML",
        "CSS",
        "JavaScript",
        "SQLite",
        "Git",
      ],
      currentRole: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Full-time":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Training":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900"
      ref={ref}
    >
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
            Professional <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            My journey through different roles has shaped me into a well-rounded
            developer with experience in both development and quality assurance.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:justify-between`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform -translate-x-1/2 z-10 shadow-lg">
                  {experience.currentRole && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping" />
                  )}
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                      <div className="flex-1 mb-2 sm:mb-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {experience.company}
                        </p>
                      </div>
                      <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2">
                        <span
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(
                            experience.type
                          )}`}
                        >
                          {experience.type}
                        </span>
                        {experience.currentRole && (
                          <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-semibold rounded-full">
                            Current Role
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin size={12} className="sm:w-[14px] sm:h-[14px]" />
                        <span className="truncate">{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar
                          size={12}
                          className="sm:w-[14px] sm:h-[14px]"
                        />
                        <span className="truncate">{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award size={12} className="sm:w-[14px] sm:h-[14px]" />
                        <span className="truncate">{experience.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 flex items-center gap-2">
                        <CheckCircle
                          size={14}
                          className="sm:w-4 sm:h-4 text-green-500"
                        />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Technologies & Tools:
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 sm:px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8"
          >
            <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                1.2+
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                Years Experience
              </div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                10+
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                Projects Completed
              </div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                8+
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                Technologies Mastered
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
