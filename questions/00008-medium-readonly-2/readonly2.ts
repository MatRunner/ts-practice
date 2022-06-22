export type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & { readonly [P in K]: T[P] }
// 操作符&，使用后获得交叉类型
export type MyReadonly2_1<T, K extends keyof T = keyof T> = T & { readonly [P in K]: T[P] }
// 上面的写法会报错，说是4.5版本的一个bug，{readonly a: string} & {a: string}与{a: string}从概念上是一样的，后面的会覆写&符号前面的类型。
