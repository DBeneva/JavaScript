function carFactory(input) {
    let { model, power, color, carriage, wheelsize } = input;

    let car = {
        model,
        engine: getEngine(),
        carriage: { type: carriage, color },
        wheels: getWheels()
    };

    function getEngine() {
        return engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ].sort((a, b) => a.power - b.power)
            .find(x => x.power >= power);
    }

    function getWheels() {
        let wheel = wheelsize % 2 == 0 ?
            wheelsize - 1 : wheelsize;
        return Array(4).fill(wheel);
    }

    return car;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));