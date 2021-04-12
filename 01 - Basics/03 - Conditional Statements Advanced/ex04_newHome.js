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
        Roses: flowersQty > 80 ? 5 * 0.9 : 5,
        Dahlias: flowersQty > 90 ? 3.8 * 0.85 : 3.8,
        Tulips: flowersQty > 80 ? 2.8 * 0.85 : 2.8,
        Narcissus: flowersQty < 120 ? 3 * 1.15 : 3,
        Gladiolus: flowersQty < 80 ? 2.5 * 1.2 : 2.5
    };
    
    const expenses = flowers[flowersType] * flowersQty;
    const difference = Math.abs(budget - expenses);
    
    return budget >= expenses ? `Hey, you have a great garden with ${flowersQty} ${flowersType} and ${difference.toFixed(2)} leva left.` :
       `Not enough money, you need ${difference.toFixed(2)} leva more.`;
}

console.log(getNewGarden(['Tulips', 88, 260]));

console.log('====================');

console.log(getNewGardenObj(['Tulips', 88, 260]));