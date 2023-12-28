import parseNested from "../utils/parseNested"

export default {
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
