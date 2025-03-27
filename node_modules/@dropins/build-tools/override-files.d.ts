export type GQLOverride = {
    npm: string;
    operations: string[];
} | {
    npm: string;
    skipFragments: string[];
} | {
    npm: string;
    operations: string[];
    skipFragments: string[];
};
export declare function overrideGQLOperations(overrides?: GQLOverride[]): Promise<void>;
export default overrideGQLOperations;
//# sourceMappingURL=override-files.d.ts.map