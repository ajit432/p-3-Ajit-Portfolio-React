# Hero Section Component Documentation

## Overview
The `HeroSection` component is the main landing section of the portfolio, featuring an animated introduction, dynamic role rotation, profile image, and call-to-action buttons. It serves as the first impression for visitors.

## File Location
`src/components/HeroSection.jsx`

## Dependencies
- React (useState, useEffect)
- Framer Motion (motion, animations)
- Lucide React (ChevronDown, Download, Github, Linkedin, Mail icons)

## Key Features

### 1. Dynamic Role Rotation
- **Animated Text**: Rotates through different professional roles
- **Smooth Transitions**: Fade in/out animations between roles
- **Customizable Roles**: Easy to modify the roles array

### 2. Profile Image Animation
- **Scale Animation**: Profile image scales and rotates on load
- **Gradient Border**: Animated gradient border around profile image
- **Responsive Sizing**: Different sizes for different screen sizes

### 3. Floating Background Elements
- **Animated Dots**: 20 floating dots with random positions and animations
- **Gradient Background**: Animated gradient background
- **Grid Pattern**: Subtle grid pattern overlay

### 4. Social Links
- **Interactive Icons**: Hover animations for social media links
- **External Links**: Opens in new tabs with proper security attributes
- **Responsive Layout**: Adapts to different screen sizes

## State Management

```javascript
const [currentRole, setCurrentRole] = useState(0);
const roles = [
  'Software Developer',
  'Flutter Developer',
  'Node.js Developer',
  'Full Stack Developer',
  'Mobile App Developer',
  'Web Developer',
  'Python Developer',
  'React Developer',
  'Database Engineer'
];
```

### State Variables
- `currentRole`: Index of currently displayed role
- `roles`: Array of professional roles to cycle through

## Role Rotation System

### Automatic Rotation
```javascript
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentRole((prev) => (prev + 1) % roles.length);
  }, 3000);
  return () => clearInterval(interval);
}, [roles.length]);
```
- Changes role every 3 seconds
- Loops back to first role after last one
- Cleans up interval on component unmount

### Role Display Animation
```javascript
<motion.span
  key={currentRole}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5 }}
  className="gradient-text font-bold text-center"
>
  {roles[currentRole]}
</motion.span>
```

## Social Links Configuration

```javascript
const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/ajit432',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ajit-kumar-behera-6842a7213/',
    label: 'LinkedIn'
  },
  {
    icon: Mail,
    href: 'mailto:ajitkumarbehera875@gmail.com',
    label: 'Email'
  }
];
```

## Floating Elements Animation

```javascript
{[...Array(20)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.2, 0.8, 0.2],
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      delay: Math.random() * 2,
    }}
  />
))}
```

## Call-to-Action Buttons

### Get In Touch Button
```javascript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
  className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
>
  Get In Touch
  <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
</motion.button>
```

### Download Resume Button
```javascript
<motion.a
  href="/Ajit Kumar Behera.pdf"
  download="Ajit_Kumar_Resume.pdf"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
>
  Download Resume
  <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
</motion.a>
```

## Scroll Indicator

```javascript
<motion.button
  onClick={scrollToAbout}
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
  className="p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
>
  <ChevronDown size={20} className="sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" />
</motion.button>
```

## Responsive Design

### Breakpoint Classes
- `xs:` - Extra small screens (475px+)
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)

### Responsive Sizing
```javascript
className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
```

## Animation Variants

### Container Animations
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

### Item Animations
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

## Customization Options

### Adding New Roles
```javascript
const roles = [
  // ... existing roles
  'New Role Title',
];
```

### Modifying Animation Timing
```javascript
// Change role rotation speed
const interval = setInterval(() => {
  setCurrentRole((prev) => (prev + 1) % roles.length);
}, 5000); // Change from 3000 to 5000ms
```

### Updating Social Links
```javascript
const socialLinks = [
  // ... existing links
  {
    icon: Twitter,
    href: 'https://twitter.com/username',
    label: 'Twitter'
  }
];
```

### Changing Profile Image
```javascript
<img 
  src="/new-profile-image.jpg" 
  alt="Your Name - Profile" 
  className="w-full h-full rounded-full object-cover shadow-inner"
/>
```

## Performance Considerations

- **Image Optimization**: Profile image should be optimized for web
- **Animation Performance**: Uses transform and opacity for smooth animations
- **Memory Management**: Cleans up intervals on component unmount
- **Lazy Loading**: Consider lazy loading for background elements

## Accessibility Features

- **Alt Text**: Profile image has descriptive alt text
- **ARIA Labels**: Social links have proper labels
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Management**: Proper focus handling for buttons

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Framer Motion requires modern browser with good performance
- Local Storage API for theme persistence

## Troubleshooting

### Common Issues
1. **Profile image not loading**: Check image path and file existence
2. **Animations not working**: Ensure Framer Motion is properly installed
3. **Role rotation stopping**: Check for JavaScript errors in console
4. **Responsive issues**: Verify Tailwind CSS classes are correct

### Debug Tips
- Use browser dev tools to inspect element classes
- Check console for JavaScript errors
- Verify all dependencies are installed
- Test on different screen sizes
