import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Upload, FileText, Eye, Award, Briefcase, GraduationCap, Star } from 'lucide-react';

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [uploadedFile, setUploadedFile] = useState(null);

  const resumeHighlights = [
    {
      icon: Briefcase,
      title: '1.2+ Years Experience',
      description: 'Software Development & Testing',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: '10+ Projects',
      description: 'Web, Mobile & AR Applications',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: GraduationCap,
      title: 'EATM College, Bhubaneswar, Odisha ',
      description: 'Computer Science Engineering',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Star,
      title: '8+ Technologies',
      description: 'Flutter, React, Node.js & More',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const resumeSections = [
    {
      title: 'Professional Summary',
      content: 'Passionate Software Developer with 1.2+ years of experience in mobile and web development. Skilled in Flutter, React, Node.js, and testing methodologies.'
    },
    {
      title: 'Core Competencies',
      content: 'Mobile Development • Web Development  • Testing & QA • Database Design • API Development'
    },
    {
      title: 'Key Achievements',
      content: '• Developed 10+ applications with 95% crash-free rate\n• Reduced testing time by 50% through automation\n• Improved user experience by 40% through optimization'
    },
    {
      title: 'Certifications & Training',
      content: 'Software Development Training (6 months) • Full-Stack Development'
    }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ajit Kumar Behera.pdf';
    link.download = 'Ajit_Kumar_Behera_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
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
            Resume & <span className="gradient-text">Credentials</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Download my complete resume or upload your own version. Get a comprehensive 
            overview of my professional journey, skills, and achievements.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Resume Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 lg:space-y-8"
          >
            {/* Download Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <FileText className="text-white" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Download Resume
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  Get my latest resume with detailed information about my experience, 
                  skills, and projects.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                    Download PDF
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('/Ajit Kumar Behera.pdf', '_blank')}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Eye size={16} className="sm:w-[18px] sm:h-[18px]" />
                    Preview
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Upload Section */}
            {/* <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Upload className="text-white" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Upload Updated Resume
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  Have an updated version? Upload it here to replace the current resume.
                </p>
                
                <div className="space-y-4">
                  <label className="block">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
                    >
                      <Upload className="mx-auto mb-2 text-gray-400" size={24} />
                      <p className="text-gray-600 dark:text-gray-400">
                        Click to upload PDF file
                      </p>
                    </motion.div>
                  </label>
                  
                  {uploadedFile && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700"
                    >
                      <p className="text-green-700 dark:text-green-400 text-sm">
                        ✓ {uploadedFile.name} uploaded successfully
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Column - Resume Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 mt-8 lg:mt-0"
          >
            {/* Highlights Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {resumeHighlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg card-hover text-center"
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-to-r ${highlight.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="text-white" size={18} />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      {highlight.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Resume Sections Preview */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">
                Resume Highlights
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {resumeSections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="border-l-4 border-blue-500 pl-3 sm:pl-4"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                      {section.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-5 sm:p-6 text-white text-center"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Ready to Work Together?</h3>
              <p className="mb-3 sm:mb-4 opacity-90 text-sm sm:text-base">
                Let's discuss how I can contribute to your next project.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 sm:px-6 py-2 sm:py-2.5 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
