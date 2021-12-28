function printTransportPrice([distance, dayOrNight]) {
    distance = Number(distance);

    const taxiPrice = getTaxiPrice().toFixed(2);
    const busPrice = (0.09 * distance).toFixed(2);
    const trainPrice = (0.06 * distance).toFixed(2);

    if (distance < 20) console.log(taxiPrice);
    else if (distance < 100) console.log(busPrice);
    else console.log(trainPrice);

    function getTaxiPrice() {
        if (dayOrNight == 'day') return 0.7 + 0.79 * distance;
        else return 0.7 + 0.9 * distance;
    }
}

printTransportPrice(180, 'night');