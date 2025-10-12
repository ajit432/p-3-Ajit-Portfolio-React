# Vite Configuration Documentation

## Overview
The `vite.config.js` file configures the Vite build tool for the React portfolio project. Vite provides fast development server, hot module replacement, and optimized production builds.

## File Location
`vite.config.js`

## Current Configuration

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

## Configuration Breakdown

### Import Statements
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
```

- **defineConfig**: TypeScript-friendly configuration helper
- **react**: Vite plugin for React support with JSX and Fast Refresh

### Export Configuration
```javascript
export default defineConfig({
  plugins: [react()],
})
```

- **plugins**: Array of Vite plugins
- **react()**: Enables React support with JSX transformation and Fast Refresh

## Vite Features

### Development Server
- **Fast startup**: Uses esbuild for dependency pre-bundling
- **Hot Module Replacement (HMR)**: Instant updates without page refresh
- **ES modules**: Native ES module support in development
- **TypeScript support**: Built-in TypeScript support

### Production Build
- **Rollup-based**: Uses Rollup for production builds
- **Tree shaking**: Removes unused code
- **Code splitting**: Automatic code splitting
- **Asset optimization**: Optimizes images, CSS, and other assets

## Common Configuration Options

### Basic Configuration
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

### Advanced Configuration
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
```

## Configuration Options

### Server Options
```javascript
server: {
  port: 3000,           // Development server port
  host: 'localhost',    // Server host
  open: true,           // Open browser automatically
  cors: true,           // Enable CORS
  https: false,         // Enable HTTPS
  proxy: {              // Proxy configuration
    '/api': 'http://localhost:8080'
  }
}
```

### Build Options
```javascript
build: {
  outDir: 'dist',       // Output directory
  sourcemap: true,      // Generate source maps
  minify: 'terser',     // Minification method
  rollupOptions: {      // Rollup configuration
    input: {
      main: resolve(__dirname, 'index.html')
    },
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom']
      }
    }
  }
}
```

### Resolve Options
```javascript
resolve: {
  alias: {
    '@': resolve(__dirname, 'src'),
    '@components': resolve(__dirname, 'src/components'),
    '@assets': resolve(__dirname, 'src/assets')
  }
}
```

### CSS Options
```javascript
css: {
  preprocessorOptions: {
    scss: {
      additionalData: `@import "@/styles/variables.scss";`
    }
  }
}
```

## Environment Variables

### Environment Files
- `.env`: Default environment variables
- `.env.local`: Local environment variables (ignored by git)
- `.env.development`: Development environment variables
- `.env.production`: Production environment variables

### Usage in Code
```javascript
// Access environment variables
const apiUrl = import.meta.env.VITE_API_URL
const isDev = import.meta.env.DEV
const isProd = import.meta.env.PROD
```

### Environment Variable Prefix
- Variables must be prefixed with `VITE_` to be accessible in client code
- Example: `VITE_API_URL=https://api.example.com`

## Plugin Configuration

### React Plugin Options
```javascript
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',  // Use automatic JSX runtime
      jsxImportSource: 'react', // JSX import source
      babel: {                  // Babel configuration
        plugins: ['@babel/plugin-proposal-decorators']
      }
    })
  ]
})
```

### Additional Plugins
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
})
```

## Performance Optimization

### Build Optimization
```javascript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        ui: ['framer-motion', 'lucide-react'],
        utils: ['lodash', 'date-fns']
      }
    }
  }
}
```

### Development Optimization
```javascript
server: {
  hmr: {
    overlay: false  // Disable error overlay
  }
}
```

## Customization for Portfolio Project

### Recommended Configuration
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react', 'react-icons']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets')
    }
  }
})
```

## Troubleshooting

### Common Issues
1. **Port already in use**: Change port in server configuration
2. **Build fails**: Check for TypeScript errors and missing dependencies
3. **HMR not working**: Ensure React plugin is properly configured
4. **Asset loading issues**: Check public folder and asset paths

### Debug Commands
```bash
# Start development server with debug info
npm run dev -- --debug

# Build with verbose output
npm run build -- --debug

# Check configuration
npx vite --help
```

## Best Practices

### Configuration Management
- Keep configuration simple and readable
- Use environment variables for different environments
- Document custom configurations
- Version control the configuration file

### Performance
- Use manual chunks for better caching
- Enable source maps in development
- Optimize asset loading
- Use appropriate minification settings

### Security
- Don't expose sensitive environment variables
- Use HTTPS in production
- Configure CORS appropriately
- Validate input and output paths
