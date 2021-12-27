function printTripMoney([tripPrice, puzzles, dolls, teddyBears, minions, trucks]) {
    inputParamsToNumbers();

    const numberOfToys = puzzles + dolls + teddyBears + minions + trucks;
    const sum = getTotalSum() * getMultiplier();
    const difference = Math.abs(tripPrice - sum).toFixed(2);

    if (sum >= tripPrice) console.log(`Yes! ${difference} lv left.`);
    else console.log(`Not enough money! ${difference} lv needed.`);

    function inputParamsToNumbers() {
        tripPrice = Number(tripPrice);
        puzzles = Number(puzzles);
        dolls = Number(dolls);
        teddyBears = Number(teddyBears);
        minions = Number(minions);
        trucks = Number(trucks);
    }

    function getTotalSum() {
        return puzzles * 2.6 + dolls * 3 + teddyBears * 4.1 + minions * 8.2 + trucks * 2;
    }

    function getMultiplier() {
        if (numberOfToys >= 50) return 0.75 * 0.9;
        else return 0.9;
    }
}

printTripMoney([
    '40.8',
    '20',
    '25',
    '30',
    '50',
    '10'
]);