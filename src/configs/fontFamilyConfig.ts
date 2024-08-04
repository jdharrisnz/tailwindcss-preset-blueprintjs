import * as fs from "fs"

import { unnest } from "../utils/unnest.js"

export const fontFamilyConfig = {
  fontFamily: unnest({
    bp5: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "blueprint-icons-16",
        "sans-serif"
      ],
      mono: ["monospace"]
    }
  })
}

fs.writeFileSync(
  "./src/output/fontFamilyConfig.ts",
  `export const fontFamilyConfig = ${JSON.stringify(fontFamilyConfig, undefined, 2)}`
)
