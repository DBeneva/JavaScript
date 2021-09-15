function getTotalSum(whiskeyPrice, beer, wine, rakia, whiskey) {
    whiskeyPrice = Number(whiskeyPrice);
    beer = Number(beer);
    wine = Number(wine);
    rakia = Number(rakia);
    whiskey = Number(whiskey);

    const rakiaPrice = whiskeyPrice / 2;
    const winePrice = rakiaPrice * 0.6;
    const beerPrice = rakiaPrice * 0.2;
    const total = whiskey * whiskeyPrice + beer * beerPrice + wine * winePrice + rakia * rakiaPrice;

    return total.toFixed(2);
}

function getTotalSumArr(...input) {
    const [whiskeyPrice, beer, wine, rakia, whiskey] = input.map(Number);
    const rakiaPrice = whiskeyPrice / 2;
    const winePrice = rakiaPrice * 0.6;
    const beerPrice = rakiaPrice * 0.2;
    const total = whiskey * whiskeyPrice + beer * beerPrice + wine * winePrice + rakia * rakiaPrice;

    return total.toFixed(2);
}

console.log(getTotalSum(50, 10, 3.5, 6.5, 1));

console.log('====================');

console.log(getTotalSumArr(63.44, 3.57, 6.35, 8.15, 2.5));