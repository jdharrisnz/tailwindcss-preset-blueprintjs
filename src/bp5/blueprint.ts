import { colorsConfig } from "./colorsConfig.js"
import { shadowsConfig } from "./shadowsConfig.js"
import { fontFamilyConfig } from "./fontFamilyConfig.js"
import { transitionTimingConfig } from "./transitionTimingConfig.js"

/** Deliberately not typed as `Config` to avoid Tailwind version compatibility issues. */
export const blueprint = {
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
