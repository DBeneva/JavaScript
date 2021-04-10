function getTripMoney([tripPrice, puzzles, dolls, teddyBears, minions, trucks]) {
    tripPrice = Number(tripPrice);
    puzzles = Number(puzzles);
    dolls = Number(dolls);
    teddyBears = Number(teddyBears);
    minions = Number(minions);
    trucks = Number(trucks);

    let sum = (puzzles * 2.6 + dolls * 3 + teddyBears * 4.1 + minions * 8.2 + trucks * 2) * 0.9;
    const toys = puzzles + dolls + teddyBears + minions + trucks;

    if (toys >= 50) {
        sum *= 0.75;
    }

    const difference = Math.abs(tripPrice - sum);

    if (sum >= tripPrice) {
        return `Yes! ${difference.toFixed(2)} lv left.`;
    } else {
        return `Not enough money! ${difference.toFixed(2)} lv needed.`;
    }
}

function getTripMoneyTern(input) {
    const [tripPrice, puzzles, dolls, teddyBears, minions, trucks] = input.map(Number);
    const numberOfToys = input.slice(1).map(Number).reduce((a, b) => a + b, 0);
    const sum = getTotalSum() * getMultiplier();
    const difference = Math.abs(tripPrice - sum);
    const outputLine = sum >= tripPrice ? `Yes! ${difference.toFixed(2)} lv left.` :
        `Not enough money! ${difference.toFixed(2)} lv needed.`;

    return outputLine;

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

    function getMultiplier() {
        return (numberOfToys >= 50 ? 0.75 : 1) * 0.9;
    }
}

console.log(getTripMoney([
    '40.8',
    '20',
    '25',
    '30',
    '50',
    '10'
]));

console.log('====================');

console.log(getTripMoneyTern([
    '40.8',
    '20',
    '25',
    '30',
    '50',
    '10'
]));