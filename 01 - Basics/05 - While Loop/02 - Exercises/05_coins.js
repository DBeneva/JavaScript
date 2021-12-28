function coins(amount) {
    amount = Number(amount) * 100;
    let coinsTotal = 0;

    while (amount >= 1) {
        if (amount >= 200) {
            amount -= 200;
        } else if (amount >= 100) {
            amount -= 100;
        } else if (amount >= 50) {
            amount -= 50;
        } else if (amount >= 20) {
            amount -= 20;
        } else if (amount >= 10) {
            amount -= 10;
        } else if (amount >= 5) {
            amount -= 5;
        } else if (amount >= 2) {
            amount -= 2;
        } else {
            amount -= 1;
        }

        coinsTotal++;
    }

    console.log(coinsTotal);
}

coins('1.23');