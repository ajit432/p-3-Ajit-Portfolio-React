# Ajit Kumar - Portfolio Website

A modern, responsive personal portfolio website showcasing the work and expertise of Nitish Kumar, a Software Developer with 1.5 years of experience.

## ✨ Features

- **Responsive Design** - Works perfectly on all devices and screen sizes
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Smooth Animations** - Beautiful animations using Framer Motion
- **Interactive Components** - Engaging user experience with hover effects
- **Modern UI** - Clean, professional design with Tailwind CSS
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## 🚀 Tech Stack

- **Frontend**: React 19.1.1
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: Node.js

## 📱 Sections

1. **Hero Section** - Professional introduction with animated roles
2. **About Me** - Background, education, and experience overview
3. **Projects** - Showcase of web, mobile, and AR applications
4. **Experience** - Professional timeline with achievements
5. **Skills** - Technical competencies with animated progress bars
6. **Resume** - Download and upload functionality
7. **Contact** - Contact form and social media links

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/nitishkumar/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update personal details in each component:
- `src/components/HeroSection.jsx` - Name, roles, tagline
- `src/components/AboutSection.jsx` - Background and education
- `src/components/ContactSection.jsx` - Contact information

### Projects
Modify the projects array in `src/components/ProjectsSection.jsx`:
```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2'],
    // ... other properties
  }
];
```

### Skills
Update skill categories and levels in `src/components/SkillsSection.jsx`:
```javascript
const skillCategories = [
  {
    title: 'Your Skill Category',
    skills: [
      { name: 'Skill Name', level: 85, description: 'Description' }
    ]
  }
];
```

### Colors & Styling
The primary gradient colors can be customized in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      }
    }
  }
}
```

## 🌟 Key Features Implemented

- ✅ **Mobile-First Design** - Responsive across all devices
- ✅ **Dark Mode Toggle** - Persistent theme switching
- ✅ **Smooth Scrolling Navigation** - Anchor link navigation
- ✅ **Animated Progress Bars** - Skills visualization
- ✅ **Project Cards** - Interactive project showcase
- ✅ **Contact Form** - Functional contact form with validation
- ✅ **Social Media Integration** - Links to professional profiles
- ✅ **Resume Upload/Download** - File management functionality
- ✅ **Timeline Component** - Professional experience display
- ✅ **Performance Optimized** - Fast loading and smooth animations

## 📞 Contact

**Ajit Kumar**
- Email: ajitkumarbehera875@gmail.com
- LinkedIn: 
- GitHub:  
- Location: Bhubaneswar, Odisha, India

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ using React & Tailwind CSS**
