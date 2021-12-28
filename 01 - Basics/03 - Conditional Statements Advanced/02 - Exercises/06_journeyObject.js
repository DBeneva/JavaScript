function planJourney([budget, season]) {
    budget = Number(budget);

    const destinations = {
        Bulgaria: createDestination(0.3, 0.7, 'Camp', 'Hotel'),
        Balkans: createDestination(0.4, 0.8, 'Camp', 'Hotel'),
        Europe: createDestination(0.9, 0.9, 'Hotel', 'Hotel')
    };
    
    const destination = getDestination();
    const accomodation = destinations[getDestination()].accomodation;
    const moneyNeeded = budget * destinations[getDestination()].multiplier;
    
    console.log(
        `Somewhere in ${destination}\n` +
        `${accomodation} - ${moneyNeeded.toFixed(2)}`
    );

    function getDestination() {
        if (budget <= 100) return 'Bulgaria';
        else if (budget <= 1000) return 'Balkans';
        else return 'Europe';
    }

    function createDestination(multiplierSummer, multiplierOther, accomodationSummer, accomodationOther) {
        const multiplier = season == 'summer' ? multiplierSummer : multiplierOther;
        const accomodation = season == 'summer' ? accomodationSummer : accomodationOther;
        
        return { multiplier, accomodation };
    }
}

planJourney([678.53, 'winter']);