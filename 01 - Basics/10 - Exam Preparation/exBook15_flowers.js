function flowers(input) {
    let numberOfChrysantemums = Number(input[0]);
    let numberOfRoses = Number(input[1]);
    let numberOfTulips = Number(input[2]);
    let numberOfFlowers = numberOfChrysantemums + numberOfRoses + numberOfTulips;
    let season = input[3];
    let holidayOrNot = input[4];
    let chrysantemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    if (season == 'Spring' || season == 'Summer') {
        chrysantemumsPrice += 2 * numberOfChrysantemums;
        rosesPrice += 4.1 * numberOfRoses;
        tulipsPrice += 2.5 * numberOfTulips;
    } else {
        chrysantemumsPrice += 3.75 * numberOfChrysantemums;
        rosesPrice += 4.5 * numberOfRoses;
        tulipsPrice += 4.15 * numberOfTulips;
    }

    if (holidayOrNot == 'Y') {
        chrysantemumsPrice += chrysantemumsPrice * 0.15;
        rosesPrice += rosesPrice * 0.15;
        tulipsPrice += tulipsPrice * 0.15;
    }

    let totalCost = chrysantemumsPrice + rosesPrice + tulipsPrice;
    
    if (season == 'Spring' && numberOfTulips > 7) {
        totalCost -= totalCost * 0.05;
    }

    if (season == 'Winter' && numberOfRoses >= 10) {
        totalCost -= totalCost * 0.1;
    }

    if (numberOfFlowers > 20) {
        totalCost -= totalCost * 0.2;
    }

    totalCost += 2;
    console.log(totalCost.toFixed(2));
}

flowers(['3', '10', '9', 'Winter', 'N']);