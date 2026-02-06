import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([{
  files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
  plugins: { js, "@stylistic": stylistic },
  extends: ["js/recommended"],
  rules: {
    "indent": ["error", 2],
    "quotes": ["error", "double", { allowTemplateLiterals: true }],
    "semi": ["error", "always"]
  },
  languageOptions: { globals: globals.browser } },
tseslint.configs.recommended,
]);
