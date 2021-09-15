function lowestPricesInCities(array) {
    let products = {};

    array.forEach(line => {
        let [town, product, price] = line.split(' | ');

        if (!products[product] || (products[product].price > Number(price))) {
            products[product] = { town, price: Number(price) };
        }
    });

    Object.entries(products).forEach(([product, { town, price }]) => {
        console.log(`${product} -> ${price} (${town})`);
    });
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);