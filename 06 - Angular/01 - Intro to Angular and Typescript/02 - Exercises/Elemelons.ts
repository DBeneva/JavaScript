abstract class Melon {
    constructor(public weight: number, public melonSort: string) {
    }
}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
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
    constructor(weight: number, melonSort: string) {
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
    constructor(weight: number, melonSort: string) {
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
    constructor(weight: number, melonSort: string) {
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
    element: string = 'Water';

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }
    
    morph() {
        
    }
}