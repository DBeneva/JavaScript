function lettersSum(product, controlNumber, budget) {
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
        console.log(`Cannot buy ${product}. Product value: ${productPrice.toFixed(2)}`);
    } else {
        console.log(`${product} bought. Money left: ${(budget - productPrice).toFixed(2)}`);
    }
}

lettersSum('apple', 2, 20);