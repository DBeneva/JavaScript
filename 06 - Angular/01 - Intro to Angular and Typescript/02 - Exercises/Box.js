"use strict";
class Box {
    constructor() {
        this._box = [];
    }
    add(el) {
        this._box.push(el);
    }
    remove() {
        this._box.pop();
    }
    get count() {
        return this._box.length;
    }
}
