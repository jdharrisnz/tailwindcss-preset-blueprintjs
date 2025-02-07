import { exec } from "node:child_process"
import * as fs from "node:fs/promises"
import * as path from "node:path"

import { colorsConfig, writeColorsConfig } from "./colorsConfig.ts"
import { fontFamilyConfig, writeFontFamilyConfig } from "./fontFamilyConfig.ts"
import { shadowsConfig, writeShadowsConfig } from "./shadowsConfig.ts"
import { spacingConfig, writeSpacingConfig } from "./spacingConfig.ts"
import {
  transitionTimingConfig,
  writeTransitionTimingConfig,
} from "./transitionTimingConfig.ts"

import type { Config } from "tailwindcss"

const blueprint: Config = {
  theme: {
    extend: {
      ...colorsConfig,
      ...spacingConfig,
      ...shadowsConfig,
      ...fontFamilyConfig,
      ...transitionTimingConfig,
    },
  },
}

const writeBlueprintConfig = async () => {
  const bpFile = path.resolve("output", "blueprint.ts")
  const indexFile = path.resolve("output", "index.ts")

  return fs
    .writeFile(
      bpFile,
      `export const blueprint = ${JSON.stringify(blueprint, undefined, 2)}`,
    )
    .then(() => exec(`prettier -w ${bpFile}`))
    .then(() =>
      fs.writeFile(
        indexFile,
        `
        import { blueprint } from "./blueprint.js"
        
        export default blueprint
        export { blueprint } from "./blueprint.js"
        export { colorsConfig } from "./colorsConfig.js"
        export { fontFamilyConfig } from "./fontFamilyConfig.js"
        export { shadowsConfig } from "./shadowsConfig.js"
        export { spacingConfig } from "./spacingConfig.js"
        export { transitionTimingConfig } from "./transitionTimingConfig.js"
        `,
      ),
    )
    .then(() => exec(`prettier -w ${indexFile}`))
}

await Promise.all([
  writeBlueprintConfig(),
  writeColorsConfig(),
  writeFontFamilyConfig(),
  writeShadowsConfig(),
  writeSpacingConfig(),
  writeTransitionTimingConfig(),
]).then(() => {
  console.log("Wrote plain unnested TS files.")
})
