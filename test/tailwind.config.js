/** @type {import('tailwindcss').Config} */

export default {
    content: ["./test/index.html"],
    presets: [require("../presets/bp5/blueprint")],
    theme: {
        extend: {}
    },
    plugins: [],
    corePlugins: {
        preflight: false
    },
    experimental: {
        optimizeUniversalDefaults: true
    }
}
