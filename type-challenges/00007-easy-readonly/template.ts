type MyReadonly<T> = {
    readonly [K in keyof T]:T[K]
}

export default MyReadonly; 