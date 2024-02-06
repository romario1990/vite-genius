# Getting Started with React + TypeScript + Vite

## Introduction

Vite is a powerful development tool designed for building modern web applications, offering speed and efficiency. When combined with React, it delivers an optimized development experience. In this guide, we will walk through the steps to initiate a new project using Vite and React.

## Prerequisites

Before you begin, ensure that you have Node.js installed on your system. You can download the latest version from `nodejs.org`.

## Step 1: Create a Project with Vite

To generate a new project, use the following command, replacing "vite-genius" with your preferred project name:

```js
  npm create vite project-name
    ✔ Select a framework: › React
    ✔ Select a variant: › TypeScript + SWC
```

This command establishes the initial project structure with default Vite settings.


`*` SWC is used to transform your JavaScript/TypeScript code into a format that the browser can understand. It replaces Babel and TypeScript in the build process, handling the transformation of your code. This includes transpiling newer JavaScript syntax to older versions for compatibility, transforming TypeScript to JavaScript, and applying various plugins for additional transformations.

## Step 2: Install Redux Toolkit

For efficient state management in your React application, let's add @reduxjs/toolkit:

npm install @reduxjs/toolkit

`eslintrc.cjs`
```js
	module.exports = {
	  root: true,
	  env: { browser: true, es2020: true },
	  extends: [
	    'eslint:recommended',
	    'plugin:@typescript-eslint/strict-type-checked',
	    'plugin:react-hooks/recommended',
	    'plugin:@typescript-eslint/stylistic-type-checked',
	    'plugin:react/recommended',
	    'plugin:react/jsx-runtime'
	  ],
	  ignorePatterns: ['dist', '.eslintrc.cjs'],
	  parser: '@typescript-eslint/parser',
	  plugins: ['react-refresh'],
	  rules: {
	    'react-refresh/only-export-components': [
	      'warn',
	      { allowConstantExport: true },
	    ],
	  },
	}
```

`*` Replace plugin:@typescript-eslint/recommended to plugin:@typescript-eslint/recommended-type-checked or plugin:@typescript-eslint/strict-type-checked

`*` Optionally add plugin:@typescript-eslint/stylistic-type-checked

`*` Install eslint-plugin-react and add plugin:react/recommended & plugin:react/jsx-runtime to the extends list

# Testing

## Introduction

Vite is a powerful development tool designed for building modern web applications, offering speed and efficiency. Combining Vite with React provides an optimized development experience. In this guide, we will continue building on our project by adding testing capabilities using vitest, jsdom, and @testing-library.

## Prerequisites

Before proceeding, ensure that you've followed the previous steps to set up your Vite and React project. If not, refer to the earlier sections of this guide.

## Step 1: Install Testing Dependencies

For testing your React components, install the necessary dependencies:

```js
    npm i vitest -D
    npm i jsdom -D
    npm i @testing-library/react @testing-library/jest-dom @testing-library/user-event -D
    npm i @types/jest -D
    npm i @vitest/coverage-v8
```

## Step 2: Update package.json

```js
    "scripts": {
      "test": "vitest",
      "coverage": "vitest run --coverage"
    }
```

## Step 3: Create Setup Tests File

Create a file named `setupTests.js` in the root of your project with the following content:

```js
    import '@testing-library/jest-dom';
```

This file sets up additional configurations for your Jest tests.

## Step 4: Update vite.config.ts

Update your `vite.config.ts` file to include testing configurations:

```ts
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react-swc';
    import { configDefaults } from 'vitest/config';
    
    export default defineConfig({
      plugins: [react()],
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setupTests.js',
        css: true,
        reporters: ['verbose'],
        exclude: [...configDefaults.exclude, 'packages/template/*'],
      },
    });
```

This configuration integrates vitest with your Vite project and sets up Jest testing for React components using jsdom and @testing-library.

# Conclusion

With the testing configurations in place, you can now write and run tests for your React components. Execute the following command to run:

## Run

```js
    yarn dev
```

## Run Test

```js
    yarn test
```

## Run Coverage

```js
    yarn coverage
```