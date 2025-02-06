// @ts-check

import pluginJs from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
  {
    name: "project",
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.node,
      sourceType: "module",
    },
  },
  pluginJs.configs.recommended,
  {
    name: "js",
    rules: {
      "arrow-body-style": "warn",
      eqeqeq: "error",
    },
  },
  tseslint.configs.strictTypeChecked,
  {
    name: "ts",
    rules: {
      /** Stylistic. */
      "@typescript-eslint/member-ordering": "warn",
      /** A valid and useful type in some cases. */
      "@typescript-eslint/no-empty-object-type": "off",
      /** Explicit `any` to be used wisely and sparingly. */
      "@typescript-eslint/no-explicit-any": "off",
      /** Allow namespace declarations. */
      "@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
      /** Next five prevent use of the explicit `any` escape hatches. */
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-shadow": ["warn", { allow: ["_"] }],
      /** Strings and numbers allowed in template expressions. */
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
        },
      ],
    },
  },
)
