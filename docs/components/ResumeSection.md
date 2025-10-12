# Resume Section Component Documentation

## Overview
The `ResumeSection` component provides a comprehensive resume showcase with download functionality, resume highlights, and professional summary. It features a two-column layout with interactive elements for resume management.

## File Location
`src/components/ResumeSection.jsx`

## Dependencies
- React (useRef, useState)
- Framer Motion (motion, useInView)
- Lucide React (Download, Upload, FileText, Eye, Award, Briefcase, GraduationCap, Star icons)

## Key Features

### 1. Resume Download
- **PDF Download**: Direct download of resume PDF
- **Preview Functionality**: Open resume in new tab for preview
- **File Management**: Handles resume file operations

### 2. Resume Highlights
- **Achievement Cards**: Visual display of key achievements
- **Statistics Display**: Professional metrics and accomplishments
- **Icon Integration**: Each highlight has a representative icon

### 3. Resume Preview
- **Section Overview**: Key resume sections displayed
- **Professional Summary**: Brief professional description
- **Core Competencies**: Skills and expertise areas
- **Key Achievements**: Notable accomplishments

### 4. Interactive Elements
- **Download Buttons**: Multiple ways to access resume
- **Hover Animations**: Interactive button effects
- **Responsive Design**: Adapts to different screen sizes

## State Management

```javascript
const ref = useRef(null);
const isInView = useInView(ref, { once: true });
const [uploadedFile, setUploadedFile] = useState(null);
```

### State Variables
- `ref`: Reference to the section element
- `isInView`: Boolean indicating if section is visible in viewport
- `uploadedFile`: State for file upload functionality (currently disabled)

## Resume Highlights Data Structure

```javascript
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
    title: 'EATM College, Bhubaneswar, Odisha',
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
```

### Highlight Object Properties
- `icon`: Lucide React icon component
- `title`: Highlight title
- `description`: Brief description
- `color`: Tailwind gradient color classes

## Resume Sections Data Structure

```javascript
const resumeSections = [
  {
    title: 'Professional Summary',
    content: 'Passionate Software Developer with 1.2+ years of experience in mobile and web development. Skilled in Flutter, React, Node.js, and testing methodologies.'
  },
  {
    title: 'Core Competencies',
    content: 'Mobile Development • Web Development • Testing & QA • Database Design • API Development'
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
```

### Section Object Properties
- `title`: Section title
- `content`: Section content (supports newlines with `\n`)

## Animation System

### Container Variants
```javascript
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
```

### Item Variants
```javascript
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
```

## Download Section

### Download Card
```javascript
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
```

## Download Function

```javascript
const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Ajit Kumar Behera.pdf';
  link.download = 'Ajit_Kumar_Behera_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

## Resume Highlights Grid

```javascript
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
```

## Resume Sections Preview

```javascript
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
```

## Quick Contact Section

```javascript
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
```

## File Upload Functionality (Currently Disabled)

```javascript
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file && file.type === 'application/pdf') {
    setUploadedFile(file);
  } else {
    alert('Please upload a PDF file');
  }
};
```

## Responsive Design

### Two-Column Layout
```javascript
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
  {/* Left Column - Resume Actions */}
  <motion.div className="space-y-6 lg:space-y-8">
    {/* Download section */}
  </motion.div>
  
  {/* Right Column - Resume Highlights */}
  <motion.div className="space-y-6 mt-8 lg:mt-0">
    {/* Highlights and preview */}
  </motion.div>
</div>
```

### Responsive Classes
- `lg:grid-cols-2`: 2 columns on large screens
- `grid-cols-2`: 2 columns for highlights grid
- `text-xs sm:text-sm`: Responsive text sizing
- `p-4 sm:p-6`: Responsive padding

## Customization Options

### Updating Resume Highlights
```javascript
const resumeHighlights = [
  // ... existing highlights
  {
    icon: NewIcon,
    title: 'New Achievement',
    description: 'Description of new achievement',
    color: 'from-red-500 to-pink-500'
  }
];
```

### Modifying Resume Sections
```javascript
const resumeSections = [
  // ... existing sections
  {
    title: 'New Section',
    content: 'Content for new section with\nmultiple lines if needed'
  }
];
```

### Changing Resume File
```javascript
const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/new-resume-file.pdf'; // Update file path
  link.download = 'New_Resume_Name.pdf'; // Update download name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

### Updating Preview Link
```javascript
onClick={() => window.open('/new-resume-file.pdf', '_blank')}
```

## Performance Considerations

- **File Size**: Ensure resume PDF is optimized for web
- **Animation Performance**: Uses transform and opacity for smooth animations
- **Viewport Detection**: Only animates when section is in view
- **Memory Management**: Proper cleanup of event listeners

## Accessibility Features

- **Semantic HTML**: Uses proper heading hierarchy
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Proper focus handling for buttons

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Framer Motion requires modern browser with good performance
- File download API support

## Troubleshooting

### Common Issues
1. **Resume not downloading**: Check file path and file existence
2. **Preview not opening**: Verify file path and browser popup settings
3. **Animations not triggering**: Ensure section is properly in viewport
4. **Layout breaking on mobile**: Check responsive classes

### Debug Tips
- Use browser dev tools to inspect element classes
- Check console for JavaScript errors
- Test on different screen sizes
- Verify resume file exists in public folder
- Test download functionality in different browsers
