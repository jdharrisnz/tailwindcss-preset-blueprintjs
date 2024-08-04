import * as fs from "fs"

import { colorsConfig } from "./colorsConfig.js"
import { fontFamilyConfig } from "./fontFamilyConfig.js"
import { shadowsConfig } from "./shadowsConfig.js"
import { transitionTimingConfig } from "./transitionTimingConfig.js"

const blueprint = {
  content: [],
  theme: {
    extend: {
      ...colorsConfig,
      ...shadowsConfig,
      ...fontFamilyConfig,
      ...transitionTimingConfig
    }
  }
}

fs.writeFileSync(
  "./src/output/blueprint.ts",
  `export const blueprint = ${JSON.stringify(blueprint, undefined, 2)}`,
  {}
)
