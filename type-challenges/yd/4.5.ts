// TypeScript 4.0 is recommended in this challenge
// Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.
// For example:

const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3);

function Currying<F extends (...args:any) => {}>(fn: F): Fn<Parameters<F>,ReturnType<F>>;
function Currying(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args)
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2))
            }
        };
    }
}
type Fn<Args, R> = Args extends [infer Fist]
    ? (P: Fist) => R
    : Args extends [any: infer First, ...rest: infer Rest]
    ? (p: First) => Fn<Rest, R>
    : never;
// The function passed to Currying may have multiple arguments, you need to correctly type it.
// In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.