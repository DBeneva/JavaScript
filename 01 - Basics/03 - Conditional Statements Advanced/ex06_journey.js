function planTrip([budget, season]) {
    budget = Number(budget);
    let destination;
    let accomodation;
    let multiplier = 0;

    if (budget <= 100) {
        destination = 'Bulgaria';
        
        switch (season) {
            case 'summer': multiplier = 0.3; break;
            case 'winter': multiplier = 0.7; break;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        
        switch (season) {
            case 'summer': multiplier = 0.4; break;
            case 'winter': multiplier = 0.8; break;
        }
    } else {
        destination = 'Europe';
        multiplier = 0.9;
    }

    if (season == 'summer' && destination != 'Europe') {
        accomodation = 'Camp';
    } else {
        accomodation = 'Hotel';
    }

    return `Somewhere in ${destination}\n${accomodation} - ${(multiplier * budget).toFixed(2)}`;
}

function planTripObj([budget, season]) {
    const destinations = {
        Bulgaria: createDestination(0.3, 0.7, 'Camp', 'Hotel'),
        Balkans: createDestination(0.4, 0.8, 'Camp', 'Hotel'),
        Europe: createDestination(0.9, 0.9, 'Hotel', 'Hotel')
    };
    
    const accomodation = destinations[getDestination()].accomodation;
    const moneyNeeded = budget * destinations[getDestination()].multiplier;
    
    return `Somewhere in ${getDestination()}\n${accomodation} - ${moneyNeeded.toFixed(2)}`;
    
    function createDestination(multiplierSummer, multiplierOther, accomodationSummer, accomodationOther) {
        budget = Number(budget);
    
        return {
            multiplier: season == 'summer' ? multiplierSummer : multiplierOther ,
            accomodation: season == 'summer' ? accomodationSummer : accomodationOther
        };
    }

    function getDestination() {
        const destinations = {
            Bulgaria: 100,
            Balkans: 1000,
            Europe: Number.MAX_SAFE_INTEGER
        };

        return Object.entries(destinations).find(([k, v]) => budget <= v)[0];
    }
}

console.log(planTrip([678.53, 'winter']));

console.log('====================');

console.log(planTripObj([678.53, 'winter']));