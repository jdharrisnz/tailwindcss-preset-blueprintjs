import { resolve } from "path"
import dts from "vite-plugin-dts"

import typescript from "@rollup/plugin-typescript"

import type { UserConfig } from "vite"

const config: UserConfig = {
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "tailwindcss-preset-blueprintjs",
            fileName: "index"
        },
        outDir: "dist",
        rollupOptions: {
            plugins: [typescript()]
        }
    },
    plugins: [dts({ rollupTypes: true })]
}

export default config
