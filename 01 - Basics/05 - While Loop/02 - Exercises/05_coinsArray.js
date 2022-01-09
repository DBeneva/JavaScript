function coins([amount]) {
    amount *= 100;
    const coins = [200, 100, 50, 20, 10, 5, 2, 1];
    let usedCoins = 0;

    coins.every(c => amount == 0 ? false : useCoin(c));

    console.log(usedCoins);

    function useCoin(coin) {
        const numberOfCoins = Math.floor(amount / coin);
        
        if (numberOfCoins) {
            amount %= coin;
            usedCoins += numberOfCoins;
        }

        return true;
    }
}

coins(['5']);