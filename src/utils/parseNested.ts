/** FontFamily requires `string[]` values. */
type StringOrList<L extends boolean = false> = L extends true ? string[] : string

type ObjectableEntry<L extends boolean = false> = [string, StringOrList<L>]

type NestedEntries<L extends boolean = false> = (ObjectableEntry<L> | NestedEntries<L>)[]

const elementIsEntry = <L extends boolean = false>(
    element: ObjectableEntry<L> | NestedEntries<L>
): element is ObjectableEntry<L> => typeof element[0] === "string"

const flattenToEntries = <L extends boolean = false>(
    array: NestedEntries<L>
): ObjectableEntry<L>[] => {
    const result: ObjectableEntry<L>[] = []

    array.forEach((element) => {
        if (elementIsEntry(element)) {
            result.push(element)
        } else {
            // bug workaround - element was not narrowing without this
            const typeFix = element
            result.push(...flattenToEntries(typeFix))
        }
    })

    return result
}

interface ArrayableObject<L extends boolean = false> {
    [key: string]: StringOrList<L> | ArrayableObject<L>
}

const valueIsStringAndMaybeList = <L extends boolean = false>(
    value: StringOrList<L> | ArrayableObject<L>
): value is StringOrList<L> => typeof value === "string" || Array.isArray(value)

const arrayifyConfig = <L extends boolean = false>(
    object: ArrayableObject<L>,
    parentName = ""
): NestedEntries<L> =>
    Object.entries(object).map(([key, value]) => {
        const newKey: string = (() => {
            if (parentName === "") {
                return key
            }

            if (key === "DEFAULT") {
                return parentName
            }

            return `${parentName}-${key}`
        })()

        if (valueIsStringAndMaybeList<L>(value)) {
            return [newKey, value]
        }

        // bug workaround - element was not narrowing without this
        const typeFix = value
        return arrayifyConfig(typeFix, newKey)
    })

export type TailwindConfig<L extends boolean = false> = Record<string, StringOrList<L>>

export const parseNested = <L extends boolean = false>(
    object: ArrayableObject<L>
): TailwindConfig<L> => Object.fromEntries(flattenToEntries(arrayifyConfig(object)))
