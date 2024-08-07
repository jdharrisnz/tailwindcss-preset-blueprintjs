/** @type {import("prettier").Config} */

const config = {
  plugins: ["prettier-plugin-jsdoc", "prettier-plugin-tailwindcss"],
  printWidth: 80,
  proseWrap: "always",
  semi: false,
  tabWidth: 2,
  trailingComma: "none"
}

export default config
