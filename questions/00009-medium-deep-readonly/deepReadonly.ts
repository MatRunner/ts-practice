export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Record<string, unknown> ? DeepReadonly<T[K]> : T[K]
}

// 又一个不知道为啥就是过不了的