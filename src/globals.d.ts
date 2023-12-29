interface ObjectConstructor {
    entries<T>(
        object: T
    ): Extract<keyof T, string> extends never
        ? [string, T[keyof T]][]
        : { [K in keyof T]: [K, T[K]] }[keyof T][]

    fromEntries<V, T extends [PropertyKey, V][]>(
        entries: T
    ): {
        [K in T[number][0]]: Extract<T[number], [K, V]>[1]
    }

    keys<T>(object: T): Extract<keyof T, string> extends never ? string[] : (keyof T)[]

    values<T>(object: T): T[keyof T][]
}
