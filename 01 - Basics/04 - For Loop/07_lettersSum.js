function getLettersSum(product, controlNumber, budget) {
    controlNumber = Number(controlNumber);
    budget = Number(budget);
    let productPrice = 0;

    for (let i = 0; i < product.length; i++) {
        switch (product[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'y': productPrice += 3; break;
            default: productPrice += 1; break;
        }
    }

    productPrice *= controlNumber;

    if (productPrice > budget) {
        return `Cannot buy ${product}. Product value: ${productPrice.toFixed(2)}`;
    } else {
        return `${product} bought. Money left: ${(budget - productPrice).toFixed(2)}`;
    }
}

function getLettersSumObj(product, ...params) {
    const [controlNumber, budget] = params.map(Number);

    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    const productPrice = controlNumber *
        product.split('')
            .reduce((acc, curr) => vowels.includes(curr) ? acc + 3 : acc + 1, 0);

    return productPrice > budget ?
        `Cannot buy ${product}. Product value: ${productPrice.toFixed(2)}` :
        `${product} bought. Money left: ${(budget - productPrice).toFixed(2)}`
}

console.log(getLettersSum('apple', 2, 20));

console.log('====================');

console.log(getLettersSumObj('apple', 2, 20));