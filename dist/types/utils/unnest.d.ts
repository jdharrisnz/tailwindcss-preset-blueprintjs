type ConcatenatedKeys<T, Key extends string = ""> = T extends string | string[] | readonly string[] ? Record<Key, T> : T extends object ? {
    [K in keyof T]: ConcatenatedKeys<T[K], Key extends "" ? K & string : K extends "DEFAULT" ? Key : `${Key}-${K & string}`>;
}[keyof T] : never;
type AllKeys<T> = T extends unknown ? keyof T : never;
type Unnested<T> = ConcatenatedKeys<T> extends infer CK ? {
    [K in AllKeys<CK>]: Extract<CK, Record<K, unknown>>[K];
} : never;
export declare const unnest: <T extends Record<string, any>>(obj: T, parentKey?: string) => Unnested<T>;
export {};
