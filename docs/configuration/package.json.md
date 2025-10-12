# Package.json Configuration Documentation

## Overview
The `package.json` file defines the project metadata, dependencies, and scripts for the portfolio website. It serves as the central configuration file for the React-based portfolio project.

## File Location
`package.json`

## Project Information

### Basic Metadata
```json
{
  "name": "ajit-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module"
}
```

- **name**: Project identifier
- **private**: Prevents accidental publishing to npm
- **version**: Current version (0.0.0 indicates development)
- **type**: "module" enables ES6 module syntax

## Scripts

### Available Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

### Script Descriptions
- **dev**: Starts development server with hot reload
- **build**: Creates production build in `dist` folder
- **lint**: Runs ESLint to check code quality
- **preview**: Serves production build locally for testing

## Dependencies

### Production Dependencies
```json
{
  "dependencies": {
    "@headlessui/react": "^2.2.7",
    "framer-motion": "^12.23.12",
    "lucide-react": "^0.543.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0"
  }
}
```

#### Core Dependencies
- **react**: React library for building user interfaces
- **react-dom**: React DOM rendering library

#### UI Libraries
- **@headlessui/react**: Unstyled, accessible UI components
- **framer-motion**: Animation library for React
- **lucide-react**: Icon library with 1000+ icons
- **react-icons**: Popular icon libraries (Font Awesome, Material Design, etc.)

### Development Dependencies
```json
{
  "devDependencies": {
    "@eslint/js": "^9.33.0",
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^24.3.1",
    "@types/react": "^19.1.10",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^5.0.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.33.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.3.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.0.0",
    "vite": "^7.1.2"
  }
}
```

#### Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: Vite plugin for React support

#### Styling
- **tailwindcss**: Utility-first CSS framework
- **@tailwindcss/postcss**: PostCSS plugin for Tailwind CSS
- **postcss**: CSS post-processor
- **autoprefixer**: Automatically adds vendor prefixes

#### Linting & Code Quality
- **eslint**: JavaScript/TypeScript linter
- **@eslint/js**: ESLint JavaScript configuration
- **eslint-plugin-react-hooks**: ESLint rules for React hooks
- **eslint-plugin-react-refresh**: ESLint rules for React refresh

#### TypeScript Support
- **@types/node**: TypeScript definitions for Node.js
- **@types/react**: TypeScript definitions for React
- **@types/react-dom**: TypeScript definitions for React DOM

#### Utilities
- **globals**: Global variables for ESLint

## Version Management

### Semantic Versioning
All dependencies use semantic versioning (semver) with caret (^) prefix:
- **^2.2.7**: Allows updates to 2.x.x but not 3.x.x
- **^19.1.1**: Allows updates to 19.x.x but not 20.x.x

### Version Ranges
- **Major versions**: Breaking changes (e.g., 1.x.x → 2.x.x)
- **Minor versions**: New features, backward compatible (e.g., 1.1.x → 1.2.x)
- **Patch versions**: Bug fixes, backward compatible (e.g., 1.1.1 → 1.1.2)

## Installation Commands

### Install All Dependencies
```bash
npm install
```

### Install Production Dependencies Only
```bash
npm install --production
```

### Install Specific Package
```bash
npm install package-name
```

### Install Development Dependency
```bash
npm install --save-dev package-name
```

## Script Usage

### Development
```bash
npm run dev
```
- Starts Vite development server
- Enables hot module replacement
- Usually runs on http://localhost:5173

### Production Build
```bash
npm run build
```
- Creates optimized production build
- Outputs to `dist` folder
- Minifies and optimizes assets

### Code Linting
```bash
npm run lint
```
- Runs ESLint on all JavaScript/JSX files
- Reports code quality issues
- Can be configured to auto-fix issues

### Preview Production Build
```bash
npm run preview
```
- Serves production build locally
- Useful for testing before deployment
- Usually runs on http://localhost:4173

## Dependency Management

### Updating Dependencies
```bash
# Update all dependencies
npm update

# Update specific dependency
npm update package-name

# Check outdated packages
npm outdated
```

### Security Audits
```bash
# Audit for security vulnerabilities
npm audit

# Fix security issues
npm audit fix
```

### Lock File
- **package-lock.json**: Generated automatically
- Locks exact versions of all dependencies
- Ensures consistent installs across environments
- Should be committed to version control

## Environment Requirements

### Node.js Version
- **Recommended**: Node.js 18+ or 20+
- **Minimum**: Node.js 16+ (for React 19)
- **Package Manager**: npm (included with Node.js)

### Browser Support
- **Modern browsers**: Chrome, Firefox, Safari, Edge
- **ES6+ support**: Required for React and modern JavaScript
- **CSS Grid/Flexbox**: Required for layout

## Customization

### Adding New Dependencies
```bash
# Production dependency
npm install package-name

# Development dependency
npm install --save-dev package-name
```

### Updating Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "custom-script": "echo 'Custom script'"
  }
}
```

### Environment Variables
```json
{
  "scripts": {
    "dev": "NODE_ENV=development vite",
    "build": "NODE_ENV=production vite build"
  }
}
```

## Troubleshooting

### Common Issues
1. **Installation fails**: Check Node.js version and internet connection
2. **Version conflicts**: Delete `node_modules` and `package-lock.json`, then `npm install`
3. **Build errors**: Check for TypeScript errors and missing dependencies
4. **Lint errors**: Run `npm run lint` to identify code quality issues

### Debug Commands
```bash
# Check npm version
npm --version

# Check Node.js version
node --version

# Clear npm cache
npm cache clean --force

# Check installed packages
npm list

# Check global packages
npm list -g --depth=0
```

## Best Practices

### Dependency Management
- Keep dependencies up to date
- Use exact versions for critical dependencies
- Regularly audit for security vulnerabilities
- Remove unused dependencies

### Script Organization
- Use descriptive script names
- Group related scripts together
- Document complex scripts
- Use environment variables for configuration

### Version Control
- Commit `package-lock.json`
- Use `.npmrc` for project-specific npm configuration
- Document any special installation requirements
- Use `.gitignore` to exclude `node_modules`
