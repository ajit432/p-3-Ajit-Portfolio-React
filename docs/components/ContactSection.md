# Contact Section Component Documentation

## Overview
The `ContactSection` component provides a comprehensive contact interface with contact information, social links, availability status, and a contact form. It features a three-column layout with interactive elements for communication.

## File Location
`src/components/ContactSection.jsx`

## Dependencies
- React (useRef, useState)
- Framer Motion (motion, useInView)
- Lucide React (Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Clock, Globe, CheckCircle, Calendar icons)

## Key Features

### 1. Contact Information Display
- **Multiple Contact Methods**: Email, phone, location, website
- **Interactive Links**: Clickable contact information
- **Icon Integration**: Visual icons for each contact method
- **Responsive Layout**: Adapts to different screen sizes

### 2. Social Media Links
- **Platform Integration**: GitHub, LinkedIn, Twitter, WhatsApp
- **Follower Counts**: Display social media metrics
- **Hover Animations**: Interactive hover effects
- **External Links**: Opens in new tabs with proper security

### 3. Availability Status
- **Real-time Status**: Shows current availability
- **Response Time**: Displays expected response time
- **Timezone Information**: Shows current timezone
- **Visual Indicators**: Color-coded status display

### 4. Contact Form
- **Form Validation**: Client-side form validation
- **Submission Handling**: Simulated form submission
- **Success Feedback**: Visual confirmation of submission
- **Responsive Design**: Adapts to different screen sizes

## State Management

```javascript
const ref = useRef(null);
const isInView = useInView(ref, { once: true });
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState(null);
```

### State Variables
- `ref`: Reference to the section element
- `isInView`: Boolean indicating if section is visible in viewport
- `formData`: Form input data
- `isSubmitting`: Boolean for form submission state
- `submitStatus`: Form submission status ('success', 'error', null)

## Contact Information Data Structure

```javascript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ajitkumarbehera875@gmail.com',
    href: 'mailto:ajitkumarbehera875@gmail.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9861500797',
    href: 'tel:+919861500797',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bhubaneswar, Odisha, India',
    href: 'https://maps.google.com/?q=Bhubaneswar,Odisha,India',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'Ajit.dev',
    href: 'https://nitishkumar.dev',
    color: 'from-orange-500 to-red-500'
  }
];
```

### Contact Info Object Properties
- `icon`: Lucide React icon component
- `label`: Contact method label
- `value`: Contact information value
- `href`: Clickable link
- `color`: Tailwind gradient color classes

## Social Links Data Structure

```javascript
const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/nitishkumar',
    color: 'hover:bg-gray-700',
    followers: '250+ followers'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/nitishkumar',
    color: 'hover:bg-blue-600',
    followers: '500+ connections'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/nitishkumar',
    color: 'hover:bg-blue-400',
    followers: '150+ followers'
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    href: 'https://wa.me/919861500797',
    color: 'hover:bg-green-500',
    followers: 'Quick chat'
  }
];
```

### Social Link Object Properties
- `name`: Platform name
- `icon`: Lucide React icon component
- `href`: Social media URL
- `color`: Hover color class
- `followers`: Follower/connection count

## Availability Status Configuration

```javascript
const availabilityStatus = {
  status: 'Available',
  message: 'Open to new opportunities',
  responseTime: 'Usually responds within 24 hours',
  timezone: 'IST (GMT+5:30)'
};
```

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

## Availability Status Display

```javascript
<motion.div
  variants={itemVariants}
  className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 sm:p-6 border-l-4 border-green-500"
>
  <div className="flex items-center mb-2 sm:mb-3">
    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-2 sm:mr-3 animate-pulse" />
    <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
      {availabilityStatus.status}
    </h3>
  </div>
  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-2">
    {availabilityStatus.message}
  </p>
  <div className="flex items-center text-xs text-gray-500 dark:text-gray-500 mb-1">
    <Clock size={10} className="sm:w-3 sm:h-3 mr-1" />
    <span className="text-xs">{availabilityStatus.responseTime}</span>
  </div>
  <div className="text-xs text-gray-500 dark:text-gray-500">
    Timezone: {availabilityStatus.timezone}
  </div>
</motion.div>
```

## Contact Information Display

```javascript
<motion.div
  variants={itemVariants}
  className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 sm:p-6"
>
  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
    Contact Information
  </h3>
  <div className="space-y-3 sm:space-y-4">
    {contactInfo.map((info, index) => {
      const IconComponent = info.icon;
      return (
        <motion.a
          key={index}
          href={info.href}
          target={info.href.startsWith('http') ? '_blank' : '_self'}
          rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
          whileHover={{ scale: 1.02 }}
          className="flex items-center p-2.5 sm:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
        >
          <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className="text-white" size={16} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {info.label}
            </p>
            <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base truncate">
              {info.value}
            </p>
          </div>
        </motion.a>
      );
    })}
  </div>
</motion.div>
```

## Social Media Links

```javascript
<motion.div
  variants={itemVariants}
  className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 sm:p-6"
>
  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
    Social Media
  </h3>
  <div className="grid grid-cols-2 gap-2 sm:gap-3">
    {socialLinks.map((social, index) => {
      const IconComponent = social.icon;
      return (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2.5 sm:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center group ${social.color} hover:text-white`}
        >
          <IconComponent className="mx-auto mb-1" size={18} />
          <p className="text-xs font-medium">{social.name}</p>
          <p className="text-xs opacity-75 truncate">{social.followers}</p>
        </motion.a>
      );
    })}
  </div>
</motion.div>
```

## Contact Form

### Form Container
```javascript
<motion.div
  variants={itemVariants}
  className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
>
  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
    Send a Message
  </h3>
  
  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
    {/* Form fields */}
  </form>
</motion.div>
```

### Form Input Fields
```javascript
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
  <div>
    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      Full Name *
    </label>
    <motion.input
      whileFocus={{ scale: 1.02 }}
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      required
      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white text-sm sm:text-base"
      placeholder="Your full name"
    />
  </div>
  
  <div>
    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
      Email Address *
    </label>
    <motion.input
      whileFocus={{ scale: 1.02 }}
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      required
      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white text-sm sm:text-base"
      placeholder="your.email@example.com"
    />
  </div>
</div>
```

### Form Submission Handling
```javascript
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  // Simulate form submission
  setTimeout(() => {
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus(null), 3000);
  }, 2000);
};
```

### Submit Button
```javascript
<motion.button
  type="submit"
  disabled={isSubmitting}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
>
  {isSubmitting ? (
    <>
      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      Sending...
    </>
  ) : (
    <>
      <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
      Send Message
    </>
  )}
</motion.button>
```

### Success Message
```javascript
{submitStatus === 'success' && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-700"
  >
    <CheckCircle size={18} />
    <span>Message sent successfully! I'll get back to you soon.</span>
  </motion.div>
)}
```

## Bottom Call-to-Action

```javascript
<motion.div
  variants={itemVariants}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  className="text-center mt-16"
>
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
    <h3 className="text-2xl font-bold mb-4">
      Ready to Start Your Project?
    </h3>
    <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
      Let's turn your ideas into reality. Whether it's a mobile app, web application, 
      or custom software solution, I'm here to help you succeed.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
      <motion.a
        href="mailto:nitishpatel212000@gmail.com"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
      >
        <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
        Email Me Directly
      </motion.a>
      <motion.a
        href="https://calendly.com/nitishkumar"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
      >
        <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
        Schedule a Call
      </motion.a>
    </div>
  </div>
</motion.div>
```

## Responsive Design

### Three-Column Layout
```javascript
<div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
  {/* Left Column - Contact Info & Social */}
  <motion.div className="lg:col-span-1 space-y-6 lg:space-y-8">
    {/* Contact info and social links */}
  </motion.div>
  
  {/* Right Column - Contact Form */}
  <motion.div className="lg:col-span-2 mt-8 lg:mt-0">
    {/* Contact form */}
  </motion.div>
</div>
```

### Responsive Classes
- `lg:grid-cols-3`: 3 columns on large screens
- `lg:col-span-1`: 1 column span for contact info
- `lg:col-span-2`: 2 column span for contact form
- `grid-cols-2`: 2 columns for social links grid

## Customization Options

### Updating Contact Information
```javascript
const contactInfo = [
  // ... existing contact info
  {
    icon: NewIcon,
    label: 'New Contact Method',
    value: 'New contact value',
    href: 'new-contact-link',
    color: 'from-red-500 to-pink-500'
  }
];
```

### Adding New Social Links
```javascript
const socialLinks = [
  // ... existing social links
  {
    name: 'New Platform',
    icon: NewIcon,
    href: 'https://new-platform.com/username',
    color: 'hover:bg-new-color',
    followers: 'New follower count'
  }
];
```

### Modifying Availability Status
```javascript
const availabilityStatus = {
  status: 'Busy', // Change status
  message: 'Currently working on projects',
  responseTime: 'Usually responds within 48 hours',
  timezone: 'PST (GMT-8)'
};
```

### Updating Form Fields
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
  phone: '', // Add new field
  company: '' // Add new field
});
```

## Performance Considerations

- **Form Validation**: Client-side validation for better UX
- **Animation Performance**: Uses transform and opacity for smooth animations
- **Viewport Detection**: Only animates when section is in view
- **Memory Management**: Proper cleanup of event listeners

## Accessibility Features

- **Form Labels**: Proper labeling for all form inputs
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Proper focus handling for form elements

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Framer Motion requires modern browser with good performance
- Form validation API support

## Troubleshooting

### Common Issues
1. **Form not submitting**: Check form validation and submission handler
2. **Links not working**: Verify URL formatting and target attributes
3. **Animations not triggering**: Ensure section is properly in viewport
4. **Layout breaking on mobile**: Check responsive classes

### Debug Tips
- Use browser dev tools to inspect element classes
- Check console for JavaScript errors
- Test on different screen sizes
- Verify all contact information is properly formatted
- Test form submission functionality
