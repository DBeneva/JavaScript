"use strict";
class Melon {
    constructor(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}
class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}}`;
    }
}
class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}}`;
    }
}
class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}}`;
    }
}
class Airmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get elementIndex() {
        return this.weight * this.melonSort.length;
    }
    toString() {
        return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}}`;
    }
}
class Melolemonmelon extends Airmelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = 'Water';
    }
    morph() {
    }
}
