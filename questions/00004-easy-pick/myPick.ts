type MyPick<T,S extends keyof T>={
  [P in S]: T[P]
}
// S是一个属性名的联合类型
// 1. keyof 关键词，获取类，对象，接口的所有属性名组成的 *联合类型*。
// 2. in 关键词，用于取联合类型的值。
// 3. extends 关键词，在js中作为class 的继承关键词。在ts中，作用类似，也可以扩展类型。目前还不明白为啥extends后就能判定T中一定有S中的属性名P。