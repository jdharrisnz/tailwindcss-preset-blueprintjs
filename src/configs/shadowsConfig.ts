import * as fs from "fs"

import { unnest } from "../utils/unnest.js"

export const shadowsConfig = {
  boxShadow: unnest({
    bp5: {
      elevation: {
        0: {
          DEFAULT: "0 0 0 1px rgba(17, 20, 24, 0.15)",
          dark: "inset 0 0 0 1px rgba(255, 255, 255, 0.2)"
        },
        1: {
          DEFAULT: [
            "0 0 0 1px rgba(17, 20, 24, 0.1)",
            "0 1px 1px rgba(17, 20, 24, 0.2)"
          ].join(", "),
          dark: [
            "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
            "0 1px 1px 0 rgba(17, 20, 24, 0.4)"
          ].join(", ")
        },
        2: {
          DEFAULT: [
            "0 0 0 1px rgba(17, 20, 24, 0.1)",
            "0 1px 1px rgba(17, 20, 24, 0.2)",
            "0 2px 6px rgba(17, 20, 24, 0.2)"
          ].join(", "),
          dark: [
            "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
            "0 1px 1px rgba(17, 20, 24, 0.4)",
            "0 2px 6px rgba(17, 20, 24, 0.4)"
          ].join(", ")
        },
        3: {
          DEFAULT: [
            "0 0 0 1px rgba(17, 20, 24, 0.1)",
            "0 2px 4px rgba(17, 20, 24, 0.2)",
            "0 8px 24px rgba(17, 20, 24, 0.2)"
          ].join(", "),
          dark: [
            "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
            "0 2px 4px rgba(17, 20, 24, 0.4)",
            "0 8px 24px rgba(17, 20, 24, 0.4)"
          ].join(", ")
        },
        4: {
          DEFAULT: [
            "0 0 0 1px rgba(17, 20, 24, 0.1)",
            "0 4px 8px rgba(17, 20, 24, 0.2)",
            "0 18px 46px 6px rgba(17, 20, 24, 0.2)"
          ].join(", "),
          dark: [
            "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
            "0 4px 8px rgba(17, 20, 24, 0.4)",
            "0 18px 46px 6px rgba(17, 20, 24, 0.4)"
          ].join(", ")
        }
      },
      input: {
        DEFAULT: [
          "inset 0 0 0 1px rgba(17, 20, 24, 0.2)",
          "inset 0 1px 1px rgba(17, 20, 24, 0.3)"
        ].join(", "),
        dark: [
          "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
          "inset 0 -1px 1px 0 rgba(255, 255, 255, 0.3)"
        ].join(", ")
      },
      dialog: {
        DEFAULT: [
          "0 0 0 1px rgba(17, 20, 24, 0.1)",
          "0 2px 4px rgba(17, 20, 24, 0.2)",
          "0 8px 24px rgba(17, 20, 24, 0.2)"
        ].join(", "),
        dark: [
          "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
          "0 2px 4px rgba(17, 20, 24, 0.4)",
          "0 8px 24px rgba(17, 20, 24, 0.4)"
        ].join(", ")
      },
      popover: {
        DEFAULT: [
          "0 0 0 1px rgba(17, 20, 24, 0.1)",
          "0 2px 4px rgba(17, 20, 24, 0.2)",
          "0 8px 24px rgba(17, 20, 24, 0.2)"
        ].join(", "),
        dark: [
          "0 0 0 1px hsl(215, 3%, 38%)",
          "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
          "0 2px 4px rgba(17, 20, 24, 0.4)",
          "0 8px 24px rgba(17, 20, 24, 0.4)"
        ].join(", ")
      },
      tooltip: {
        DEFAULT: [
          "0 0 0 1px rgba(17, 20, 24, 0.1)",
          "0 2px 4px rgba(17, 20, 24, 0.2)",
          "0 8px 24px rgba(17, 20, 24, 0.2)"
        ].join(", "),
        dark: [
          "0 2px 4px rgba(17, 20, 24, 0.4)",
          "0 8px 24px rgba(17, 20, 24, 0.4)"
        ].join(", ")
      },
      toast: {
        DEFAULT: [
          "inset 0 0 0 1px rgba(17, 20, 24, 0.2)",
          "0 2px 4px rgba(17, 20, 24, 0.2)",
          "0 8px 24px rgba(17, 20, 24, 0.2)"
        ].join(", "),
        dark: [
          "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
          "0 2px 4px rgba(17, 20, 24, 0.2 * 2)",
          "0 8px 24px rgba(17, 20, 24, 0.2 * 2)"
        ].join(", ")
      }
    }
  })
}

fs.writeFileSync(
  "./src/output/shadowsConfig.ts",
  `export const shadowsConfig = ${JSON.stringify(shadowsConfig, undefined, 2)}`
)
