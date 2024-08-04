/* eslint-disable @typescript-eslint/naming-convention */
import { unnest } from "../utils/unnest"

export const transitionTimingConfig = {
  transitionTimingFunction: unnest({
    bp5: {
      DEFAULT: "cubic-bezier(0.4, 1, 0.75, 0.9)",
      bounce: "cubic-bezier(0.54, 1.12, 0.38, 1.11)"
    }
  })
}
