function backToThePast(money, toYear) {
    money = Number(money);
    toYear = Number(toYear);
    let moneyNeeded = 0;
    let age = 17;

    for (let i = 1800; i <= toYear; i++) {
        age += 1;
        
        if (i % 2 == 0) {
            moneyNeeded += 12000;
        } else {
            moneyNeeded += 12000 + 50 * age;
        }
    }

    let difference = Math.abs(money - moneyNeeded); 

    if (money >= moneyNeeded) {
        console.log(`Yes! He will live a carefree life and will have ${difference.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${difference.toFixed(2)} dollars to survive.`);
    }
}

backToThePast(50000, 1802);