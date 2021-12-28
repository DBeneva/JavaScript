function isEnough([age, washingMachineprice, toyPrice]) {
    inputParamsToNumbers();

    const savings = getSavings();
    const difference = Math.abs(washingMachineprice - savings);

    if (washingMachineprice <= savings) {
        console.log(`Yes! ${difference.toFixed(2)}`);
    } else {
        console.log(`No! ${difference.toFixed(2)}`);
    }

    function getSavings() {
        let result = 0;

        for (let i = 1; i <= age; i++) {
            if (i % 2 == 1) result += toyPrice;
            else result += (5 * i) - 1;
        }

        return result;
    }

    function inputParamsToNumbers() {
        age = Number(age);
        washingMachineprice = Number(washingMachineprice);
        toyPrice = Number(toyPrice);
    }
}

isEnough([21, 1570.98, 3]);