"use strict";
class KeyValuePair {
    constructor(_key, _value) {
        this._key = _key;
        this._value = _value;
    }
    setKeyValue(key, value) {
        this._key = key;
        this._value = value;
    }
    display() {
        console.log(`key = ${this._key}, value = ${this._value}`);
    }
}

let kvp = new KeyValuePair();
kvp.setKeyValue(1, "Steve");
kvp.display();

