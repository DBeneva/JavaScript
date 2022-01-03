function printFishingPrice([budget, season, fishermen]) {
    budget = Number(budget), fishermen = Number(fishermen);

    const price = getPriceBySeason() * getMultiplier();
    const difference = Math.abs(budget - price).toFixed(2);

    console.log(
        budget >= price
            ? `Yes! You have ${difference} leva left.`
            : `Not enough money! You need ${difference} leva.`
    );

    function getPriceBySeason() {
        switch (season) {
            case 'Spring': return 3000;
            case 'Summer':
            case 'Autumn': return 4200;
            case 'Winter': return 2600;
        }
    }

    function getMultiplier() {
        let multiplier = 1;

        if (fishermen <= 6) multiplier = 0.9;
        else if (fishermen <= 11) multiplier = 0.85;
        else multiplier = 0.75;

        if (fishermen % 2 == 0 && season != 'Autumn') {
            multiplier *= 0.95;
        }

        return multiplier;
    }
}

printFishingPrice([2000, 'Winter', 13]);