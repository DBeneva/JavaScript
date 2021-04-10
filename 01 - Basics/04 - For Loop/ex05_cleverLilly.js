function cleverLilly(age, washingMachineprice, toyPrice) {
    age = Number(age);
    washingMachineprice = Number(washingMachineprice);
    toyPrice = Number(toyPrice);
    let totalSaved = 0;

    for (let i = 0; i < age; i++) {
        if (i % 2 == 1) {
            totalSaved += toyPrice;
        } else {
            totalSaved += (5 * i) - 1;
        }
    }
    
    let difference = Math.abs(washingMachineprice - totalSaved);

    if (washingMachineprice <= totalSaved) {
        console.log(`Yes! ${difference.toFixed(2)}`);
    } else {
        console.log(`No! ${difference.toFixed(2)}`);
    }
}

cleverLilly(21, 1570.98, 3);