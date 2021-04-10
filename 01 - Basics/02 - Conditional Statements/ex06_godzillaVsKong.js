function godzillaVsKong([budget, stats, pricePerStat]) {
    budget = Number(budget);
    stats = Number(stats);
    pricePerStat = Number(pricePerStat);
    let sceneryPrice = budget * 0.1;

    if (stats > 150) {
        pricePerStat = pricePerStat - 0.1 * pricePerStat;
    }

    let expenses = sceneryPrice + (pricePerStat * stats);
    let difference = Math.abs(budget - expenses);

    if (expenses > budget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
    }
}

function godzillaVsKongTernary(input) {
    let [budget, stats, pricePerStat] = input.map(Number);

    let expenses = budget * 0.1 + stats * pricePerStat * (stats > 150 ? 0.9 : 1);
    let difference = Math.abs(budget - expenses);
    let result = budget < expenses ? `Not enough money!\nWingard needs ${difference.toFixed(2)} leva more.` :
        `Action!\nWingard starts filming with ${difference.toFixed(2)} leva left.`;

    console.log(result);
}

godzillaVsKong([20000, 120, 55.5]);

console.log('====================');

godzillaVsKongTernary([20000, 120, 55.5]);