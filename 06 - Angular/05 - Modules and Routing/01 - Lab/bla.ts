function type<T, U>(id: T, str: U): string { return typeof id + typeof str; }

console.log(type<number, string>(2, 'hello')); // 'numberstring'