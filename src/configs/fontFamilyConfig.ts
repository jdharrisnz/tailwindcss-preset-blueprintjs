import { exec } from "node:child_process"
import * as fs from "node:fs/promises"
import * as path from "node:path"

import { unnest } from "../utils/unnest.ts"

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
        "sans-serif",
      ],
      mono: ["monospace"],
    },
  }),
}

export const writeFontFamilyConfig = async () => {
  const file = path.resolve("output", "fontFamilyConfig.ts")

  return fs
    .writeFile(
      file,
      `export const fontFamilyConfig = ${JSON.stringify(fontFamilyConfig, undefined, 2)}`,
    )
    .then(() => exec(`prettier -w ${file}`))
}
