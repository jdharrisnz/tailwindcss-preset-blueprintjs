import parseNested from "../utils/parseNested"

export default {
    transitionTimingFunction: parseNested({
        bp5: {
            DEFAULT: "cubic-bezier(0.4, 1, 0.75, 0.9)",
            bounce: "cubic-bezier(0.54, 1.12, 0.38, 1.11)"
        }
    })
}
