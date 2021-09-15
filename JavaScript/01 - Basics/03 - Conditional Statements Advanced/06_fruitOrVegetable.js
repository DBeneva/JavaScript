function fruitOrVegetable([product]) {
    switch (product) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes': return 'fruit';

        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot': return 'vegetable';

        default: return 'unknown';
    }
}

function fruitOrVegetableObj(product) {
    const products = {
        fruit: ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'],
        vegetable: ['tomato', 'cucumber', 'pepper', 'carrot']
    };

    const type = Object.keys(products).find(x => products[x].includes(product));
    return type || 'unknown';
}

console.log(fruitOrVegetable('banan'));

console.log('====================');

console.log(fruitOrVegetableObj('banana'));