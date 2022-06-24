type Chainable<I = {}> = {
  option: <K extends string, V>(key: K, value: V) => Chainable<I & { [P in K]: V }>,
  get: () => I
}
// 稍微简写
type Chainable2<I = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<I & { [P in K]: V }>,
  get(): I
}

// 泛型变量可以层层传递, 泛型变量不能直接作为key值，需要使用in来转化一下