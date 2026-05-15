# JS Webpack Boilerplate

A clean, pre-configured starter template for modern vanilla JavaScript projects. Ideal for coding challenges, small utility applications, or as a solid foundation for larger projects.

## 🚀 Features

* **Bundler:** [Webpack 5](https://webpack.js.org/) (pre-configured for JS, CSS, and assets).
* **Code Quality:** [ESLint](https://eslint.org/) for static code analysis.
* **Formatting:** [Prettier](https://prettier.io/) for consistent code style.
* **Testing:** [Jest](https://jestjs.io/) for unit testing and Test-Driven Development (TDD).
* **Dev Experience:** Webpack Dev Server with Hot Module Replacement (HMR).
* **Styling:** Integrated `css-loader` and `style-loader` for seamless CSS management.

## 🛠️ Installation & Setup

1. **Use this Template:**
   Click the **"Use this template"** button on GitHub to create a new repository based on this boilerplate.

2. **Clone Locally:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/YOUR_PROJECT_NAME.git](https://github.com/YOUR_USERNAME/YOUR_PROJECT_NAME.git)
   cd YOUR_PROJECT_NAME

3. **Install Dependencies:**
   ```bash
   npm install

4. **Customize Project Info:**
Open `package.json` and update the `name`, `description`, and `repository` fields to match your new project.

## 📁 Folder Structure

```text
├── src/
│   ├── index.js          # Main entry point for Webpack
│   ├── index.test.js     # Sample Jest test file
│   └── styles.css        # Global stylesheet
├── .gitignore            # Files excluded from Git (node_modules, dist, etc.)
├── .prettierrc           # Prettier code formatting rules
├── eslint.config.mjs     # ESLint linting configuration
├── webpack.config.js     # Webpack build and dev server configuration
└── package.json          # Project metadata, scripts, and dependencies
