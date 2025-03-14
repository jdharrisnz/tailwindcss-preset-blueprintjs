import { exec } from "node:child_process"
import * as fs from "node:fs/promises"
import * as path from "node:path"
import { Colors } from "@blueprintjs/colors"

import { unnest } from "../utils/unnest.ts"

const HexOpacity = {
  p10: "1a",
  p15: "26",
  p20: "33",
  p30: "4d",
  p40: "66",
  p60: "99",
  p70: "b3",
} as const

export const colorsConfig = {
  colors: unnest({
    bp5: {
      black: Colors.BLACK,
      white: Colors.WHITE,
      "dark-gray": {
        1: Colors.DARK_GRAY1,
        2: Colors.DARK_GRAY2,
        3: Colors.DARK_GRAY3,
        4: Colors.DARK_GRAY4,
        5: Colors.DARK_GRAY5,
      },
      gray: {
        1: Colors.GRAY1,
        2: Colors.GRAY2,
        3: Colors.GRAY3,
        4: Colors.GRAY4,
        5: Colors.GRAY5,
      },
      "light-gray": {
        1: Colors.LIGHT_GRAY1,
        2: Colors.LIGHT_GRAY2,
        3: Colors.LIGHT_GRAY3,
        4: Colors.LIGHT_GRAY4,
        5: Colors.LIGHT_GRAY5,
      },
      blue: {
        1: Colors.BLUE1,
        2: Colors.BLUE2,
        3: Colors.BLUE3,
        4: Colors.BLUE4,
        5: Colors.BLUE5,
      },
      green: {
        1: Colors.GREEN1,
        2: Colors.GREEN2,
        3: Colors.GREEN3,
        4: Colors.GREEN4,
        5: Colors.GREEN5,
      },
      orange: {
        1: Colors.ORANGE1,
        2: Colors.ORANGE2,
        3: Colors.ORANGE3,
        4: Colors.ORANGE4,
        5: Colors.ORANGE5,
      },
      red: {
        1: Colors.RED1,
        2: Colors.RED2,
        3: Colors.RED3,
        4: Colors.RED4,
        5: Colors.RED5,
      },
      vermilion: {
        1: Colors.VERMILION1,
        2: Colors.VERMILION2,
        3: Colors.VERMILION3,
        4: Colors.VERMILION4,
        5: Colors.VERMILION5,
      },
      rose: {
        1: Colors.ROSE1,
        2: Colors.ROSE2,
        3: Colors.ROSE3,
        4: Colors.ROSE4,
        5: Colors.ROSE5,
      },
      violet: {
        1: Colors.VIOLET1,
        2: Colors.VIOLET2,
        3: Colors.VIOLET3,
        4: Colors.VIOLET4,
        5: Colors.VIOLET5,
      },
      indigo: {
        1: Colors.INDIGO1,
        2: Colors.INDIGO2,
        3: Colors.INDIGO3,
        4: Colors.INDIGO4,
        5: Colors.INDIGO5,
      },
      cerulean: {
        1: Colors.CERULEAN1,
        2: Colors.CERULEAN2,
        3: Colors.CERULEAN3,
        4: Colors.CERULEAN4,
        5: Colors.CERULEAN5,
      },
      turquoise: {
        1: Colors.TURQUOISE1,
        2: Colors.TURQUOISE2,
        3: Colors.TURQUOISE3,
        4: Colors.TURQUOISE4,
        5: Colors.TURQUOISE5,
      },
      forest: {
        1: Colors.FOREST1,
        2: Colors.FOREST2,
        3: Colors.FOREST3,
        4: Colors.FOREST4,
        5: Colors.FOREST5,
      },
      lime: {
        1: Colors.LIME1,
        2: Colors.LIME2,
        3: Colors.LIME3,
        4: Colors.LIME4,
        5: Colors.LIME5,
      },
      gold: {
        1: Colors.GOLD1,
        2: Colors.GOLD2,
        3: Colors.GOLD3,
        4: Colors.GOLD4,
        5: Colors.GOLD5,
      },
      sepia: {
        1: Colors.SEPIA1,
        2: Colors.SEPIA2,
        3: Colors.SEPIA3,
        4: Colors.SEPIA4,
        5: Colors.SEPIA5,
      },
      intent: {
        primary: Colors.BLUE3,
        success: Colors.GREEN3,
        warning: Colors.ORANGE3,
        danger: Colors.RED3,
      },
      "app-background-color": {
        DEFAULT: Colors.LIGHT_GRAY5,
        dark: Colors.DARK_GRAY1,
      },
      "text-color": {
        DEFAULT: Colors.DARK_GRAY1,
        dark: Colors.LIGHT_GRAY5,
        muted: {
          DEFAULT: Colors.GRAY1,
          dark: Colors.GRAY4,
        },
        disabled: {
          DEFAULT: Colors.GRAY1 + HexOpacity.p60,
          dark: Colors.GRAY4 + HexOpacity.p60,
        },
      },
      "heading-color": {
        DEFAULT: Colors.DARK_GRAY1,
        dark: Colors.LIGHT_GRAY5,
      },
      "link-color": {
        DEFAULT: Colors.BLUE2,
        dark: Colors.BLUE5,
      },
      "text-selection-color": `#7dbcff${HexOpacity.p60}`,
      "icon-color": {
        DEFAULT: Colors.GRAY1,
        dark: Colors.GRAY4,
        hover: {
          DEFAULT: Colors.DARK_GRAY1,
          dark: Colors.LIGHT_GRAY5,
        },
        disabled: {
          DEFAULT: `${Colors.GRAY1}${HexOpacity.p60}`,
          dark: `${Colors.GRAY4}${HexOpacity.p60}`,
        },
        selected: {
          DEFAULT: Colors.BLUE3,
          dark: Colors.BLUE3,
        },
      },
      divider: {
        black: {
          DEFAULT: `${Colors.BLACK}${HexOpacity.p15}`,
          dark: `${Colors.BLACK}${HexOpacity.p40}`,
          muted: `${Colors.BLACK}${HexOpacity.p10}`,
        },
        white: {
          dark: `${Colors.WHITE}${HexOpacity.p20}`,
          muted: `${Colors.WHITE}${HexOpacity.p10}`,
        },
      },
      code: {
        "text-color": {
          DEFAULT: Colors.GRAY1,
          dark: Colors.GRAY4,
        },
        "background-color": {
          DEFAULT: `${Colors.WHITE}${HexOpacity.p70}`,
          dark: `${Colors.BLACK}${HexOpacity.p30}`,
        },
      },
    },
  }),
}

export const writeColorsConfig = async () => {
  const file = path.resolve("output", "colorsConfig.ts")

  return fs
    .writeFile(
      file,
      `export const colorsConfig = ${JSON.stringify(colorsConfig, undefined, 2)}`,
    )
    .then(() => exec(`prettier -w ${file}`))
}
