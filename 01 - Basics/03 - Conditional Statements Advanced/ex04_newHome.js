function getNewGarden([flowersType, flowersQty, budget]) {
    flowersQty = Number(flowersQty);
    budget = Number(budget);
    let expenses = 0;

    switch (flowersType) {
        case 'Roses':
            expenses = flowersQty * 5;

            if (flowersQty > 80) {
                expenses *= 0.9;
            }
            break;

        case 'Dahlias':
            expenses = flowersQty * 3.8;

            if (flowersQty > 90) {
                expenses *= 0.85;
            }
            break;

        case 'Tulips':
            expenses = flowersQty * 2.8;

            if (flowersQty > 80) {
                expenses *= 0.85;
            }
            break;

        case 'Narcissus':
            expenses = flowersQty * 3;

            if (flowersQty < 120) {
                expenses *= 1.15;
            }
            break;

        case 'Gladiolus':
            expenses = flowersQty * 2.5;

            if (flowersQty < 80) {
                expenses *= 1.2;
            }
            break;
    }

    let difference = Math.abs(budget - expenses);

    if (budget >= expenses) {
        return `Hey, you have a great garden with ${flowersQty} ${flowersType} and ${difference.toFixed(2)} leva left.`;
    } else {
        return `Not enough money, you need ${difference.toFixed(2)} leva more.`;
    }
}

function getNewGardenObj([flowersType, ...params]) {
    const [flowersQty, budget] = params.map(Number);

    const flowers = {
        Roses: getFlowerPrice(5, flowersQty > 80, 0.9),
        Dahlias: getFlowerPrice(3.8, flowersQty > 90, 0.85),
        Tulips: getFlowerPrice(2.8, flowersQty > 80, 0.85),
        Narcissus: getFlowerPrice(3, flowersQty < 120, 1.15),
        Gladiolus: getFlowerPrice(2.5, flowersQty < 80, 1.2)
    };
    
    const expenses = flowers[flowersType] * flowersQty;
    const difference = Math.abs(budget - expenses);
    
    return budget >= expenses ? `Hey, you have a great garden with ${flowersQty} ${flowersType} and ${difference.toFixed(2)} leva left.` :
    `Not enough money, you need ${difference.toFixed(2)} leva more.`;
    
    function getFlowerPrice(price, condition, multiplier) {
        return price * (condition ? multiplier : 1);
    }
}

console.log(getNewGarden(['Tulips', 88, 260]));

console.log('====================');

console.log(getNewGardenObj(['Tulips', 88, 260]));