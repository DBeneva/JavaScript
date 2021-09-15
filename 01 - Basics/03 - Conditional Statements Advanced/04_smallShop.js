function getPrice([product, city, qty]) {
    let price = 0;

    switch (city) {
        case 'Sofia':
            switch (product) {
                case 'coffee': price = 50; break;
                case 'water': price = 80; break;
                case 'beer': price = 120; break;
                case 'sweets': price = 145; break;
                case 'peanuts': price = 160; break;
            }
            break;

        case 'Plovdiv':
            switch (product) {
                case 'coffee': price = 40; break;
                case 'water': price = 70; break;
                case 'beer': price = 115; break;
                case 'sweets': price = 130; break;
                case 'peanuts': price = 150; break;
            }
            break;

        case 'Varna':
            switch (product) {
                case 'coffee': price = 45; break;
                case 'water': price = 70; break;
                case 'beer': price = 110; break;
                case 'sweets': price = 135; break;
                case 'peanuts': price = 155; break;
            }
            break;
    }

    return price * Number(qty) / 100;
}

function getPriceObj([product, city, qty]) {
    const products = {
        coffee: createProduct('coffee', 50, 40, 45),
        water: createProduct('water', 80, 70, 70),
        beer: createProduct('beer', 120, 115, 110),
        sweets: createProduct('sweets', 145, 130, 135),
        peanuts: createProduct('peanuts', 160, 150, 155)
    };
    
    return products[product][city] * Number(qty) / 100;
    
    function createProduct(name, priceSofia, pricePlovdiv, priceVarna) {
        return {
            name,
            Sofia: priceSofia,
            Plovdiv: pricePlovdiv,
            Varna: priceVarna
        }
    }
}

console.log(getPrice(['beer', 'Sofia', 6]));

console.log('====================');

console.log(getPriceObj(['beer', 'Sofia', 6]));