function vacation(input) {
    let moneyNeeded = Number(input[0]);
    let moneyAvailable = Number(input[1]);
    let days = 0;
    let daysSpending = 0;
    let i = 2;

    while (daysSpending < 5 && moneyAvailable < moneyNeeded) {
        let spendOrSave = input[i];
        let sum = Number(input[i + 1]);
        days++;
        
        if (spendOrSave == 'spend') {
            daysSpending++;
            moneyAvailable = Math.max((moneyAvailable - sum), 0);
        } else {
            daysSpending = 0;
            moneyAvailable += sum;
        }
        
        i += 2;
    }

    if (daysSpending == 5) {
        console.log(`You can't save the money.`);
        console.log(days);
    }
    
    if (moneyAvailable >= moneyNeeded) {
        console.log(`You saved the money for ${days} days.`);
    }
}
vacation([2000, 1000, 'spend', 1200, 'save', 2000]);