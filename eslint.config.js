import plugin_typescript from "@typescript-eslint/eslint-plugin";
import plugin_prettier from "eslint-config-prettier";
import plugin_react_hooks from "eslint-plugin-react-hooks";
import plugin_jsx_a11y from "eslint-plugin-jsx-a11y";
import plugin_import from "eslint-plugin-import";

import parser from "@typescript-eslint/parser";

import config_prettier from "eslint-config-prettier";
import config_typescript from "eslint-plugin-react/configs/recommended.js";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  { ignores: [".yarn/", ".cache/", "public/"] },
  config_prettier,
  config_typescript,
  /** @type {import("eslint").Linter.FlatConfig} */ ({
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      parser: parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          impliedStrict: true
        }
      }
    },
    // env: {
    //   browser: true,
    //   es2021: true
    // },
    // extends: ["plugin:react/recommended", "prettier"],
    plugins: {
      "@typescript-eslint": plugin_typescript,
      prettier: plugin_prettier,
      "react-hooks": plugin_react_hooks,
      "jsx-a11y": plugin_jsx_a11y,
      import: plugin_import
    },
    rules: {
      semi: 2,
      "@typescript-eslint/explicit-member-accessibility": 2,
      "@typescript-eslint/no-explicit-any": 2,
      "@typescript-eslint/no-unused-vars": 2,
      "@typescript-eslint/interface-name-prefix": 0,
      "react/self-closing-comp": 2
    },
    settings: {
      react: {
        version: "18"
      }
    },
    files: ["**/*.{ts,tsx,js}"]
  })
];
