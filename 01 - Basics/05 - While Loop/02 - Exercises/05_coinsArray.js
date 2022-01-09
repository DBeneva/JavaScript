function coins([amount]) {
    amount *= 100;
    const coins = [200, 100, 50, 20, 10, 5, 2, 1];
    const usedCoins = [];

    coins.every(c => amount == 0 ? false : useCoin(c));

    console.log(usedCoins.reduce((a, c) => a + c[1], 0));

    function useCoin(coin) {
        const numberOfCoins = Math.floor(amount / coin);
        
        if (numberOfCoins) {
            amount %= coin;
            usedCoins.push([coin, numberOfCoins]);
        }

        return true;
    }
}

coins(['5']);