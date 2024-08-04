const isRecord = (a: unknown): a is Record<string, unknown> =>
  typeof a === "object" && a !== null && !Array.isArray(a)

interface InputRecord {
  [x: string]: string | string[] | InputRecord
}

export const unnest = (
  obj: InputRecord,
  parentKey = ""
): Record<string, string | string[]> =>
  Object.entries(obj).reduce<Record<string, string | string[]>>(
    (acc, [key, value]) => {
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
    {}
  )
