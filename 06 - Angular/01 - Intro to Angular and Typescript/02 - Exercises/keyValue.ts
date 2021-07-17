class KeyValuePair<T, U> {
    constructor(private _key: T, private _value: U) {

    }
    
    setKeyValue(key: T, value: U) {
        this._key = key;
        this._value = value;
    }

    display() {
        console.log(`key = ${this._key}, value = ${this._value}`);        
    }
}