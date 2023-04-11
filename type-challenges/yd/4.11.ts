// Type the function PromiseAll that accepts an array of PromiseLike objects, the returning value should be Promise<T> where T is the resolved result array.

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise<string>((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });

// // expected to be `Promise<[number, 42, string]>`
// const p = PromiseAll([promise1, promise2, promise3] as const);
// declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>;
// // Implement the advanced util type UnionToIntersection<U>

// For example

type I = UnionToIntersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
// type Union2Intersection<U> = ([U] extends [U] ? <U>(args: U) => void : never) extends
//     (args: infer T) => void
//     ? T
//     : never; 

    type UnionToIntersection<U> = (U extends any ? (args: U) => void : never) extends ((args: infer I) => void) ? I : never

//     type Union2Intersection<U> = (U extends any ? (x: U) => any: never) extends 
//   (x: infer R) => any ? R: never;
// type UnionToIntersection<U> = (U extends any ? (x: U) => any: never) extends 
//   (x: infer R) => any ? R: never;