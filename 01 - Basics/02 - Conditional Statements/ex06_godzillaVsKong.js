function getMoneyFilming([budget, stats, pricePerStat]) {
    budget = Number(budget);
    stats = Number(stats);
    pricePerStat = Number(pricePerStat);
    
    const sceneryPrice = budget * 0.1;

    if (stats > 150) {
        pricePerStat = pricePerStat - 0.1 * pricePerStat;
    }

    const expenses = sceneryPrice + (pricePerStat * stats);
    const difference = Math.abs(budget - expenses);

    if (expenses > budget) {
        return `Not enough money!\nWingard needs ${difference.toFixed(2)} leva more.`;
    } else {
        return `Action!\nWingard starts filming with ${difference.toFixed(2)} leva left.`;
    }
}

function getMoneyFilmingTern(input) {
    const [budget, stats, pricePerStat] = input.map(Number);

    const expenses = budget * 0.1 + stats * pricePerStat * (stats > 150 ? 0.9 : 1);
    const difference = Math.abs(budget - expenses);
    const result = budget < expenses ? `Not enough money!\nWingard needs ${difference.toFixed(2)} leva more.` :
        `Action!\nWingard starts filming with ${difference.toFixed(2)} leva left.`;

    return result;
}

console.log(getMoneyFilming([20000, 120, 55.5]));

console.log('====================');

console.log(getMoneyFilmingTern([20000, 120, 55.5]));