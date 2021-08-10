class Car {
    constructor(public name: string) { }
    run(speed: number = 0) { return `${this.name} is fast: ${speed}` }
}

class Honda extends Car {
    constructor(public name: string) { super(name); }
    run(speed = 150) { return `A Honda started. ${super.run(speed)}` }
}

const honda = new Honda('Honda City');
honda.run();