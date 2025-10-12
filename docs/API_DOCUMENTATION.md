# API Documentation

## Overview
This document provides comprehensive API documentation for the Portfolio Website, including internal APIs, external integrations, and data structures.

## Table of Contents
1. [Internal APIs](#internal-apis)
2. [External APIs](#external-apis)
3. [Data Structures](#data-structures)
4. [Event Handlers](#event-handlers)
5. [Utility Functions](#utility-functions)
6. [Configuration APIs](#configuration-apis)

## Internal APIs

### Theme Management API

#### Theme Toggle
```javascript
const toggleTheme = () => {
  setDarkMode(!darkMode);
  localStorage.setItem('darkMode', JSON.stringify(!darkMode));
};
```

**Purpose**: Toggles between light and dark themes
**Parameters**: None
**Returns**: void
**Side Effects**: Updates theme state and localStorage

#### Theme Application
```javascript
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('darkMode', JSON.stringify(darkMode));
}, [darkMode]);
```

**Purpose**: Applies theme to document element
**Parameters**: darkMode (boolean)
**Returns**: void
**Side Effects**: Updates document class and localStorage

#### Theme Initialization
```javascript
const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem('darkMode');
  return savedTheme ? JSON.parse(savedTheme) : false;
});
```

**Purpose**: Initializes theme from localStorage
**Parameters**: None
**Returns**: boolean
**Side Effects**: Reads from localStorage

### Scroll Management API

#### Scroll Progress Tracking
```javascript
const updateScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);
};
```

**Purpose**: Tracks scroll progress for visual indicator
**Parameters**: None
**Returns**: void
**Side Effects**: Updates CSS custom property

#### Smooth Scroll Navigation
```javascript
const scrollToSection = (href) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  setIsMobileMenuOpen(false);
};
```

**Purpose**: Smoothly scrolls to target section
**Parameters**: href (string) - CSS selector for target element
**Returns**: void
**Side Effects**: Scrolls to element, closes mobile menu

#### Scroll to Top
```javascript
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

**Purpose**: Smoothly scrolls to top of page
**Parameters**: None
**Returns**: void
**Side Effects**: Scrolls to top

### Form Handling API

#### Form Input Handler
```javascript
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};
```

**Purpose**: Handles form input changes
**Parameters**: e (Event) - Input change event
**Returns**: void
**Side Effects**: Updates form data state

#### Form Submission Handler
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  setTimeout(() => {
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitStatus(null), 3000);
  }, 2000);
};
```

**Purpose**: Handles form submission
**Parameters**: e (Event) - Form submit event
**Returns**: void
**Side Effects**: Updates submission state, resets form

#### File Upload Handler
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

**Purpose**: Handles file upload for resume
**Parameters**: event (Event) - File input change event
**Returns**: void
**Side Effects**: Updates uploaded file state

### Animation Management API

#### Viewport Detection
```javascript
const ref = useRef(null);
const isInView = useInView(ref, { once: true });
```

**Purpose**: Detects when element enters viewport
**Parameters**: ref (RefObject) - Reference to element
**Returns**: boolean - Whether element is in viewport
**Side Effects**: Triggers animations when element becomes visible

#### Animation Variants
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

**Purpose**: Defines animation variants for Framer Motion
**Parameters**: None
**Returns**: Object - Animation configuration
**Side Effects**: Controls animation behavior

## External APIs

### Social Media Links

#### GitHub
```javascript
{
  name: 'GitHub',
  icon: Github,
  href: 'https://github.com/nitishkumar',
  color: 'hover:bg-gray-700',
  followers: '250+ followers'
}
```

#### LinkedIn
```javascript
{
  name: 'LinkedIn',
  icon: Linkedin,
  href: 'https://linkedin.com/in/nitishkumar',
  color: 'hover:bg-blue-600',
  followers: '500+ connections'
}
```

#### Twitter
```javascript
{
  name: 'Twitter',
  icon: Twitter,
  href: 'https://twitter.com/nitishkumar',
  color: 'hover:bg-blue-400',
  followers: '150+ followers'
}
```

#### WhatsApp
```javascript
{
  name: 'WhatsApp',
  icon: MessageCircle,
  href: 'https://wa.me/919861500797',
  color: 'hover:bg-green-500',
  followers: 'Quick chat'
}
```

### Contact Information

#### Email
```javascript
{
  icon: Mail,
  label: 'Email',
  value: 'ajitkumarbehera875@gmail.com',
  href: 'mailto:ajitkumarbehera875@gmail.com',
  color: 'from-blue-500 to-cyan-500'
}
```

#### Phone
```javascript
{
  icon: Phone,
  label: 'Phone',
  value: '+91 9861500797',
  href: 'tel:+919861500797',
  color: 'from-green-500 to-emerald-500'
}
```

#### Location
```javascript
{
  icon: MapPin,
  label: 'Location',
  value: 'Bhubaneswar, Odisha, India',
  href: 'https://maps.google.com/?q=Bhubaneswar,Odisha,India',
  color: 'from-purple-500 to-violet-500'
}
```

### Resume Download API

#### Resume Download
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

**Purpose**: Downloads resume PDF
**Parameters**: None
**Returns**: void
**Side Effects**: Triggers file download

#### Resume Preview
```javascript
onClick={() => window.open('/Ajit Kumar Behera.pdf', '_blank')}
```

**Purpose**: Opens resume in new tab
**Parameters**: None
**Returns**: void
**Side Effects**: Opens new browser tab

## Data Structures

### Project Data Structure
```javascript
const projects = [
  {
    id: 1,
    title: 'Project Title',
    description: 'Project description',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Web Application',
    icon: Smartphone,
    image: '/api/placeholder/400/250',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3'
    ],
    github: 'https://github.com/username/project',
    demo: 'https://project-demo.com',
    status: 'Completed'
  }
];
```

### Experience Data Structure
```javascript
const experiences = [
  {
    id: 1,
    title: 'Job Title',
    company: 'Company Name',
    location: 'City, Country',
    period: 'Jan 2024 - Dec 2024',
    duration: '1 year',
    type: 'Full-time',
    description: 'Job description',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3'
    ],
    technologies: ['React', 'Node.js', 'MongoDB'],
    currentRole: false
  }
];
```

### Skills Data Structure
```javascript
const skillCategories = [
  {
    id: 1,
    title: 'Category Title',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      {
        name: 'Skill Name',
        level: 90,
        description: 'Skill description'
      }
    ]
  }
];
```

### Contact Form Data Structure
```javascript
const formData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};
```

## Event Handlers

### Click Handlers
```javascript
// Navigation click
onClick={() => scrollToSection(item.href)}

// Theme toggle
onClick={() => setDarkMode(!darkMode)}

// Mobile menu toggle
onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

// Form submission
onClick={handleSubmit}
```

### Hover Handlers
```javascript
// Framer Motion hover
whileHover={{ scale: 1.05 }}

// CSS hover classes
className="hover:bg-blue-500 hover:text-white"
```

### Focus Handlers
```javascript
// Input focus
whileFocus={{ scale: 1.02 }}

// Focus styles
className="focus:ring-2 focus:ring-blue-500 focus:border-transparent"
```

### Change Handlers
```javascript
// Input change
onChange={handleInputChange}

// File upload
onChange={handleFileUpload}
```

## Utility Functions

### Date Utilities
```javascript
const currentYear = new Date().getFullYear();
```

### String Utilities
```javascript
// Truncate text
className="truncate"

// Text formatting
className="whitespace-pre-line"
```

### Array Utilities
```javascript
// Map over arrays
{items.map((item, index) => (
  <Component key={index} {...item} />
))}

// Filter arrays
{items.filter(item => item.status === 'active')}
```

### Object Utilities
```javascript
// Object destructuring
const { name, value } = e.target;

// Object spread
setFormData(prev => ({
  ...prev,
  [name]: value
}));
```

## Configuration APIs

### Environment Variables
```javascript
// Access environment variables
const apiUrl = import.meta.env.VITE_API_URL;
const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;
```

### Local Storage API
```javascript
// Set item
localStorage.setItem('key', JSON.stringify(value));

// Get item
const value = JSON.parse(localStorage.getItem('key'));

// Remove item
localStorage.removeItem('key');
```

### CSS Custom Properties
```javascript
// Set CSS custom property
document.documentElement.style.setProperty('--scroll-progress', '50%');

// Use in CSS
width: var(--scroll-progress, 0%);
```

## Error Handling

### Form Validation
```javascript
// Required field validation
required

// Email validation
type="email"

// Custom validation
if (file && file.type === 'application/pdf') {
  // Valid file
} else {
  alert('Please upload a PDF file');
}
```

### Error States
```javascript
// Loading state
{isSubmitting ? 'Sending...' : 'Send Message'}

// Error state
{submitStatus === 'error' && <ErrorMessage />}

// Success state
{submitStatus === 'success' && <SuccessMessage />}
```

## Performance APIs

### Lazy Loading
```javascript
// Viewport detection for animations
const isInView = useInView(ref, { once: true });

// Conditional rendering
{isInView && <ExpensiveComponent />}
```

### Memoization
```javascript
// React.memo for components
export default React.memo(Component);

// useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return calculateExpensiveValue(data);
}, [data]);
```

### Code Splitting
```javascript
// Dynamic imports
const LazyComponent = lazy(() => import('./LazyComponent'));

// Suspense wrapper
<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

## Browser APIs

### Intersection Observer
```javascript
// Viewport detection
const isInView = useInView(ref, { once: true });
```

### Resize Observer
```javascript
// Responsive handling
useEffect(() => {
  const handleResize = () => {
    // Handle resize
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

### Geolocation API
```javascript
// Location services
navigator.geolocation.getCurrentPosition(
  (position) => {
    // Handle position
  },
  (error) => {
    // Handle error
  }
);
```

## Security Considerations

### XSS Prevention
```javascript
// Sanitize user input
const sanitizedInput = input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// Use textContent instead of innerHTML
element.textContent = userInput;
```

### CSRF Protection
```javascript
// Include CSRF token in forms
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
```

### Content Security Policy
```javascript
// Set CSP headers
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline';">
```

## Testing APIs

### Unit Testing
```javascript
// Test component rendering
render(<Component />);

// Test user interactions
fireEvent.click(getByText('Button'));

// Test state changes
expect(getByText('New Text')).toBeInTheDocument();
```

### Integration Testing
```javascript
// Test form submission
fireEvent.change(getByLabelText('Email'), { target: { value: 'test@example.com' } });
fireEvent.click(getByText('Submit'));
expect(getByText('Success')).toBeInTheDocument();
```

### E2E Testing
```javascript
// Test user journey
cy.visit('/');
cy.get('[data-testid="contact-form"]').should('be.visible');
cy.get('[data-testid="submit-button"]').click();
cy.get('[data-testid="success-message"]').should('be.visible');
```
