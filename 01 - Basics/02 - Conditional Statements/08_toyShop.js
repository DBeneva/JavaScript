function toyShop([tripPrice, puzzles, dolls, teddyBears, minions, trucks]) {
    tripPrice = Number(tripPrice);
    puzzles = Number(puzzles);
    dolls = Number(dolls);
    teddyBears = Number(teddyBears);
    minions = Number(minions);
    trucks = Number(trucks);

    let sum = puzzles * 2.6 + dolls * 3 + teddyBears * 4.1 + minions * 8.2 + trucks * 2;
    let toys = puzzles + dolls + teddyBears + minions + trucks;

    if (toys >= 50) {
        sum -= 0.25 * sum;
    }

    sum -= 0.1 * sum;
    let difference = Math.abs(tripPrice - sum);

    if (sum >= tripPrice) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`);
    }
}

function toyShopTernary(input) {
    let [tripPrice, puzzles, dolls, teddyBears, minions, trucks] = input.map(Number);
    let numberOfToys = input.slice(1).map(Number).reduce((a, b) => a + b, 0);
    let sum = getTotalSum() * discountPercentage();
    let difference = Math.abs(tripPrice - sum);
    let outputLine = sum >= tripPrice ? `Yes! ${difference.toFixed(2)} lv left.` :
        `Not enough money! ${difference.toFixed(2)} lv needed.`;

    console.log(outputLine);

    function getTotalSum() {
        const prices = {
            puzzles: 2.6,
            dolls: 3,
            teddyBears: 4.1,
            minions: 8.2,
            trucks: 2
        };

        return puzzles * prices.puzzles +
            dolls * prices.dolls +
            teddyBears * prices.teddyBears +
            minions * prices.minions +
            trucks * prices.trucks;
    }

    function discountPercentage() {
        return (numberOfToys >= 50 ? 0.75 : 1) * 0.9;
    }
}

toyShop([
    '40.8',
    '20',
    '25',
    '30',
    '50',
    '10'
]);

console.log('====================');

toyShopTernary([
    '40.8',
    '20',
    '25',
    '30',
    '50',
    '10'
]);