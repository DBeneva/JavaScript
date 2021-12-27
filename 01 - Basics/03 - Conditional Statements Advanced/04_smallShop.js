function printPrice([product, city, qty]) {
    let price = 0;

    switch (product) {
        case 'coffee': price = getPrice(50, 40, 45); break;
        case 'water': price = getPrice(80, 70, 70); break;
        case 'beer': price = getPrice(120, 115, 110); break;
        case 'sweets': price = getPrice(145, 130, 135); break;
        case 'peanuts': price = getPrice(160, 150, 155); break;
    }

    console.log(price * Number(qty) / 100);

    function getPrice(priceSofia, pricePlovdiv, priceVarna) {
        switch (city) {
            case 'Sofia': return priceSofia;
            case 'Plovdiv': return pricePlovdiv;
            case 'Varna': return priceVarna;
        }
    }
}

printPrice(['beer', 'Sofia', 6]);