import { exec } from "node:child_process"
import * as fs from "node:fs/promises"
import * as path from "node:path"

import { unnest } from "../utils/unnest.ts"

export const spacingConfig = {
  spacing: unnest({
    bp5: {
      grid: {
        "0.5": "5px",
        1: "10px",
        "1.5": "15px",
        2: "20px",
        3: "30px",
        4: "40px",
      },
    },
  }),
}

export const writeSpacingConfig = async () => {
  const file = path.resolve("src", "output", "spacingConfig.ts")

  return fs
    .writeFile(
      file,
      `export const spacingConfig = ${JSON.stringify(spacingConfig, undefined, 2)}`,
    )
    .then(() => exec(`prettier -w ${file}`))
}
