function vacation(input) {
    const moneyNeeded = Number(input[0]);
    let money = Number(input[1]), days = 0, spendingDays = 0;

    for (let i = 2; spendingDays < 5 && money < moneyNeeded; i += 2, days++) {
        money = getMoney(input[i], Number(input[i + 1]));
        spendingDays = getSpendingDays(input[i]);
    }

    if (spendingDays == 5) {
        console.log(`You can't save the money.\n${days}`);
    } else if (money >= moneyNeeded) {
        console.log(`You saved the money for ${days} days.`);
    }

    function getMoney(action, sum) {
        if (action == 'spend') return Math.max((money - sum), 0);
        else return money + sum;
    }

    function getSpendingDays(action) {
        if (action == 'spend') return spendingDays + 1;
        else return 0;
    }
}

vacation([2000, 1000, 'spend', 1200, 'save', 2000]);