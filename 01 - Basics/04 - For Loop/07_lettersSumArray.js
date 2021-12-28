function printLettersSum(product, ...params) {
    const [controlNumber, budget] = params.map(Number);

    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    const productPrice = product
        .split('')
        .reduce((a, c) => vowels.includes(c) ? a + 3 : a + 1, 0);
    const finalPrice = controlNumber * productPrice;

    if (finalPrice > budget) {
        console.log(
            `Cannot buy ${product}. ` +
            `Product value: ${finalPrice.toFixed(2)}`
        );
    } else {
        console.log(
            `${product} bought. ` +
            `Money left: ${(budget - finalPrice).toFixed(2)}`
        );
    }
}

printLettersSum('apple', 2, 20);