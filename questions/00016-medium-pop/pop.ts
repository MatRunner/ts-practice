type Pop<T extends unknown[]> = T extends [...infer K, infer P] ? K : P