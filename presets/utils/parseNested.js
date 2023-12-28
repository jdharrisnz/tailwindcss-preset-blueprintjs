const flattenToEntries = (array) => {
    const result = []

    array.forEach((element) => {
        if (typeof element[0] === "string") {
            result.push(element)
        } else {
            result.push(...flattenToEntries(element))
        }
    })

    return result
}

const arrayifyConfig = (object, parentName = "") =>
    Object.entries(object).map(([key, value]) => {
        const newKey = (() => {
            if (parentName === "") {
                return key
            } else if (key === "DEFAULT") {
                return parentName
            } else {
                return `${parentName}-${key}`
            }
        })()

        // value is string, string array, or nested object
        if (typeof value === "string" || Array.isArray(value)) {
            return [newKey, value]
        } else {
            return arrayifyConfig(value, newKey)
        }
    })

const parseNested = (object) => Object.fromEntries(flattenToEntries(arrayifyConfig(object)))

export default parseNested
