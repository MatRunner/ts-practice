type First<A extends any[]> = A extends [] ? never : A[0]

// 1. never关键词，表示永不存在的值的类型。
// 2. ts的条件分支判断，A extends B中的extends是A类型可以分配给B类型，不要当做集合来理解。
// 3. 这里要对空集做判断。