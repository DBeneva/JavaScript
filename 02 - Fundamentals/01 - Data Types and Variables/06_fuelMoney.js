function fuelMoney(distance, passengers, fuelPrice) {
    distance = Number(distance);
    passengers = Number(passengers);
    fuelPrice = Number(fuelPrice);

    let fuelNeeded = distance / 100 * 7;
    fuelNeeded += passengers * 0.1;
    let moneyNeeded = fuelNeeded * fuelPrice;
    
    console.log(`Needed money for that trip is ${moneyNeeded}lv.`);
}

fuelMoney(90, 14, 2.88);