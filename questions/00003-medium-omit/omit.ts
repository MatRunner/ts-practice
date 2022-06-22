type MyOmit<T, K> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

// 关键词as，map类型中，建立新的key值或者对原有的key值进行过滤，可以使用as