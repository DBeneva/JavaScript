function backToThePast(input) {
    const [budget, toYear] = input.map(Number);
    const years = Array.from(Array(toYear - 1800 + 1), (_, i) => i + 1800);

    const moneyNeeded = years
        .map((v, i) => v % 2 == 0 ? 12000 : 12000 + 50 * (18 + i))
        .reduce((acc, curr) => acc + curr, 0);
    const difference = Math.abs(budget - moneyNeeded).toFixed(2);

    console.log(
        budget >= moneyNeeded
            ? `Yes! He will live a carefree life ` +
                `and will have ${difference} dollars left.`
            : `He will need ${difference} ` +
                `dollars to survive.`
    );
}

backToThePast([50000, 1802]);