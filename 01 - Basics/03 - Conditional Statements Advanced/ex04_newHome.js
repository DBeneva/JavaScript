function newHome(flowersType, flowersQuantity, budget) {
    flowersQuantity = Number(flowersQuantity);
    budget = Number(budget);
    let expenses = 0;
    
    switch (flowersType) {
        case 'Roses':
            expenses = flowersQuantity * 5;

            if (flowersQuantity > 80) {
                expenses -= 0.1 * expenses;
            }
            break;
            
        case 'Dahlias':
            expenses = flowersQuantity * 3.8;
            
            if (flowersQuantity > 90) {
                expenses -= 0.15 * expenses;
            }
            break;
            
        case 'Tulips':
            expenses = flowersQuantity * 2.8;
            
            if (flowersQuantity > 80) {
                expenses -= 0.15 * expenses;
            }
            break;
            
        case 'Narcissus':
            expenses = flowersQuantity * 3;
            
            if (flowersQuantity < 120) {
                expenses += 0.15 * expenses;
            }
            break;
            
        case 'Gladiolus':
            expenses = flowersQuantity * 2.5;
            
            if (flowersQuantity < 80) {
                expenses += 0.2 * expenses;
            }
            break;
    }

    let difference = Math.abs(budget - expenses);
    
    if (budget >= expenses) {
        console.log(`Hey, you have a great garden with ${flowersQuantity} ${flowersType} and ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
    }
}

newHome('Tulips', 88, 260);