# Development Guide

## Table of Contents
1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Development Workflow](#development-workflow)
4. [Code Standards](#code-standards)
5. [Component Development](#component-development)
6. [Styling Guidelines](#styling-guidelines)
7. [Animation Guidelines](#animation-guidelines)
8. [Testing Guidelines](#testing-guidelines)
9. [Performance Guidelines](#performance-guidelines)
10. [Debugging Guide](#debugging-guide)

## Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm (included with Node.js)
- Git
- Code editor (VS Code recommended)

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Server
- **URL**: http://localhost:5173
- **Hot Reload**: Enabled
- **Source Maps**: Enabled
- **HMR**: Fast refresh for React components

## Project Structure

```
portfolio-website/
├── public/
│   ├── Ajit Kumar Behera.pdf
│   ├── Ajit photo New.jpg
│   ├── shared image.jpg
│   └── wordpress-4.pdf
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ResumeSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── docs/
│   ├── components/
│   ├── configuration/
│   ├── README.md
│   ├── API_DOCUMENTATION.md
│   └── DEVELOPMENT_GUIDE.md
├── dist/
├── node_modules/
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── postcss.config.js
└── README.md
```

## Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
# ... code changes ...

# Test changes
npm run dev
npm run lint

# Commit changes
git add .
git commit -m "feat: add new feature"

# Push branch
git push origin feature/new-feature
```

### 2. Bug Fixes
```bash
# Create bugfix branch
git checkout -b bugfix/fix-issue

# Fix the issue
# ... code changes ...

# Test fix
npm run dev
npm run lint

# Commit fix
git add .
git commit -m "fix: resolve issue description"

# Push branch
git push origin bugfix/fix-issue
```

### 3. Code Review Process
1. Create pull request
2. Request review from team members
3. Address feedback
4. Merge after approval

## Code Standards

### JavaScript/JSX Standards

#### Naming Conventions
```javascript
// Components: PascalCase
const Header = () => {};

// Variables and functions: camelCase
const userName = 'John';
const handleClick = () => {};

// Constants: UPPER_SNAKE_CASE
const MAX_ITEMS = 10;

// CSS classes: kebab-case
className="header-container"
```

#### Component Structure
```javascript
// 1. Imports
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';

// 2. Component definition
const ComponentName = () => {
  // 3. State declarations
  const [state, setState] = useState(initialValue);
  
  // 4. Effect hooks
  useEffect(() => {
    // Effect logic
  }, [dependencies]);
  
  // 5. Event handlers
  const handleEvent = () => {
    // Handler logic
  };
  
  // 6. Render
  return (
    <div className="component-container">
      {/* JSX content */}
    </div>
  );
};

// 7. Export
export default ComponentName;
```

#### Function Declarations
```javascript
// Prefer function declarations for components
function ComponentName() {
  return <div>Content</div>;
}

// Use arrow functions for event handlers
const handleClick = () => {
  // Handler logic
};

// Use arrow functions for utility functions
const utilityFunction = (param) => {
  // Utility logic
};
```

#### Destructuring
```javascript
// Object destructuring
const { name, age, email } = user;

// Array destructuring
const [first, second, third] = items;

// Props destructuring
const Component = ({ prop1, prop2, prop3 }) => {
  // Component logic
};
```

### CSS Standards

#### Tailwind CSS Classes
```javascript
// Use Tailwind utility classes
<div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
  Content
</div>

// Group related classes
<div className="
  flex items-center justify-between
  p-4 bg-white dark:bg-gray-800
  rounded-lg shadow-md hover:shadow-lg
  transition-all duration-300
">
  Content
</div>
```

#### Custom CSS Classes
```css
/* Use descriptive class names */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Use BEM methodology for complex components */
.card {
  /* Base styles */
}

.card__header {
  /* Header styles */
}

.card__content {
  /* Content styles */
}

.card--featured {
  /* Featured variant */
}
```

#### Responsive Design
```javascript
// Mobile-first approach
<div className="
  text-sm sm:text-base md:text-lg lg:text-xl
  p-2 sm:p-4 md:p-6 lg:p-8
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
  Content
</div>
```

## Component Development

### Component Creation Checklist
- [ ] Create component file in `src/components/`
- [ ] Import necessary dependencies
- [ ] Define component structure
- [ ] Add PropTypes or TypeScript types
- [ ] Implement responsive design
- [ ] Add animations with Framer Motion
- [ ] Test on different screen sizes
- [ ] Add accessibility features
- [ ] Write documentation
- [ ] Update main App.jsx

### Component Template
```javascript
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Icon } from 'lucide-react';

const ComponentName = () => {
  // State
  const [state, setState] = useState(initialValue);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Effects
  useEffect(() => {
    // Effect logic
  }, [dependencies]);

  // Handlers
  const handleEvent = () => {
    // Handler logic
  };

  // Animation variants
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
    <section ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Component content */}
        </motion.div>
      </div>
    </section>
  );
};

export default ComponentName;
```

### Component Best Practices

#### Single Responsibility
```javascript
// Good: Single responsibility
const ContactForm = () => {
  // Only handles contact form
};

const ContactInfo = () => {
  // Only displays contact information
};

// Bad: Multiple responsibilities
const ContactSection = () => {
  // Handles both form and info display
};
```

#### Reusability
```javascript
// Good: Reusable component
const Button = ({ variant, size, children, onClick }) => {
  const baseClasses = "font-semibold rounded-lg transition-all duration-300";
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

#### Props Validation
```javascript
import PropTypes from 'prop-types';

const Component = ({ title, description, isVisible }) => {
  // Component logic
};

Component.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  isVisible: PropTypes.bool
};

Component.defaultProps = {
  description: '',
  isVisible: true
};
```

## Styling Guidelines

### Tailwind CSS Best Practices

#### Utility Classes
```javascript
// Good: Logical grouping
<div className="
  flex items-center justify-between
  p-4 bg-white dark:bg-gray-800
  rounded-lg shadow-md hover:shadow-lg
  transition-all duration-300
">
  Content
</div>

// Bad: Random order
<div className="bg-white p-4 flex shadow-md rounded-lg items-center justify-between dark:bg-gray-800 hover:shadow-lg transition-all duration-300">
  Content
</div>
```

#### Responsive Design
```javascript
// Mobile-first approach
<div className="
  text-sm sm:text-base md:text-lg lg:text-xl
  p-2 sm:p-4 md:p-6 lg:p-8
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
  Content
</div>
```

#### Dark Mode
```javascript
// Always provide dark mode variants
<div className="
  bg-white dark:bg-gray-800
  text-gray-900 dark:text-white
  border-gray-200 dark:border-gray-700
">
  Content
</div>
```

### Custom CSS Guidelines

#### CSS Custom Properties
```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --spacing-unit: 1rem;
  --border-radius: 0.5rem;
}

.dark {
  --color-primary: #60a5fa;
  --color-secondary: #a78bfa;
}
```

#### Component-Specific Styles
```css
/* Use descriptive class names */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Use BEM methodology */
.card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card__header {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.card__content {
  padding: 1rem;
}

.card--featured {
  border: 2px solid #3b82f6;
}
```

## Animation Guidelines

### Framer Motion Best Practices

#### Animation Variants
```javascript
// Define reusable animation variants
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
```

#### Performance Optimization
```javascript
// Use transform and opacity for smooth animations
const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

// Avoid animating layout properties
// Bad: animating width, height, top, left
// Good: animating transform, opacity
```

#### Viewport Detection
```javascript
// Only animate when element is in viewport
const ref = useRef(null);
const isInView = useInView(ref, { once: true });

<motion.div
  ref={ref}
  variants={variants}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
>
  Content
</motion.div>
```

#### Hover Animations
```javascript
// Use whileHover for interactive animations
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="transition-colors duration-300"
>
  Button
</motion.button>
```

### CSS Animations
```css
/* Use CSS for simple animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

/* Use CSS for continuous animations */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spin {
  animation: spin 1s linear infinite;
}
```

## Testing Guidelines

### Unit Testing
```javascript
// Test component rendering
import { render, screen } from '@testing-library/react';
import Component from './Component';

test('renders component', () => {
  render(<Component />);
  expect(screen.getByText('Expected Text')).toBeInTheDocument();
});

// Test user interactions
import { fireEvent } from '@testing-library/react';

test('handles click event', () => {
  const handleClick = jest.fn();
  render(<Component onClick={handleClick} />);
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Integration Testing
```javascript
// Test form submission
test('submits form with valid data', async () => {
  render(<ContactForm />);
  
  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: 'John Doe' }
  });
  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'john@example.com' }
  });
  
  fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
  
  await waitFor(() => {
    expect(screen.getByText('Message sent!')).toBeInTheDocument();
  });
});
```

### E2E Testing
```javascript
// Test user journey
describe('Portfolio Website', () => {
  it('should navigate through all sections', () => {
    cy.visit('/');
    
    // Test navigation
    cy.get('[data-testid="nav-about"]').click();
    cy.url().should('include', '#about');
    
    // Test form submission
    cy.get('[data-testid="contact-form"]').within(() => {
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.get('button[type="submit"]').click();
    });
    
    cy.get('[data-testid="success-message"]').should('be.visible');
  });
});
```

## Performance Guidelines

### Code Splitting
```javascript
// Lazy load components
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Image Optimization
```javascript
// Use optimized images
<img
  src="/optimized-image.jpg"
  alt="Description"
  loading="lazy"
  className="w-full h-auto"
/>

// Use WebP format when possible
<picture>
  <source srcSet="/image.webp" type="image/webp" />
  <img src="/image.jpg" alt="Description" />
</picture>
```

### Bundle Optimization
```javascript
// Use dynamic imports for large libraries
const loadChart = async () => {
  const { Chart } = await import('chart.js');
  return Chart;
};

// Use tree shaking
import { specificFunction } from 'large-library';
// Instead of: import * as library from 'large-library';
```

### Memory Management
```javascript
// Clean up event listeners
useEffect(() => {
  const handleResize = () => {
    // Handle resize
  };
  
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

// Clean up intervals
useEffect(() => {
  const interval = setInterval(() => {
    // Interval logic
  }, 1000);
  
  return () => clearInterval(interval);
}, []);
```

## Debugging Guide

### Browser DevTools
1. **Elements Tab**: Inspect DOM and CSS
2. **Console Tab**: View errors and logs
3. **Network Tab**: Monitor network requests
4. **Performance Tab**: Analyze performance
5. **Lighthouse Tab**: Audit accessibility and performance

### React DevTools
1. **Components Tab**: Inspect component tree
2. **Profiler Tab**: Analyze component performance
3. **Props Tab**: View component props
4. **State Tab**: Inspect component state

### Common Debugging Techniques
```javascript
// Console logging
console.log('Debug info:', data);
console.table(data); // For arrays/objects
console.group('Group name'); // Group related logs
console.groupEnd();

// Breakpoints
debugger; // Pause execution

// Error boundaries
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

### Performance Debugging
```javascript
// Measure component render time
const startTime = performance.now();
// Component render
const endTime = performance.now();
console.log(`Render time: ${endTime - startTime}ms`);

// Monitor re-renders
useEffect(() => {
  console.log('Component re-rendered');
});

// Use React.memo to prevent unnecessary re-renders
const MemoizedComponent = React.memo(Component);
```

### Common Issues and Solutions

#### Styling Issues
- Check CSS specificity
- Verify Tailwind classes
- Test responsive breakpoints
- Validate CSS syntax

#### Animation Issues
- Check Framer Motion installation
- Verify animation props
- Test on different browsers
- Check for CSS conflicts

#### Performance Issues
- Optimize images
- Check bundle size
- Enable gzip compression
- Use CDN for assets

#### Build Issues
- Clear cache and reinstall
- Check for TypeScript errors
- Verify all dependencies
- Check build configuration
