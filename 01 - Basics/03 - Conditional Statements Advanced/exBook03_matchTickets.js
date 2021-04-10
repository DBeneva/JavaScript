function matchTickets(budget, category, people) {
    budget = Number(budget);
    people = Number(people);
    let tickets = 0;
    
    switch (category) {
        case 'VIP': tickets += 499.99 * people; break;
        case 'Normal': tickets += 249.99 * people; break;
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

    let difference = Math.abs(budget - tickets);
    
    if (budget >= tickets) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
    }
}

matchTickets(30000, 'VIP', 49);