class Box<T> {
    private _box: any[] = [];

    public add(el: T) {
        this._box.push(el);
    }

    public remove() {
        this._box.pop();
    }

    get count(): number {
        return this._box.length;
    }
}