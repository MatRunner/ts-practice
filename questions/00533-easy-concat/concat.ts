type Concat<A extends unknown[], B extends unknown[]> = [...A, ...B]

// 支持...这种展开符
// unkonwn类型，也是和any一样的一个顶级类型，但是它会进行类型检查，但是any不会进行类型检查