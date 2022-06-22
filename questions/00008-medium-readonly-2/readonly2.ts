export type MyReadonly2<T, K extends keyof T = keyof T> = T & { readonly [P in K]: T[P] }
// 操作符&，使用后获得交叉类型