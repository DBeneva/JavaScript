function backToThePast([budget, toYear]) {
    budget = Number(budget);
    toYear = Number(toYear);

    for (let i = 1800, age = 18; i <= toYear; i++, age++) {
        if (i % 2 == 0) budget -= 12000;
        else budget -= 12000 + 50 * age;
    }

    console.log(
        budget >= 0
            ? `Yes! He will live a carefree life ` +
                `and will have ${budget.toFixed(2)} dollars left.`
            : `He will need ${Math.abs(budget).toFixed(2)} ` +
                `dollars to survive.`
    );
}

backToThePast([50000, 1802]);