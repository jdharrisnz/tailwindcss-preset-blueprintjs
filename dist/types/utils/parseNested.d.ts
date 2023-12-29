type StringOrList<L extends boolean = false> = L extends true ? string[] : string;
interface ArrayableObject<L extends boolean = false> {
    [key: string]: StringOrList<L> | ArrayableObject<L>;
}
export type TailwindConfig<L extends boolean = false> = Record<string, StringOrList<L>>;
export declare const parseNested: <L extends boolean = false>(object: ArrayableObject<L>) => TailwindConfig<L>;
export {};
