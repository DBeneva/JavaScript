function getMatchTickets(budget, category, people) {
    budget = Number(budget);
    people = Number(people);
    let tickets = 0;

    switch (category) {
        case 'VIP': tickets = 499.99 * people; break;
        case 'Normal': tickets = 249.99 * people; break;
    }

    if (people <= 4) {
        budget *= 0.25;
    } else if (people <= 9) {
        budget *= 0.4;
    } else if (people <= 24) {
        budget *= 0.5;
    } else if (people <= 49) {
        budget *= 0.6;
    } else {
        budget *= 0.75;
    }

    const difference = Math.abs(budget - tickets);

    if (budget >= tickets) {
        return `Yes! You have ${difference.toFixed(2)} leva left.`;
    } else {
        return `Not enough money! You need ${difference.toFixed(2)} leva.`;
    }
}

function getMatchTickets(budget, category, people) {
    budget = Number(budget);
    people = Number(people);

    const prices = {
        VIP: 499.99,
        Normal: 249.99
    };

    const tickets = prices[category] * people;
    const difference = Math.abs(budget * getMultiplier() - tickets);

    return budget >= tickets ?
        `Yes! You have ${difference.toFixed(2)} leva left.` :
        `Not enough money! You need ${difference.toFixed(2)} leva.`

    function getMultiplier() {
        const discount = {
            first: createDiscount(4, 0.25),
            second: createDiscount(9, 0.4),
            third: createDiscount(24, 0.5),
            fourth: createDiscount(49, 0.6),
            fifth: createDiscount(Number.MAX_SAFE_INTEGER, 0.75)
        };

        return Object.values(discount).find(v => v.condition == true).multiplier;
    }

    function createDiscount(maxPeople, multiplier) {
        return {
            condition: people <= maxPeople,
            multiplier
        };
    }
}

console.log(getMatchTickets(30000, 'VIP', 49));