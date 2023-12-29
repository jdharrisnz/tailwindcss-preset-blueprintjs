import { colorsConfig } from "./colorsConfig"
import { shadowsConfig } from "./shadowsConfig"
import { fontFamilyConfig } from "./fontFamilyConfig"
import { transitionTimingConfig } from "./transitionTimingConfig"

import type { Config } from "tailwindcss"

export const blueprint: Config = {
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
