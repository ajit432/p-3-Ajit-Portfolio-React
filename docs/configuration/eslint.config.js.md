# ESLint Configuration Documentation

## Overview
The `eslint.config.js` file configures ESLint for code quality and consistency in the React portfolio project. It uses the new flat config format introduced in ESLint 9.x.

## File Location
`eslint.config.js`

## Current Configuration

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

## Configuration Breakdown

### Import Statements
```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
```

- **@eslint/js**: Core ESLint JavaScript rules
- **globals**: Global variables for different environments
- **eslint-plugin-react-hooks**: Rules for React hooks
- **eslint-plugin-react-refresh**: Rules for React refresh
- **eslint/config**: ESLint configuration utilities

### Global Ignores
```javascript
globalIgnores(['dist'])
```

- **dist**: Ignores the build output directory
- Prevents linting of generated files

### File Patterns
```javascript
files: ['**/*.{js,jsx}']
```

- **Pattern**: Lints all JavaScript and JSX files
- **Recursive**: Includes all subdirectories
- **Extensions**: .js and .jsx files

### Extends Configuration
```javascript
extends: [
  js.configs.recommended,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,
]
```

- **js.configs.recommended**: Core JavaScript recommended rules
- **reactHooks.configs['recommended-latest']**: Latest React hooks rules
- **reactRefresh.configs.vite**: Vite-specific React refresh rules

### Language Options
```javascript
languageOptions: {
  ecmaVersion: 2020,
  globals: globals.browser,
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
  },
}
```

- **ecmaVersion**: JavaScript version (2020)
- **globals.browser**: Browser global variables (window, document, etc.)
- **jsx: true**: Enables JSX syntax support
- **sourceType: 'module'**: Enables ES6 module syntax

### Custom Rules
```javascript
rules: {
  'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
}
```

- **no-unused-vars**: Prevents unused variables
- **varsIgnorePattern**: Ignores variables starting with uppercase letters (constants)

## ESLint Rules

### Core JavaScript Rules
- **no-unused-vars**: Prevents unused variables
- **no-undef**: Prevents use of undefined variables
- **no-console**: Warns about console statements
- **no-debugger**: Prevents debugger statements
- **no-alert**: Prevents alert statements

### React Hooks Rules
- **react-hooks/rules-of-hooks**: Enforces rules of hooks
- **react-hooks/exhaustive-deps**: Checks effect dependencies

### React Refresh Rules
- **react-refresh/only-export-components**: Ensures only components are exported

## Common Configuration Options

### Additional Rules
```javascript
rules: {
  'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
  'no-console': 'warn',
  'no-debugger': 'error',
  'prefer-const': 'error',
  'no-var': 'error',
  'eqeqeq': 'error',
  'curly': 'error'
}
```

### Environment Configuration
```javascript
languageOptions: {
  ecmaVersion: 2020,
  globals: {
    ...globals.browser,
    ...globals.node,
    ...globals.es2020
  }
}
```

### Parser Options
```javascript
parserOptions: {
  ecmaVersion: 'latest',
  ecmaFeatures: {
    jsx: true,
    globalReturn: false,
    impliedStrict: true
  },
  sourceType: 'module'
}
```

## Plugin Configuration

### React Hooks Plugin
```javascript
import reactHooks from 'eslint-plugin-react-hooks'

export default defineConfig([
  {
    plugins: {
      'react-hooks': reactHooks
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  }
])
```

### React Refresh Plugin
```javascript
import reactRefresh from 'eslint-plugin-react-refresh'

export default defineConfig([
  {
    plugins: {
      'react-refresh': reactRefresh
    },
    rules: {
      'react-refresh/only-export-components': 'warn'
    }
  }
])
```

## Custom Rules for Portfolio Project

### Recommended Configuration
```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'eqeqeq': 'error',
      'curly': 'error',
      'no-trailing-spaces': 'error',
      'eol-last': 'error'
    },
  },
])
```

## Script Integration

### Package.json Scripts
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "lint:check": "eslint . --max-warnings 0"
  }
}
```

### Usage Commands
```bash
# Run ESLint
npm run lint

# Fix auto-fixable issues
npm run lint:fix

# Check with zero warnings allowed
npm run lint:check
```

## IDE Integration

### VS Code Settings
```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact"
  ],
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### ESLint Extension
- Install ESLint extension for VS Code
- Enables real-time linting
- Shows errors and warnings inline
- Provides quick fixes

## Troubleshooting

### Common Issues
1. **Configuration not working**: Check file format and syntax
2. **Rules not applying**: Verify file patterns and extends
3. **Parser errors**: Check ecmaVersion and parser options
4. **Plugin errors**: Ensure plugins are installed

### Debug Commands
```bash
# Check configuration
npx eslint --print-config src/App.jsx

# Debug specific file
npx eslint --debug src/App.jsx

# List all rules
npx eslint --print-config src/App.jsx | grep rules
```

## Best Practices

### Configuration Management
- Use flat config format for ESLint 9+
- Keep configuration simple and readable
- Document custom rules and their purpose
- Use consistent rule severity levels

### Code Quality
- Fix linting errors before committing
- Use auto-fix when possible
- Configure pre-commit hooks
- Regular code reviews

### Performance
- Exclude build directories
- Use appropriate file patterns
- Avoid overly strict rules
- Monitor linting performance
