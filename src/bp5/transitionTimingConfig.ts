/* eslint-disable @typescript-eslint/naming-convention */
import { parseNested } from "../utils/parseNested.js"

import type { TailwindConfig } from "../utils/parseNested.js"

export const transitionTimingConfig: Record<"transitionTimingFunction", TailwindConfig> = {
    transitionTimingFunction: parseNested({
        bp5: {
            DEFAULT: "cubic-bezier(0.4, 1, 0.75, 0.9)",
            bounce: "cubic-bezier(0.54, 1.12, 0.38, 1.11)"
        }
    })
}
