type If<C extends Boolean,T,F> = C extends true  ? T : F

export default If;