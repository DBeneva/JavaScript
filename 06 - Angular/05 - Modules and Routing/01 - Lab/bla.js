"use strict";
class KeyValue {
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}
const kvp = new KeyValue(1, 'Ben');
console.log(kvp.val); // 'Ben'
