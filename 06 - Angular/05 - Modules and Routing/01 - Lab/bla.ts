class KeyValue<T, U> {
    constructor(public key: T, public val: U) { }
}

const kvp = new KeyValue<number, string>(1, 'Ben');
console.log(kvp.val); // 'Ben'
