import { nodeResolve } from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"

import type { RollupOptions } from "rollup"

const config: RollupOptions[] = [
    {
        input: ["./src/bp5/blueprint.ts"],
        output: {
            format: "esm",
            dir: "./dist/esm",
            preserveModules: true,
            preserveModulesRoot: "src"
        },
        plugins: [nodeResolve(), typescript({ tsconfig: "./tsconfig.json" })]
    },
    {
        input: ["./src/bp5/blueprint.ts"],
        output: {
            format: "cjs",
            dir: "./dist/cjs",
            preserveModules: true,
            preserveModulesRoot: "src"
        },
        plugins: [nodeResolve(), typescript({ tsconfig: "./tsconfig.cjs.json" })]
    }
]

export default config
