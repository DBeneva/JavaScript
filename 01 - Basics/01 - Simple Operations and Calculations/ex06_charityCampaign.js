function printCharityMoney(days, bakers, cakes, waffles, pancakes) {
    const gatheredMoney = (cakes * 45 + waffles * 5.8 + pancakes * 3.2) * bakers * days;
    const expenses = gatheredMoney / 8;
    const finalSum = gatheredMoney - expenses;

    console.log(finalSum.toFixed(2));
}

printCharityMoney(20, 8, 14, 30, 16);
printCharityMoney('20', '8', '14', '30', '16');