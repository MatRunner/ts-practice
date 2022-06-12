type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// 感觉就是myPick加上个readonly