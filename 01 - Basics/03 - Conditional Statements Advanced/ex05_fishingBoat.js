function getPriceFishing([budget, season, fishermen]) {
    budget = Number(budget);
    fishermen = Number(fishermen);
    let price = 0;

    switch (season) {
        case 'Spring': price += 3000; break;
        case 'Summer':
        case 'Autumn': price += 4200; break;
        case 'Winter': price += 2600; break;
    }

    if (fishermen <= 6) {
        price *= 0.9;
    } else if (fishermen <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }

    if (fishermen % 2 == 0 && season != 'Autumn') {
        price *= 0.95;
    }

    const difference = Math.abs(budget - price);

    if (budget >= price) {
        return `Yes! You have ${difference.toFixed(2)} leva left.`;
    } else {
        return `Not enough money! You need ${difference.toFixed(2)} leva.`;
    }
}

function getPriceFishingObj([budget, season, fishermen]) {
    budget = Number(budget);
    fishermen = Number(fishermen);

    const seasons = {
        Spring: 3000,
        Summer: 4200,
        Autumn: 4200,
        Winter: 2600
    };

    const price = seasons[season] * getDiscountMultiplier();
    const difference = Math.abs(budget - price);

    return budget >= price ? `Yes! You have ${difference.toFixed(2)} leva left.` :
        `Not enough money! You need ${difference.toFixed(2)} leva.`;

    function getDiscountMultiplier() {
        const first = fishermen <= 6 ? 0.9 :
            fishermen <= 11 ? 0.85 :
                0.75;
        const second = fishermen % 2 == 0 && season != 'Autumn' ? 0.95 : 1;
     
        return first * second;
    }
}

console.log(getPriceFishing([2000, 'Winter', 13]));

console.log('====================');

console.log(getPriceFishingObj([2000, 'Winter', 13]));