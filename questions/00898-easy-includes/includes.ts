import { Equal } from "@type-challenges/utils"

export type Includes1<A extends unknown[], B> = [B] extends [A[number]] ? true : false
//但是并过不了检测，麻了。看别人的解答竟然还递归了，我麻了

// 联合类型T=[1,2,3]访问返回的是1|2|3,
// never是任何类型的子集
type IncludesError<A extends unknown[], B> = A[number] extends B ? true : false
// 这种写法下，A是一个联合类型，被extends符号给拆了，如果A中有和B一样的，就会得到true|false|..这种类型, 加上一个中括号后能阻止分配律生效

export type Includes<A extends readonly unknown[], B> = A extends [infer F, ...infer T] ? Equal<F, B> extends true ? true : Includes<T, B> : false
// 这种是一个个判断的写法,有点秀
