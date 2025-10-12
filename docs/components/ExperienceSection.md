# Experience Section Component Documentation

## Overview
The `ExperienceSection` component displays professional experience in a timeline format. It features alternating left-right layout, detailed job descriptions, achievements, and technologies used for each position.

## File Location
`src/components/ExperienceSection.jsx`

## Dependencies
- React (useRef)
- Framer Motion (motion, useInView)
- Lucide React (MapPin, Calendar, Award, CheckCircle icons)

## Key Features

### 1. Timeline Layout
- **Alternating Design**: Left-right alternating layout for desktop
- **Timeline Line**: Vertical line connecting all experience points
- **Timeline Nodes**: Animated dots on the timeline
- **Current Role Indicator**: Pulsing animation for current position

### 2. Experience Cards
- **Detailed Information**: Job title, company, location, duration
- **Achievement Lists**: Bullet-pointed key achievements
- **Technology Tags**: Visual display of technologies used
- **Status Badges**: Employment type and current role indicators

### 3. Summary Statistics
- **Experience Metrics**: Years of experience, projects completed
- **Technology Count**: Number of technologies mastered
- **Visual Cards**: Animated statistics display

## State Management

```javascript
const ref = useRef(null);
const isInView = useInView(ref, { once: true });
```

### State Variables
- `ref`: Reference to the section element
- `isInView`: Boolean indicating if section is visible in viewport

## Experience Data Structure

```javascript
const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Key Software Services Private Limited",
    location: "Kurukshetra, Haryana, India",
    period: "Mar 2025 - Present",
    duration: "7 months",
    type: "Full-time",
    description: "Working on end-to-end software solutions using Node.js, MySQL, Flutter, and React with modern tools and frameworks.",
    achievements: [
      "Developed scalable APIs using Node.js with JWT authentication",
      "Integrated MySQL database for optimized data management",
      "Built and deployed Flutter apps with Bloc state management",
      "Worked on cross-platform solutions with React and Flutter",
      "Utilized tools like Postman, XAMPP, and Mailer for testing and integration",
    ],
    technologies: [
      "Node.js", "MySQL", "Flutter", "React", "JWT", "Mailer", "Postman", "XAMPP"
    ],
    currentRole: true,
  },
  // ... more experiences
];
```

### Experience Object Properties
- `id`: Unique identifier
- `title`: Job title/position
- `company`: Company name
- `location`: Work location
- `period`: Employment period
- `duration`: Duration of employment
- `type`: Employment type (Full-time, Training, etc.)
- `description`: Job description
- `achievements`: Array of key achievements
- `technologies`: Array of technologies used
- `currentRole`: Boolean indicating if this is the current role

## Animation System

### Container Variants
```javascript
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
```

### Item Variants
```javascript
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
```

## Timeline Structure

### Timeline Line
```javascript
<div className="relative">
  {/* Timeline Line */}
  <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-1/2" />
  
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    className="space-y-12"
  >
    {/* Experience items */}
  </motion.div>
</div>
```

### Timeline Node
```javascript
{/* Timeline Node */}
<div className="absolute left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform -translate-x-1/2 z-10 shadow-lg">
  {experience.currentRole && (
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping" />
  )}
</div>
```

## Experience Card Layout

### Card Container
```javascript
<motion.div
  whileHover={{ scale: 1.02 }}
  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
    index % 2 === 0
      ? "md:mr-auto md:pr-8"
      : "md:ml-auto md:pl-8"
  }`}
>
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
    {/* Card content */}
  </div>
</motion.div>
```

### Card Header
```javascript
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
    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(experience.type)}`}>
      {experience.type}
    </span>
    {experience.currentRole && (
      <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-semibold rounded-full">
        Current Role
      </span>
    )}
  </div>
</div>
```

## Meta Information Display

```javascript
<div className="flex flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
  <div className="flex items-center gap-1">
    <MapPin size={12} className="sm:w-[14px] sm:h-[14px]" />
    <span className="truncate">{experience.location}</span>
  </div>
  <div className="flex items-center gap-1">
    <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
    <span className="truncate">{experience.period}</span>
  </div>
  <div className="flex items-center gap-1">
    <Award size={12} className="sm:w-[14px] sm:h-[14px]" />
    <span className="truncate">{experience.duration}</span>
  </div>
</div>
```

## Achievement Lists

```javascript
<div className="mb-3 sm:mb-4">
  <h4 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 flex items-center gap-2">
    <CheckCircle size={14} className="sm:w-4 sm:h-4 text-green-500" />
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
```

## Technology Tags

```javascript
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
```

## Type Color System

```javascript
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
```

## Summary Statistics

```javascript
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
    {/* More statistics */}
  </motion.div>
</motion.div>
```

## Responsive Design

### Alternating Layout
```javascript
<motion.div
  className={`relative flex items-center ${
    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
  } flex-col md:justify-between`}
>
  {/* Content */}
</motion.div>
```

### Responsive Classes
- `md:flex-row`: Horizontal layout on medium screens
- `md:flex-row-reverse`: Reverse layout for alternating effect
- `sm:grid-cols-3`: 3 columns on small screens
- `text-xs sm:text-sm`: Responsive text sizing

## Customization Options

### Adding New Experiences
```javascript
const experiences = [
  // ... existing experiences
  {
    id: 3,
    title: "New Position",
    company: "New Company",
    location: "City, Country",
    period: "Jan 2024 - Dec 2024",
    duration: "1 year",
    type: "Contract",
    description: "Description of new position",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ],
    technologies: ["React", "Node.js", "MongoDB"],
    currentRole: false,
  }
];
```

### Adding New Employment Types
```javascript
const getTypeColor = (type) => {
  switch (type) {
    case "Full-time":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    case "Training":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
    case "Contract":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
    case "Freelance":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
  }
};
```

### Modifying Statistics
```javascript
const statistics = [
  {
    value: "2+",
    label: "Years Experience",
    color: "gradient-text"
  },
  {
    value: "15+",
    label: "Projects Completed",
    color: "gradient-text"
  },
  {
    value: "12+",
    label: "Technologies Mastered",
    color: "gradient-text"
  }
];
```

## Performance Considerations

- **Animation Performance**: Uses transform and opacity for smooth animations
- **Viewport Detection**: Only animates when section is in view
- **Memory Management**: Proper cleanup of event listeners
- **Image Optimization**: Any images should be optimized for web

## Accessibility Features

- **Semantic HTML**: Uses proper heading hierarchy
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Proper focus handling for interactive elements

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Framer Motion requires modern browser with good performance
- Intersection Observer API for viewport detection

## Troubleshooting

### Common Issues
1. **Timeline not displaying**: Check CSS classes and layout structure
2. **Animations not triggering**: Ensure section is properly in viewport
3. **Layout breaking on mobile**: Check responsive classes
4. **Text overflow**: Verify text content fits within containers

### Debug Tips
- Use browser dev tools to inspect element classes
- Check console for JavaScript errors
- Test on different screen sizes
- Verify all experience data is properly formatted
- Test alternating layout on different screen sizes
