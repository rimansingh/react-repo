# Snowpack Skypack React

## Table of Contents
- [Summary of Steps](#summary-of-steps)
- [Create Project Directory & Initialize](#create-project-directory--initialize)
- [Set Up Source Directory](#set-up-source-directory)
- [Snowpack Configuration](#snowpack-configuration)
- [React with Skypack](#react-with-skypack)
- [Run Dev Server](#run-dev-server)
- [Why This Approach Is Cool](#why-this-approach-is-cool)
- [Next Steps](#next-steps)

## Summary of Steps

### Create Project Directory & Initialize

1. Create and navigate to a new project directory:
   ```bash
   mkdir snowpack-skypack-react
   cd snowpack-skypack-react
   npm init -y
   npm install --save-dev snowpack
   ```

### Set Up Source Directory

2. Create a `src` folder:
   ```bash
   mkdir src
   ```
3. Add a placeholder `index.html` file:
   ```bash
   touch src/index.html
   ```

### Content for `src/index.html`

```html
<!DOCTYPE html>
<html>
<head>
    <title>Snowpack Skypack React</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="main.js"></script>
</body>
</html>
```

### Snowpack Configuration

4. Initialize Snowpack:
   ```bash
   npx snowpack init
   ```
5. Update the generated `snowpack.config.js` to include:
   ```javascript
   module.exports = {
     mount: {
       src: '/',
     },
   };
   ```

### Start Dev Server

6. Run the Snowpack dev server:
   ```bash
   npx snowpack dev
   ```
7. Open your browser and verify the setup.

### React with Skypack

#### Add React Entry File

8. Create `src/main.jsx`:
   ```bash
   touch src/main.jsx
   ```

9. Add this content to `main.jsx`:
   ```javascript
   import React from 'https://cdn.skypack.dev/react';
   import ReactDOM from 'https://cdn.skypack.dev/react-dom';

   const App = () => {
     return (
       <h1>Hello World x2</h1>
     );
   };

   ReactDOM.render(<App />, document.getElementById("root"));
   ```

### Run Dev Server

11. Restart Snowpack’s dev server:
   ```bash
   npx snowpack dev
   ```
12. Open the browser, and your React app should now render "Hello World x2".

## Why This Approach Is Cool

- **Minimal Configuration**: Snowpack’s zero-config support eliminates the need for complex setup files.
- **CDN-Based Packages**: Skypack provides optimized, production-ready versions of libraries.
- **Native Modules**: `type="module"` in `<script>` uses modern JavaScript module syntax supported by most browsers.

## Next Steps

### Build the App

Once your app is ready for deployment, build it using:
```bash
npx snowpack build
```
This generates a production-ready version in the `build/` folder.

### Add Styling

You can create a `style.css` in the `src` folder and link it in `index.html`.

### Experiment with Libraries

Use other libraries from Skypack, e.g., `https://cdn.skypack.dev/axios`.

### Deploy

Use platforms like Vercel, Netlify, or even GitHub Pages for hosting.

Congratulations! 🎉 You’ve set up a modern, lightweight React environment.