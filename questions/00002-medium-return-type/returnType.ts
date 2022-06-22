type MyReturnType<T> = T extends (...p) => infer R ? R : never

// 关键词typeof可以获取类型
// 有种虽然做出来了，但是又不是完全做出来的感觉