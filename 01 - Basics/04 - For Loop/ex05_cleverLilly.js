function moneySaved(age, washingMachineprice, toyPrice) {
    age = Number(age);
    washingMachineprice = Number(washingMachineprice);
    toyPrice = Number(toyPrice);
    let totalSaved = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 1) {
            totalSaved += toyPrice;
        } else {
            totalSaved += (5 * i) - 1;
        }
    }

    let difference = Math.abs(washingMachineprice - totalSaved);

    if (washingMachineprice <= totalSaved) {
        return `Yes! ${difference.toFixed(2)}`;
    } else {
        return `No! ${difference.toFixed(2)}`;
    }
}

function moneySavedArr(...input) {
    const [age, washingMachinePrice, toyPrice] = input.map(Number);

    const years = Array.from(Array(age), (_, i) => i + 1);
    const toysTotal = years.filter(y => y % 2 == 1).length * toyPrice;
    const moneyTotal = years.filter(y => y % 2 == 0).reduce((acc, curr) => acc + curr * 5 - 1, 0);
    const total = toysTotal + moneyTotal;
    const difference = Math.abs(total - washingMachinePrice);

    return total >= washingMachinePrice ? `Yes! ${difference.toFixed(2)}` :
        `No! ${difference.toFixed(2)}`;
}

console.log(moneySaved(21, 1570.98, 3));

console.log('====================');

console.log(moneySavedArr(21, 1570.98, 3));