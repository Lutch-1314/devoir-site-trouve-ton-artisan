import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default defineConfig([
  globalIgnores(["dist", "node_modules"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      importPlugin.flatConfigs.recommended,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],

      "import/order": [
        "error",
        {
          groups: [
            "builtin", // ex: fs, path
            "external", // react, libs
            "internal", // alias éventuels
            "parent", // ../
            "sibling", // ./
            "index", // ./index
          ],

          "newlines-between": "always",

          alphabetize: { order: "asc", caseInsensitive: true },

          pathGroups: [
            {
              pattern: "../hooks/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "../components/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "../assets/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "../styles/**",
              group: "sibling",
              position: "after",
            },
          ],

          pathGroupsExcludedImportTypes: ["builtin"],
        },
      ],
      "import/newline-after-import": ["error", { count: 1 }],
      "import/no-unresolved": ["error", { ignore: ["^eslint/", "^@vitejs/"] }],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
        },
      },
    },
  },
]);
