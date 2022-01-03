function printGardenPlanning([flowersType, flowersQty, budget]) {
    flowersQty = Number(flowersQty), budget = Number(budget);
    
    const price = flowersQty * getPriceByType();
    const difference = Math.abs(budget - price).toFixed(2);
    
    console.log(
        budget >= price
            ? `Hey, you have a great garden with ${flowersQty} ${flowersType} ` +
                `and ${difference} leva left.`
            : `Not enough money, you need ${difference} leva more.`
    );
    
    function getPriceByType() {
        switch (flowersType) {
            case 'Roses': return getPrice(5, (flowersQty > 80), 0.9);
            case 'Dahlias': return getPrice(3.8, (flowersQty > 90), 0.85);
            case 'Tulips': return getPrice(2.8, (flowersQty > 80), 0.85);
            case 'Narcissus': return getPrice(3, (flowersQty < 120), 1.15);
            case 'Gladiolus': return getPrice(2.5, (flowersQty < 80), 1.2);
        }
    }

    function getPrice(price, condition, multiplier) {
        return price * (condition ? multiplier : 1);
    }
}

printGardenPlanning(['Tulips', 88, 260]);