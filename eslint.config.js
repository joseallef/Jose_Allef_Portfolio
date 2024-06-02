import eslintPlugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser,
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": eslintPlugin,
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      // ...eslintPlugin.configs.recommended.rules,
      // ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      // 'linebreak-style': 0,
      // 'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
      "react-hooks/exhaustive-deps": "off"
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    ignores: [
      ".storybook/*",
      "cypress/"
    ],
  },
];

export default config;
