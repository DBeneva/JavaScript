function summerShopping(input) {
    let budget = Number(input[0]);
    let towelPrice = Number(input[1]);
    let discount = Number(input[2]);
    let umbrellaPrice = towelPrice * 2 / 3;
    let flipflopsPrice = umbrellaPrice * 0.75;
    let beachBagPrice = (towelPrice + flipflopsPrice) * 1 / 3;
    let costTotal = towelPrice + umbrellaPrice + flipflopsPrice + beachBagPrice;
    costTotal -= costTotal * discount / 100;
    let difference = Math.abs(budget - costTotal);

    if (budget >= costTotal) {
        console.log(`Annie's sum is ${costTotal.toFixed(2)} lv. She has ${difference.toFixed(2)} lv. left.`);
    } else {
        console.log(`Annie's sum is ${costTotal.toFixed(2)} lv. She needs ${difference.toFixed(2)} lv. more.`);
    }
}

summerShopping(['40', '15', '5']);