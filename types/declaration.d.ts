// Declare bundler files so they can be read by tsx
declare module "*.svg";
declare module "*.jpg";
declare module "*.png";

declare module "*.mp4";

// CSS and SCSS for the bundler
declare module "*.module.css";
declare module "*.module.scss";

// FIXME: @types def missing
declare module "eslint-plugin-react-hooks" {}
declare module "eslint-plugin-jsx-a11y" {}
declare module "eslint-plugin-react/configs/recommended.js" {}
