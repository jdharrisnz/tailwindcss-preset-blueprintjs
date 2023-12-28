/** @type {import('tailwindcss').Config} */
import colorsConfig from "./colorsConfig"
import shadowsConfig from "./shadowsConfig"
import fontFamilyConfig from "./fontFamilyConfig"
import transitionTimingConfig from "./transitionTimingConfig"

export default {
    theme: {
        extend: {
            ...colorsConfig,
            ...shadowsConfig,
            ...fontFamilyConfig,
            ...transitionTimingConfig
        }
    }
}
