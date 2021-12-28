function printGardenPlanning([flowersType, ...params]) {
    const [flowersQty, budget] = params.map(Number);

    const flowers = {
        Roses: getPrice(5, flowersQty > 80, 0.9),
        Dahlias: getPrice(3.8, flowersQty > 90, 0.85),
        Tulips: getPrice(2.8, flowersQty > 80, 0.85),
        Narcissus: getPrice(3, flowersQty < 120, 1.15),
        Gladiolus: getPrice(2.5, flowersQty < 80, 1.2)
    };

    const price = flowers[flowersType] * flowersQty;
    const difference = Math.abs(budget - price);
    
    console.log(
        budget >= price
            ? `Hey, you have a great garden with ${flowersQty} ${flowersType} ` +
                `and ${difference} leva left.`
            : `Not enough money, you need ${difference} leva more.`
    );

    function getPrice(price, condition, multiplier) {
        return price * (condition ? multiplier : 1);
    }
}

printGardenPlanning(['Tulips', 88, 260]);