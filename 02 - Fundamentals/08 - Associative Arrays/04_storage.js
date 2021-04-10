function storage(input) {
    let items = new Map();

    for (let line of input) {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);
        
        if (items.has(item)) {
            quantity += items.get(item);
        }
        
        items.set(item, quantity);
    }

    for (let [item, quantity] of items) {
        console.log(`${item} -> ${quantity}`);
    }
}

storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);