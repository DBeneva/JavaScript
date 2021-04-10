function journey(budget, season) {
    budget = Number(budget);
    let destination;
    let campOrHotel;
    let moneySpent = 0;

    if (budget <= 100) {
        destination = 'Bulgaria';
        
        switch (season) {
            case 'summer': moneySpent = 0.3 * budget; break;
            case 'winter': moneySpent = 0.7 * budget; break;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        
        switch (season) {
            case 'summer': moneySpent = 0.4 * budget; break;
            case 'winter': moneySpent = 0.8 * budget; break;
        }
    } else {
        destination = 'Europe';
        moneySpent = 0.9 * budget;
    }

    if (season == 'summer' && destination != 'Europe') {
        campOrHotel = 'Camp';
    } else {
        campOrHotel = 'Hotel';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${campOrHotel} - ${moneySpent.toFixed(2)}`);
}

journey(678.53, 'winter');