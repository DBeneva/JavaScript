function isEnough(input) {
    const [age, washingMachinePrice, toyPrice] = input.map(Number);

    const years = Array.from(Array(age), (_, i) => i + 1);
    const toysTotal = years.filter(y => y % 2 == 1).length * toyPrice;
    const moneyTotal = years.filter(y => y % 2 == 0).reduce((acc, curr) => acc + curr * 5 - 1, 0);
    const total = toysTotal + moneyTotal;
    const difference = Math.abs(total - washingMachinePrice);

    const output = total >= washingMachinePrice
        ? `Yes! ${difference.toFixed(2)}`
        : `No! ${difference.toFixed(2)}`;

    console.log(output);
}

isEnough([21, 1570.98, 3]);