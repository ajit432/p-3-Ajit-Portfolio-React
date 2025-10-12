# Portfolio Website - Complete Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture & Flow](#architecture--flow)
3. [Component Structure](#component-structure)
4. [API Documentation](#api-documentation)
5. [Configuration Guide](#configuration-guide)
6. [Development Guide](#development-guide)
7. [Deployment Guide](#deployment-guide)
8. [Troubleshooting](#troubleshooting)

## Project Overview

### Purpose
This is a modern, responsive portfolio website built with React and Tailwind CSS, showcasing the professional profile, skills, projects, and experience of Ajit Kumar Behera, a Software Developer specializing in mobile and web applications.

### Key Features
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark/Light Mode**: Toggle between themes with persistent preferences
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Elements**: Hover effects, scroll animations, and dynamic content
- **Modern UI/UX**: Clean, professional design with gradient accents
- **Performance Optimized**: Fast loading with optimized assets and code splitting

### Technology Stack
- **Frontend**: React 19.1.1, Vite 7.1.2
- **Styling**: Tailwind CSS 4.0.0, Custom CSS
- **Animations**: Framer Motion 12.23.12
- **Icons**: Lucide React 0.543.0, React Icons 5.5.0
- **Build Tool**: Vite with React plugin
- **Linting**: ESLint 9.33.0 with React hooks plugin

## Architecture & Flow

### Application Flow
```
1. App.jsx (Main Entry Point)
   ├── Header.jsx (Navigation & Theme Toggle)
   ├── HeroSection.jsx (Landing & Introduction)
   ├── AboutSection.jsx (Profile & Background)
   ├── ProjectsSection.jsx (Portfolio Showcase)
   ├── ExperienceSection.jsx (Professional Timeline)
   ├── SkillsSection.jsx (Technical Expertise)
   ├── ResumeSection.jsx (CV Download & Highlights)
   ├── ContactSection.jsx (Contact Form & Info)
   └── Footer.jsx (Links & Additional Info)
```

### Data Flow
```
User Interaction → Component State → Framer Motion Animation → UI Update
                ↓
            Local Storage (Theme)
                ↓
            Smooth Scroll Navigation
```

### State Management
- **Local State**: React useState for component-specific state
- **Theme State**: localStorage for persistent theme preference
- **Scroll State**: Custom scroll progress tracking
- **Form State**: Controlled form inputs with validation

## Component Structure

### Core Components

#### 1. Header Component
- **Purpose**: Navigation, theme toggle, mobile menu
- **Key Features**: Smooth scrolling, dark mode, responsive design
- **State**: isScrolled, darkMode, isMobileMenuOpen
- **Dependencies**: Framer Motion, Lucide React

#### 2. Hero Section
- **Purpose**: Landing page with dynamic role rotation
- **Key Features**: Animated profile image, rotating roles, social links
- **State**: currentRole
- **Dependencies**: Framer Motion, Lucide React

#### 3. About Section
- **Purpose**: Professional background and achievements
- **Key Features**: Two-column layout, achievement cards, journey timeline
- **State**: isInView (viewport detection)
- **Dependencies**: Framer Motion, Lucide React

#### 4. Projects Section
- **Purpose**: Portfolio showcase with project details
- **Key Features**: Project cards, technology tags, status badges
- **State**: isInView (viewport detection)
- **Dependencies**: Framer Motion, Lucide React

#### 5. Experience Section
- **Purpose**: Professional timeline with achievements
- **Key Features**: Alternating layout, timeline visualization, technology tags
- **State**: isInView (viewport detection)
- **Dependencies**: Framer Motion, Lucide React

#### 6. Skills Section
- **Purpose**: Technical skills with animated progress bars
- **Key Features**: Skill categories, progress animations, technology tags
- **State**: isInView, animatedSkills
- **Dependencies**: Framer Motion, Lucide React

#### 7. Resume Section
- **Purpose**: CV download and professional highlights
- **Key Features**: PDF download, resume preview, achievement cards
- **State**: isInView, uploadedFile
- **Dependencies**: Framer Motion, Lucide React

#### 8. Contact Section
- **Purpose**: Contact form and information display
- **Key Features**: Contact form, social links, availability status
- **State**: formData, isSubmitting, submitStatus
- **Dependencies**: Framer Motion, Lucide React

#### 9. Footer Component
- **Purpose**: Additional navigation and information
- **Key Features**: Multi-column layout, social links, newsletter signup
- **State**: currentYear
- **Dependencies**: Framer Motion, Lucide React

## API Documentation

### Internal APIs

#### Theme Management API
```javascript
// Theme Toggle Function
const toggleTheme = () => {
  setDarkMode(!darkMode);
  localStorage.setItem('darkMode', JSON.stringify(!darkMode));
};

// Theme Application
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);
```

#### Scroll Management API
```javascript
// Scroll Progress Tracking
const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);
};

// Smooth Scroll Navigation
const scrollToSection = (href) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

#### Form Handling API
```javascript
// Form Input Handler
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

// Form Submission Handler
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  // Simulate form submission
  setTimeout(() => {
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  }, 2000);
};
```

### External APIs

#### Social Media Links
- **GitHub**: https://github.com/nitishkumar
- **LinkedIn**: https://linkedin.com/in/nitishkumar
- **Twitter**: https://twitter.com/nitishkumar
- **Email**: mailto:nitish@example.com

#### Resume Download API
```javascript
// Resume Download Function
const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Ajit Kumar Behera.pdf';
  link.download = 'Ajit_Kumar_Behera_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

## Configuration Guide

### Environment Setup
```bash
# Prerequisites
Node.js 18+ or 20+
npm (included with Node.js)

# Installation
npm install

# Development
npm run dev

# Production Build
npm run build

# Linting
npm run lint
```

### Environment Variables
```env
# Development
NODE_ENV=development
VITE_APP_TITLE=Portfolio Website

# Production
NODE_ENV=production
VITE_APP_TITLE=Ajit Kumar Behera - Portfolio
```

### Build Configuration
- **Output Directory**: `dist/`
- **Source Maps**: Enabled in development
- **Minification**: Terser for production
- **Code Splitting**: Automatic with Vite

## Development Guide

### Project Structure
```
src/
├── components/
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── ProjectsSection.jsx
│   ├── ExperienceSection.jsx
│   ├── SkillsSection.jsx
│   ├── ResumeSection.jsx
│   ├── ContactSection.jsx
│   └── Footer.jsx
├── assets/
│   └── react.svg
├── App.jsx
├── main.jsx
└── index.css
```

### Adding New Components
1. Create component file in `src/components/`
2. Import and use in `App.jsx`
3. Add to navigation if needed
4. Update documentation

### Styling Guidelines
- Use Tailwind CSS classes for styling
- Create custom CSS classes in `index.css` for complex styles
- Follow mobile-first responsive design
- Use CSS custom properties for theming

### Animation Guidelines
- Use Framer Motion for animations
- Keep animations smooth and performant
- Use `transform` and `opacity` for best performance
- Implement reduced motion support

## Deployment Guide

### Build Process
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview build locally
npm run preview
```

### Deployment Options

#### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

#### Vercel
1. Import GitHub repository
2. Set framework: Vite
3. Set build command: `npm run build`
4. Set output directory: `dist`

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

### Environment Configuration
- Set environment variables in deployment platform
- Configure custom domain if needed
- Set up SSL certificate
- Configure redirects for SPA routing

## Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run lint
```

#### Animation Issues
- Check Framer Motion installation
- Verify animation props
- Test on different browsers
- Check for CSS conflicts

#### Styling Issues
- Verify Tailwind CSS compilation
- Check for CSS specificity conflicts
- Test responsive breakpoints
- Validate CSS syntax

#### Performance Issues
- Optimize images
- Check bundle size
- Enable gzip compression
- Use CDN for assets

### Debug Tools
- Browser DevTools
- React DevTools
- Lighthouse for performance
- WebPageTest for speed

### Support
- Check component documentation
- Review configuration files
- Test on different devices
- Validate HTML/CSS

## Contributing

### Code Style
- Follow ESLint rules
- Use consistent naming conventions
- Write descriptive comments
- Keep components focused

### Git Workflow
1. Create feature branch
2. Make changes
3. Test thoroughly
4. Commit with descriptive messages
5. Create pull request

### Documentation
- Update component docs for changes
- Add examples for new features
- Keep README current
- Document breaking changes

## License

This project is for portfolio purposes. All rights reserved.

## Contact

For questions or support:
- Email: ajitkumarbehera875@gmail.com
- GitHub: https://github.com/nitishkumar
- LinkedIn: https://linkedin.com/in/nitishkumar
