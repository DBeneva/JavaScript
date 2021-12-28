function getMatchTickets(budget, category, people) {
    budget = Number(budget) * getMultiplier();
    people = Number(people);

    const price = category == 'VIP' ? 499.99 : 249.99;
    const tickets = price * people;
    const difference = Math.abs(budget - tickets).toFixed(2);

    if (budget >= tickets) {
        console.log(`Yes! You have ${difference} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference} leva.`);
    }

    function getMultiplier() {
        if (people <= 4) return 0.25;
        else if (people <= 9) return 0.4;
        else if (people <= 24) return 0.5;
        else if (people <= 49) return 0.6;
        else return 0.75;
    }
}

getMatchTickets(30000, 'VIP', 49);