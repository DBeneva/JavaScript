function printPrice([product, city, qty]) {
    const products = {
        coffee: createProduct(50, 40, 45),
        water: createProduct(80, 70, 70),
        beer: createProduct(120, 115, 110),
        sweets: createProduct(145, 130, 135),
        peanuts: createProduct(160, 150, 155)
    };

    console.log(products[product][city] * Number(qty) / 100);

    function createProduct(priceSofia, pricePlovdiv, priceVarna) {
        return {
            Sofia: priceSofia,
            Plovdiv: pricePlovdiv,
            Varna: priceVarna
        }
    }
}

printPrice(['beer', 'Sofia', 6]);