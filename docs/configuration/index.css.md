# CSS Configuration Documentation

## Overview
The `index.css` file contains the global CSS configuration for the portfolio project, including Tailwind CSS imports, custom CSS variables, animations, and component styles.

## File Location
`src/index.css`

## Current Configuration

### Tailwind CSS Import
```css
@import "tailwindcss";
```

- Imports Tailwind CSS v4
- Includes all Tailwind utilities and components
- Enables dark mode and responsive design

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

- **Inter**: Primary font family for UI text
- **JetBrains Mono**: Monospace font for code
- **Display swap**: Improves font loading performance

## Tailwind CSS v4 Configuration

### Dark Mode Configuration
```css
@custom-variant dark (&:where(.dark, .dark *));
```

- Enables dark mode support
- Uses `:where()` for better specificity
- Supports both `.dark` class and `dark` attribute

### Theme Configuration
```css
@theme {
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;
  
  --font-family-sans: Inter, system-ui, sans-serif;
  --font-family-mono: "JetBrains Mono", monospace;
  
  --breakpoint-xs: 475px;
  
  --animate-fade-in: fadeIn 0.5s ease-in-out;
  --animate-slide-up: slideUp 0.5s ease-out;
  --animate-bounce-gentle: bounceGentle 2s infinite;
  --animate-typing: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
}
```

### Custom Color Palette
- **Primary Colors**: Blue color scheme (50-900)
- **Font Families**: Inter for sans-serif, JetBrains Mono for monospace
- **Breakpoints**: Custom extra-small breakpoint at 475px
- **Animations**: Custom animation definitions

## Custom Animations

### Fade In Animation
```css
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

### Slide Up Animation
```css
@keyframes slideUp {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
```

### Bounce Gentle Animation
```css
@keyframes bounceGentle {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}
```

### Typing Animation
```css
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: orange; }
}
```

## Base Styles

### HTML and Body
```css
@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Inter', system-ui, sans-serif;
  }
}
```

- **Smooth scrolling**: Enables smooth scroll behavior
- **Font family**: Sets Inter as the default font

### Dark Mode Base Styles
```css
.dark {
  color-scheme: dark;
}

html.dark {
  color-scheme: dark;
}

html.dark body {
  background-color: #111827;
  color: #f9fafb;
}
```

- **Color scheme**: Sets dark color scheme
- **Background**: Dark gray background
- **Text color**: Light gray text

### Mobile Optimizations
```css
@media (max-width: 768px) {
  html {
    font-size: 16px;
  }
  
  button, a, [role="button"] {
    min-height: 44px;
    min-width: 44px;
  }
  
  * {
    -webkit-tap-highlight-color: rgba(102, 126, 234, 0.2);
  }
  
  body {
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    overflow-x: hidden;
  }
  
  .mobile-nav-open {
    overflow: hidden;
  }
}
```

- **Font size**: Ensures readable font size on mobile
- **Touch targets**: Minimum 44px for touch elements
- **Tap highlight**: Custom tap highlight color
- **Text adjustment**: Prevents text size adjustment
- **Horizontal scroll**: Prevents horizontal overflow

## Component Styles

### Gradient Background
```css
.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Card Hover Effect
```css
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
```

### Typing Animation
```css
.typing-animation {
  overflow: hidden;
  border-right: 2px solid #667eea;
  white-space: nowrap;
  animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
}
```

### Skill Progress Bar
```css
.skill-bar {
  position: relative;
  background-color: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 9999px;
  transition: width 2s ease-in-out;
}
```

## Custom Scrollbar

### Webkit Scrollbar
```css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
}
```

## Responsive Design

### Breakpoints
- **xs**: 475px (custom breakpoint)
- **sm**: 640px (Tailwind default)
- **md**: 768px (Tailwind default)
- **lg**: 1024px (Tailwind default)
- **xl**: 1280px (Tailwind default)

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly interface elements
- Optimized for mobile performance

## Dark Mode Implementation

### CSS Variables
```css
:root {
  --color-bg: #ffffff;
  --color-text: #000000;
}

.dark {
  --color-bg: #111827;
  --color-text: #f9fafb;
}
```

### Class-Based Dark Mode
- Uses `.dark` class on HTML element
- Toggle via JavaScript
- Persistent with localStorage
- Smooth transitions

## Performance Optimizations

### Font Loading
- Uses `display=swap` for better performance
- Preloads critical fonts
- Fallback to system fonts

### Animation Performance
- Uses `transform` and `opacity` for smooth animations
- Hardware acceleration where possible
- Reduced motion support

### CSS Optimization
- Minimal custom CSS
- Leverages Tailwind utilities
- Efficient selectors
- No unused styles

## Customization

### Adding New Colors
```css
@theme {
  --color-custom-500: #your-color;
  --color-custom-600: #your-darker-color;
}
```

### Adding New Animations
```css
@keyframes yourAnimation {
  0% { /* start state */ }
  100% { /* end state */ }
}

@theme {
  --animate-your-animation: yourAnimation 1s ease-in-out;
}
```

### Modifying Gradients
```css
.gradient-bg {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

## Browser Support

### Modern Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### CSS Features Used
- CSS Grid and Flexbox
- CSS Custom Properties
- CSS Animations
- CSS Gradients
- CSS Backdrop Filter

## Troubleshooting

### Common Issues
1. **Styles not applying**: Check Tailwind import and build process
2. **Dark mode not working**: Verify class application and CSS variables
3. **Animations not smooth**: Check for conflicting styles
4. **Mobile issues**: Test on actual devices

### Debug Tips
- Use browser dev tools to inspect styles
- Check for CSS conflicts
- Verify Tailwind compilation
- Test responsive breakpoints
