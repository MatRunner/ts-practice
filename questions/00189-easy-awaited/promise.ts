type MyAwaited<T> = T extends Promise<infer P> ? MyAwaited<P> : T

// 关键词 infer，用于推导泛型参数，只能在extends的右边使用