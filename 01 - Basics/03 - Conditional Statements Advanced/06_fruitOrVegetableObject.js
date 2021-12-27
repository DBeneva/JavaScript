function fruitOrVegetable([product]) {
    const products = {
        fruit: ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'],
        vegetable: ['tomato', 'cucumber', 'pepper', 'carrot']
    };

    const type = Object.keys(products).find(x => products[x].includes(product));
    console.log(type || 'unknown');
}

fruitOrVegetable(['tomato']);
fruitOrVegetable(['banana']);
fruitOrVegetable(['banan']);