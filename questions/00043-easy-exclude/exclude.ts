type MyExclude<T, U> = T extends U ? never : T

// T extends U且T是联合类型时，实际上发生的是 TypeScript 遍历联合类型T并将条件应用到每个元素上。