import { exec } from "node:child_process"
import * as fs from "node:fs/promises"
import * as path from "node:path"

import { unnest } from "../utils/unnest.ts"

export const transitionTimingConfig = {
  transitionTimingFunction: unnest({
    bp5: {
      DEFAULT: "cubic-bezier(0.4, 1, 0.75, 0.9)",
      bounce: "cubic-bezier(0.54, 1.12, 0.38, 1.11)",
    },
  }),
}

export const writeTransitionTimingConfig = async () => {
  const file = path.resolve("output", "transitionTimingConfig.ts")

  return fs
    .writeFile(
      file,
      `export const transitionTimingConfig = ${JSON.stringify(transitionTimingConfig, undefined, 2)}`,
    )
    .then(() => exec(`prettier -w ${file}`))
}
