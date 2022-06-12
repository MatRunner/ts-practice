type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K
}

// 1. 对一个给定的数组，可以使用MyArray[number]来拿到类型，这里说不清楚，文档中indexed type有写。
// 2. 注意满足题意，要使用extends对T做readonly和数组类型的限制。
// 3. 好像key值类型还需要限制一下