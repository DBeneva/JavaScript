function fruitOrVegetable([product]) {
    let type = '';

    switch (product) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes': type = 'fruit';
            break;

        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot': type = 'vegetable';
            break;

        default: type = 'unknown'; break;
    }

    return type;
}

function fruitOrVegetableObj(product) {
    const products = {
        fruit: ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'],
        vegetable: ['tomato', 'cucumber', 'pepper', 'carrot']
    };

    let type = Object.keys(products).find(x => products[x].includes(product));
    return type || 'unknown';
}

console.log(fruitOrVegetable('banan'));

console.log('====================');

console.log(fruitOrVegetableObj('banana'));