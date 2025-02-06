const isRecord = (a: unknown): a is Record<string, unknown> =>
  typeof a === "object" && a !== null && !Array.isArray(a)

interface InputRecord {
  readonly [x: string]: string | ReadonlyArray<string> | InputRecord
}

export const unnest = (
  input: InputRecord,
  parentKey = "",
): Readonly<Record<string, string | ReadonlyArray<string>>> =>
  Object.entries(input).reduce(
    (acc: Record<string, string | ReadonlyArray<string>>, [key, value]) => {
      let fullKey = `${parentKey}-${key}`

      // No parent
      if (parentKey === "") {
        fullKey = key
      }

      // Default doesn't have any identifier
      if (key === "DEFAULT") {
        fullKey = parentKey
      }

      // Recurse
      if (isRecord(value)) {
        Object.assign(acc, unnest(value, fullKey))
        return acc
      }

      // Assign if reached bottom
      acc[fullKey] = value
      return acc
    },
    {},
  )
