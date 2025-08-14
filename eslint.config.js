import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  {
    plugins: {
      react,
      js
    },
    rules: {
        // suppress errors for missing 'import React' in files
      "react/react-in-jsx-scope": "off",
        // allow jsx syntax in js files (for next.js project)
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }], //should add ".ts" if typescript project
    },
    files: [
      "**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"
    ],
    languageOptions: { 
      globals: globals.browser 
    },
  },
]);