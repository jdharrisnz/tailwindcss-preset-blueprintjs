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
  const file = path.resolve("src", "output", "blueprint.ts")

  return fs
    .writeFile(
      file,
      `export const blueprint = ${JSON.stringify(blueprint, undefined, 2)}`,
    )
    .then(() => exec(`prettier -w ${file}`))
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
