function printTotalSum(whiskeyPrice, beer, wine, rakia, whiskey) {
    const rakiaPrice = whiskeyPrice / 2;
    const winePrice = rakiaPrice * 0.6;
    const beerPrice = rakiaPrice * 0.2;
    const totalSum = getTotalSum();

    console.log(totalSum.toFixed(2));

    function getTotalSum() {
        return whiskey * whiskeyPrice +
            beer * beerPrice +
            wine * winePrice +
            rakia * rakiaPrice;
    }
}

printTotalSum(50, 10, 3.5, 6.5, 1);
printTotalSum('50', '10', '3.5', '6.5', '1');