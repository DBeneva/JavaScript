function transport(distance, dayOrNight) {
    distance = Number(distance);

    let taxi = 0.7;
    let bus = 0.09 * distance;
    let train = 0.06 * distance;

    if (dayOrNight == 'day') {
        taxi += 0.79 * distance;
    } else {
        taxi += 0.9 * distance;
    }

    if (distance < 20) {
        console.log(taxi.toFixed(2));
    } else if (distance < 100) {
        console.log(bus.toFixed(2));
    } else {
        console.log(train.toFixed(2));
    }
}

function transportObj(distance, dayOrNight) {
    distance = Number(distance);

    const prices = {
        taxi: 0.7 + (dayOrNight == 'day' ? 0.79 : 0.9) * distance,
        bus: 0.09 * distance,
        train: 0.06 * distance
    };

    let result = distance < 20 ? prices.taxi :
        distance < 100 ? prices.bus :
            prices.train;

    console.log(result.toFixed(2));
}

transport(180, 'night');

console.log('====================');

transportObj(180, 'night');