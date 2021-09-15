function cruiseShip(input) {
    let cruiseType = input[0];
    let cabinType = input[1];
    let nights = Number(input[2]);
    let costPerPerson = 0;

    switch (cruiseType) {
        case 'Mediterranean':
            switch (cabinType) {
                case 'standard cabin': costPerPerson = nights * 27.50; break;
                case 'cabin with balcony': costPerPerson = nights * 30.20; break;
                case 'apartment': costPerPerson = nights * 40.50; break;
            }
            break;

        case 'Adriatic':
            switch (cabinType) {
                case 'standard cabin': costPerPerson = nights * 22.99; break;
                case 'cabin with balcony': costPerPerson = nights * 25.00; break;
                case 'apartment': costPerPerson = nights * 34.99; break;
            }
            break;

        case 'Aegean':
            switch (cabinType) {
                case 'standard cabin': costPerPerson += nights * 23.00; break;
                case 'cabin with balcony': costPerPerson += nights * 26.60; break;
                case 'apartment': costPerPerson += nights * 39.80;break;
            }
            break;
    }

    if (nights > 7) {
        costPerPerson -= costPerPerson * 0.25;
    }

    let costTotal = costPerPerson * 4;
    console.log(`Annie's holiday in the ${cruiseType} sea costs ${costTotal.toFixed(2)} lv.`);
}

cruiseShip(['Aegean', 'standard cabin', '10']);