/** @type {import("prettier").Config} */

const config = {
    plugins: ["prettier-plugin-jsdoc", "prettier-plugin-tailwindcss"],
    printWidth: 100,
    proseWrap: "always",
    semi: false,
    tabWidth: 4,
    trailingComma: "none"
}

export default config
