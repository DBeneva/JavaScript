function printPrice([product, city, qty]) {
    let price = 0;

    switch (product) {
        case 'coffee': price = getCoffeePrice(); break;
        case 'water': price = getWaterPrice(); break;
        case 'beer': price = getBeerPrice(); break;
        case 'sweets': price = getSweetsPrice(); break;
        case 'peanuts': price = getPeanutsPrice(); break;
    }

    console.log(price * Number(qty) / 100);

    function getCoffeePrice() {
        switch (city) {
            case 'Sofia': return 50;
            case 'Plovdiv': return 40;
            case 'Varna': return 45;
        }
    }
    
    function getWaterPrice() {
        switch (city) {
            case 'Sofia': return 80;
            case 'Plovdiv': return 70;
            case 'Varna': return 70;
        }
    }

    function getBeerPrice() {
        switch (city) {
            case 'Sofia': return 120;
            case 'Plovdiv': return 115;
            case 'Varna': return 110;
        }
    }

    function getSweetsPrice() {
        switch (city) {
            case 'Sofia': return 145;
            case 'Plovdiv': return 130;
            case 'Varna': return 135;
        }
    }

    function getPeanutsPrice() {
        switch (city) {
            case 'Sofia': return 160;
            case 'Plovdiv': return 150;
            case 'Varna': return 155;
        }
    }
}

function printPriceObject([product, city, qty]) {
    const products = {
        coffee: createProduct('coffee', 50, 40, 45),
        water: createProduct('water', 80, 70, 70),
        beer: createProduct('beer', 120, 115, 110),
        sweets: createProduct('sweets', 145, 130, 135),
        peanuts: createProduct('peanuts', 160, 150, 155)
    };

    console.log(products[product][city] * Number(qty) / 100);

    function createProduct(name, priceSofia, pricePlovdiv, priceVarna) {
        return {
            name,
            Sofia: priceSofia,
            Plovdiv: pricePlovdiv,
            Varna: priceVarna
        }
    }
}

printPrice(['beer', 'Sofia', 6]);
console.log('====================');
printPriceObject(['beer', 'Sofia', 6]);