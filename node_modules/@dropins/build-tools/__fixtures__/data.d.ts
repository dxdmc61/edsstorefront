declare const a: "\nquery TEST_QUERY {\n  user {\n    name\n    email\n    address {\n      city\n      country\n    }\n  }\n}\n";
declare const b: "\nfragment USER_FRAGMENT on User {\n  name\n  email\n  address {\n    city\n    country\n  }\n}\n";
declare const c: string;
declare const d: "\nfragment FRAGMENT on Cart {\n  id\n  items(param1: $param1, param2: $param2) {\n    list {\n      id\n      ... on SimpleCartItem {\n        customizable_options {\n          type\n        }\n      }\n    }\n  }\n}\n";
declare const e: string;
declare const f: "query STRING_QUERY { flag }";
export function g(): void;
export { a as TEST_QUERY, b as USER_FRAGMENT, c as TEST_QUERY_WITH_FRAGMENT, d as FRAGMENT, e as COMPLEX_QUERY, f as STRING_QUERY };
//# sourceMappingURL=data.d.ts.map