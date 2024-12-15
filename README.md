# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# React_Learning
A repository documenting my journey of learning React.js. Contains hands-on projects, practice exercises, and code examples exploring core concepts of React.


# Install Tailwindcss with vite.

1. Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.
//command-1   npm install -D tailwindcss postcss autoprefixer 
//command-2   npx tailwindcss init -p

2. Add the paths to all of your template files in your tailwind.config.js file.
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

3. Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

   @tailwind base;
   @tailwind components;
   @tailwind utilities; 
