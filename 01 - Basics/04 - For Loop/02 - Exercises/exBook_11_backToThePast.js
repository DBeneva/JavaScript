function backToThePast(budget, toYear) {
    budget = Number(budget);
    toYear = Number(toYear);
    let moneyNeeded = 0;
    let age = 17;

    for (let i = 1800; i <= toYear; i++) {
        age += 1;

        if (i % 2 == 0) {
            moneyNeeded += 12000;
        } else {
            moneyNeeded += 12000 + 50 * age;
        }
    }

    const difference = Math.abs(budget - moneyNeeded);

    if (budget >= moneyNeeded) {
        return `Yes! He will live a carefree life and will have ${difference.toFixed(2)} dollars left.`;
    } else {
        return `He will need ${difference.toFixed(2)} dollars to survive.`;
    }
}

function backToThePastArr(...input) {
    const [budget, toYear] = input.map(Number);
    const years = Array.from(Array(toYear - 1800 + 1), (_, i) => i + 1800);

    const moneyNeeded = years
        .map((v, i) => v % 2 == 0 ? 12000 : 12000 + 50 * (18 + i))
        .reduce((acc, curr) => acc + curr, 0);
    const difference = Math.abs(budget - moneyNeeded);

    return budget >= moneyNeeded ? `Yes! He will live a carefree life and will have ${difference.toFixed(2)} dollars left.` :
        `He will need ${difference.toFixed(2)} dollars to survive.`;
}

console.log(backToThePast(50000, 1802));

console.log('====================');

console.log(backToThePastArr(50000, 1802));