function coins([amount]) {
    amount *= 100;
    let coinsTotal = 0;

    while (amount >= 1) {
        const coinValue = getCoinValue(amount);        
        coinsTotal += Math.floor(amount / coinValue);
        amount %= coinValue;
    }
    
    console.log(coinsTotal);
    
    function getCoinValue(amount) {
        if (amount >= 200) return 200;
        else if (amount >= 100) return 100;
        else if (amount >= 50) return 50;
        else if (amount >= 20) return 20;
        else if (amount >= 10) return 10;
        else if (amount >= 5) return 5;
        else if (amount >= 2) return 2;
        else return 1;
    }
}

coins(['3']);