function bitcoinMining(input) {
    let index = 0;
    let currentDay = 1;
    let levaTotal = 0;
    let bitcoins = 0;
    let dayFirstBitcoin;
    let alreadyBoughtBitcoins = false;

    while (input[index] != undefined) {
        let goldCurrentDay = Number(input[index]);
        index++;
        
        if (currentDay % 3 == 0) {
            goldCurrentDay -= 0.3 * goldCurrentDay;
        }
        
        levaTotal += goldCurrentDay * 67.51;
        bitcoins = Math.floor(levaTotal / 11949.16);
        
        if (bitcoins >= 1 && alreadyBoughtBitcoins == false) {
            dayFirstBitcoin = currentDay;
            alreadyBoughtBitcoins = true;
        }
        
        currentDay++;
    }

    let moneyLeft = levaTotal - (bitcoins * 11949.16);

    console.log(`Bought bitcoins: ${bitcoins}`);
    
    if (bitcoins >= 1) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoin}`);
    }
    
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);