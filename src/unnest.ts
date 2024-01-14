/* eslint-disable @typescript-eslint/no-explicit-any */
type ConcatenatedKeys<T, Key extends string = ""> = T extends string | string[] | readonly string[]
    ? Record<Key, T>
    : T extends object
      ? {
            [K in keyof T]: ConcatenatedKeys<
                T[K],
                Key extends "" ? K & string : K extends "DEFAULT" ? Key : `${Key}-${K & string}`
            >
        }[keyof T]
      : never

type AllKeys<T> = T extends unknown ? keyof T : never

type Unnested<T> =
    ConcatenatedKeys<T> extends infer CK
        ? { [K in AllKeys<CK>]: Extract<CK, Record<K, unknown>>[K] }
        : never

export const unnest = <T extends Record<string, any>>(obj: T, parentKey = ""): Unnested<T> => {
    const result: Record<string, any> = {}

    Object.keys(obj).forEach((key) => {
        const value = obj[key]
        let fullKey = `${parentKey}-${String(key)}`
        if (parentKey === "") fullKey = String(key)
        if (key === "DEFAULT") fullKey = parentKey

        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            Object.assign(result, unnest(value, fullKey))
        } else {
            result[fullKey] = value
        }
    })

    return result as Unnested<T>
}
