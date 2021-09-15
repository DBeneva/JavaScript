function helloFrance(input) {
    let collection = input.shift().split('|');
    let budget = Number(input.shift());
    let boughtItems = [];

    collection.forEach(x => {
        let [item, price] = x.split('->');
        price = Number(price);

        if (price <= budget) {
            switch (item) {
                case 'Clothes':
                    if (price <= 50) {
                        budget -= price;
                        boughtItems.push(price);
                    }
                    break;
                case 'Shoes':
                    if (price <= 35) {
                        budget -= price;
                        boughtItems.push(price);
                    }
                    break;
                case 'Accessories':
                    if (price <= 20.50) {
                        budget -= price;
                        boughtItems.push(price);
                    }
                    break;
            }
        }
    });

    let itemsToSell = boughtItems.map(x => x += 0.4 * x);
    let profit = itemsToSell.reduce((a, b) => a + b, 0) - boughtItems.reduce((a, b) => a + b, 0);

    console.log(itemsToSell.map(x => x.toFixed(2)).join(' '));
    console.log(`Profit: ${profit.toFixed(2)}`);
    
    if (budget + itemsToSell.reduce((a, b) => a + b, 0) >= 150) {
        console.log('Hello, France!');
    } else {
        console.log('Time to go.');
    }
}

helloFrance([
    'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
    '120'
]);