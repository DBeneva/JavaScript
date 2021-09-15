function honeyWinterReserves(input) {
    let index = 0;
    let honeyNeeded = Number(input[index]);
    index++;
    let honeyTotal = 0;

    while (honeyTotal < honeyNeeded) {
        let beeName = input[index];
        index++;
        
        if (beeName == 'Winter has come') break;

        for (let i = 1; i <= 6; i++) {
            let honeyCurrentAmount = Number(input[index]);
            index++;
            honeyTotal += honeyCurrentAmount;
        }

        if (honeyTotal < 0) {
            console.log(`${beeName} was banished for gluttony`);
        }
    }

    let difference = Math.abs(honeyTotal - honeyNeeded);
    
    if (honeyTotal >= honeyNeeded) {
        console.log(`Well done! Honey surplus ${difference.toFixed(2)}.`);
    } else {
        console.log(`Hard Winter! Honey needed ${difference.toFixed(2)}.`);
    }
}

honeyWinterReserves(['1000',
    'Maya', '-50', '-10', '-20.70', '20.40', '10.30', '40',
    'Yama', '50', '10', '20', '30', '100', '100',
    'Winter has come']);