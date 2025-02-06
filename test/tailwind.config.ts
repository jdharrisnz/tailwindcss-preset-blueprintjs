import blueprint from "../src/index.ts"

import type { Config } from "tailwindcss"

export default {
  content: ["./test/index.html"],
  presets: [blueprint],
} satisfies Config
