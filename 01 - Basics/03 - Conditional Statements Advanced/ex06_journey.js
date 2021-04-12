function planTrip([budget, season]) {
    budget = Number(budget);
    let destination;
    let accomodation;
    let moneyNeeded = 0;

    if (budget <= 100) {
        destination = 'Bulgaria';
        
        switch (season) {
            case 'summer': moneyNeeded = 0.3 * budget; break;
            case 'winter': moneyNeeded = 0.7 * budget; break;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        
        switch (season) {
            case 'summer': moneyNeeded = 0.4 * budget; break;
            case 'winter': moneyNeeded = 0.8 * budget; break;
        }
    } else {
        destination = 'Europe';
        moneyNeeded = 0.9 * budget;
    }

    if (season == 'summer' && destination != 'Europe') {
        accomodation = 'Camp';
    } else {
        accomodation = 'Hotel';
    }

    return `Somewhere in ${destination}\n${accomodation} - ${moneyNeeded.toFixed(2)}`;
}

function planTripObj([budget, season]) {
    budget = Number(budget);
    
    const destinations = {
        Bulgaria: {
            condition: budget <= 100,
            multiplier: season == 'summer' ? 0.3 : 0.7 ,
            accomodation: season == 'summer' ? 'Camp' : 'Hotel'
        },
        Balkans: {
            condition: budget <= 1000,
            multiplier: season == 'summer' ? 0.4 : 0.8,
            accomodation: season == 'summer' ? 'Camp' : 'Hotel'
        },
        Europe: {
            condition: budget > 1000,
            multiplier: 0.9,
            accomodation: 'Hotel'
        }
    };

    const destination = Object.entries(destinations).find(([k, v]) => v.condition == true)[0];
    const accomodation = destinations[destination].accomodation;
    const moneyNeeded = budget * destinations[destination].multiplier;

    return `Somewhere in ${destination}\n${accomodation} - ${moneyNeeded.toFixed(2)}`;
}

console.log(planTrip([678.53, 'winter']));

console.log('====================');

console.log(planTripObj([678.53, 'winter']));