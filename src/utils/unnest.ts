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

type Unnested<T> = ConcatenatedKeys<T> extends infer CK
    ? { [K in AllKeys<CK>]: Extract<CK, Record<K, unknown>>[K] }
    : never

export const unnest = <T extends Record<string, any>>(obj: T, parentKey = ""): Unnested<T> => {
    const result: Record<string, any> = {}

    Object.keys(obj).forEach((key) => {
        const value = obj[key]
        const fullKey = (() => {
            if (parentKey === "") {
                return String(key)
            }

            if (key === "DEFAULT") {
                return parentKey
            }

            return `${parentKey}-${String(key)}`
        })()

        if (typeof value === "object" && !Array.isArray(value)) {
            Object.assign(result, unnest(value, fullKey))
        } else {
            result[fullKey] = value
        }
    })

    return result as Unnested<T>
}
