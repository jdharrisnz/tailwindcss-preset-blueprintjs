import blueprint from "../src/index.js"

import type { Config } from "tailwindcss"

const config: Config = {
    content: ["./test/index.html"],
    presets: [blueprint],
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

export default config
