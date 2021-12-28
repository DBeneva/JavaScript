function printShootingPlan([budget, stats, pricePerStat]) {
    inputParamsToNumbers();

    const expenses = getExpenses();
    const difference = Math.abs(budget - expenses).toFixed(2);
    
    if (expenses > budget) {
        console.log(
            'Not enough money!\n' +
            `Wingard needs ${difference} leva more.`
        );
    } else {
        console.log(
            'Action!\n' +
            `Wingard starts filming with ${difference} leva left.`
        );
    }
    
    function inputParamsToNumbers() {
        budget = Number(budget);
        stats = Number(stats);
        pricePerStat = Number(pricePerStat);
    }
    
    function getExpenses() {
        const sceneryPrice = budget * 0.1;
        if (stats > 150) pricePerStat *= 0.9;
        
        return sceneryPrice + (pricePerStat * stats);
    }
}

printShootingPlan([20000, 120, 55.5]);