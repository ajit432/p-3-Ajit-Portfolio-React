# Header Component Documentation

## Overview
The `Header` component is a responsive navigation header that provides site navigation, theme switching, and mobile menu functionality. It's fixed at the top of the page and includes smooth scrolling navigation to different sections.

## File Location
`src/components/Header.jsx`

## Dependencies
- React (useState, useEffect)
- Framer Motion (motion, animations)
- Lucide React (Sun, Moon, Menu, X icons)

## Key Features

### 1. Responsive Navigation
- **Desktop Navigation**: Horizontal menu with navigation items
- **Mobile Navigation**: Collapsible hamburger menu
- **Smooth Scrolling**: Clicking navigation items smoothly scrolls to sections

### 2. Theme Management
- **Dark/Light Mode Toggle**: Button to switch between themes
- **Local Storage Persistence**: Theme preference is saved and restored
- **Dynamic Styling**: Header appearance changes based on theme

### 3. Scroll Effects
- **Background Blur**: Header gets backdrop blur when scrolled
- **Shadow Effect**: Adds shadow when scrolled past 50px
- **Transparent to Solid**: Background changes from transparent to solid

### 4. Mobile Menu
- **Hamburger Animation**: Menu icon rotates when opened
- **Click Outside to Close**: Menu closes when clicking outside
- **Smooth Animations**: Fade in/out animations for mobile menu

## State Management

```javascript
const [isScrolled, setIsScrolled] = useState(false);
const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem('darkMode');
  return savedTheme ? JSON.parse(savedTheme) : false;
});
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

### State Variables
- `isScrolled`: Tracks if user has scrolled past 50px
- `darkMode`: Manages theme state with localStorage persistence
- `isMobileMenuOpen`: Controls mobile menu visibility

## Navigation Items

```javascript
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];
```

## Key Functions

### scrollToSection(href)
```javascript
const scrollToSection = (href) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  setIsMobileMenuOpen(false);
};
```
- Smoothly scrolls to target section
- Closes mobile menu after navigation

### Theme Toggle
```javascript
const toggleTheme = () => {
  setDarkMode(!darkMode);
};
```
- Switches between light and dark themes
- Updates localStorage with new preference
- Applies theme to document element

## Styling Classes

### Dynamic Classes
- `bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg`: Scrolled state
- `bg-transparent`: Initial transparent state
- `md:hidden`: Mobile menu button (hidden on desktop)
- `hidden md:flex`: Desktop navigation (hidden on mobile)

### Animation Classes
- `transition-all duration-300`: Smooth transitions
- `hover:scale-1.05`: Hover scale effect
- `whileHover={{ scale: 1.1 }}`: Framer Motion hover animation

## Responsive Behavior

### Desktop (md and up)
- Horizontal navigation menu
- Theme toggle button
- Logo on the left, nav in center, theme toggle on right

### Mobile (below md)
- Hamburger menu button
- Collapsible vertical navigation
- Full-width mobile menu overlay

## Accessibility Features

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Management**: Proper focus handling for mobile menu
- **Semantic HTML**: Uses proper header and nav elements

## Performance Optimizations

- **Event Listener Cleanup**: Removes scroll listeners on unmount
- **Conditional Rendering**: Mobile menu only renders when needed
- **Efficient State Updates**: Minimal re-renders with proper state management

## Usage Example

```jsx
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      {/* Rest of your app content */}
    </div>
  );
}
```

## Customization

### Adding New Navigation Items
```javascript
const navItems = [
  // ... existing items
  { name: 'New Section', href: '#new-section' },
];
```

### Changing Theme Colors
Update the gradient classes in the component:
```javascript
className="bg-gradient-to-r from-blue-500 to-purple-600"
```

### Modifying Scroll Threshold
```javascript
const handleScroll = () => {
  setIsScrolled(window.scrollY > 100); // Change from 50 to 100
};
```

## Browser Support
- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Local Storage API support needed for theme persistence
