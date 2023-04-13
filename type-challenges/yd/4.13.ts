// Implement the advanced util type RequiredKeys<T>, which picks all the required keys into a union.
// For example



type Result = RequiredKeys<{ foo: number; bar?: string }>;

type RequiredKeys<T, K = keyof T> = K extends keyof T ? T extends Required<Pick<T, K>> ? K : never : never;

// expected to be “foo”

// ----我是分割线---
//     Implement Capitalize < T > which converts the first letter of a string to uppercase and leave the rest as- is.
// For example



type capitalized = myCapitalize<'hello world'> // expected to be 'Hello world'
type myCapitalize<S extends string> = S extends `${infer A}${infer B}` ? `${Uppercase<A>}${B}` : S;


// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.
// For example
type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
type whitespace = ' ' | '\t' | '\n'
type TrimLeft<S extends string> = S extends `${whitespace}${infer B}`
    ? TrimLeft<B>
    : S;
// ------我是分割线------

// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.
// For example



type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
type parrent = ' ' | '\t' | '\n'
type Trim<S extends string> = S extends `${parrent}${infer B}`
    ? Trim<B> : S extends `${infer C}${parrent}`
    ? Trim<C>
    : S;

