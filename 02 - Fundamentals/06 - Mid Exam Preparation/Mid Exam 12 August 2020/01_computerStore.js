function computerStore(input) {
    let customer = input.pop();
    input = input.map(Number);
    input.filter(x => x < 0).
        forEach(x => console.log(`Invalid price!`));

    let totalPrice = input.filter(x => x > 0).reduce((a, b) => a + b, 0);
    let taxes = 0.2 * totalPrice;
    let discountMultiplier = customer == 'special' ? 0.9 : 1;

    if (totalPrice > 0) {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${((totalPrice + taxes) * discountMultiplier).toFixed(2)}$`);
    } else {
        console.log(`Invalid order!`);
    }
}

computerStore([
    '1050',
    '200',
    '450',
    '-2',
    '18.50',
    '16.86', 'special'
]);