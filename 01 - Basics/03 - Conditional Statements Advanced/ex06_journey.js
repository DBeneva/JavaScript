function planJourney([budget, season]) {
    budget = Number(budget);
    
    const destination = getDestination();
    const accomodation = getAccomodation();
    const multiplier = getMultiplier();
    const moneyNeeded = (multiplier * budget).toFixed(2); 
    
    console.log(
        `Somewhere in ${destination}\n` +
        `${accomodation} - ${moneyNeeded}`
    );
    
    function getDestination() {
        if (budget <= 100) return 'Bulgaria';
        else if (budget <= 1000) return 'Balkans';
        else return 'Europe';
    }

    function getAccomodation() {
        if (season == 'summer' && destination != 'Europe') return 'Camp';
        else return 'Hotel';
    }

    function getMultiplier() {
        switch (destination) {
            case 'Bulgaria': return getMultiplierBySeason(0.3, 0.7);
            case 'Balkans': return getMultiplierBySeason(0.4, 0.8);
            case 'Europe': return getMultiplierBySeason(0.9);
        }
    }

    function getMultiplierBySeason(summer, winter) {
        if (season == 'summer') return summer;
        else return winter || summer;
    }
}

planJourney([678.53, 'winter']);