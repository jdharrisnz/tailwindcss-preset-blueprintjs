import { parseNested } from "../utils/parseNested.js"

import type { TailwindConfig } from "../utils/parseNested.js"

export const fontFamilyConfig: Record<"fontFamily", TailwindConfig<true>> = {
    fontFamily: parseNested({
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
                "sans-serif"
            ],
            mono: ["monospace"]
        }
    })
}
