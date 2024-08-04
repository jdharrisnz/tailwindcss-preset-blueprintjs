import { colorsConfig } from "./colorsConfig"
import { fontFamilyConfig } from "./fontFamilyConfig"
import { shadowsConfig } from "./shadowsConfig"
import { transitionTimingConfig } from "./transitionTimingConfig"

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
