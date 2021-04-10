function fishingBoat(budget, season, fishermen) {
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
        price -= 0.1 * price;
    } else if (fishermen <= 11) {
        price -= 0.15 * price; 
    } else {
        price -= 0.25 * price;
    }

    if (fishermen % 2 == 0 && season != 'Autumn') {
        price -= 0.05 * price;
    }

    let difference = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
    }
}

fishingBoat(2000, 'Winter', 13);