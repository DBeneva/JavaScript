function getCharityMoney(days, bakers, cakes, waffles, pancakes) {
    days = Number(days);
    bakers = Number(bakers);
    cakes = Number(cakes);
    waffles = Number(waffles);
    pancakes = Number(pancakes);

    const totalSum = (cakes * 45 + waffles * 5.8 + pancakes * 3.2) * bakers * days;
    
    return (totalSum * 7 / 8).toFixed(2);
}

function getCharityMoneyArr(...input) {
    const [days, bakers, cakes, waffles, pancakes] = input.map(Number);
    const totalSum = (cakes * 45 + waffles * 5.8 + pancakes * 3.2) * bakers * days;
    
    return (totalSum * 7 / 8).toFixed(2);
}

console.log(getCharityMoney(20, 8, 14, 30, 16));

console.log('====================');

console.log(getCharityMoneyArr(131, 5, 9, 33, 46));