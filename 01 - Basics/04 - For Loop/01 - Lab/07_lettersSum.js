function printLettersSum(product, controlNumber, budget) {
    controlNumber = Number(controlNumber);
    budget = Number(budget);

    const productPrice = controlNumber * getProductPrice(); 

    if (productPrice > budget) {
        console.log(
            `Cannot buy ${product}. ` +
            `Product value: ${productPrice.toFixed(2)}`
        );
    } else {
        console.log(
            `${product} bought. ` +
            `Money left: ${(budget - productPrice).toFixed(2)}`
        );
    }

    function getProductPrice() {
        let result = 0;

        for (let i = 0; i < product.length; i++) {
            result += getValue(product[i]);
        }
    
        return result;
    }

    function getValue(letter) {
        if (['a', 'e', 'i', 'o', 'u', 'y'].includes(letter)) return 3;
        return 1;
    }
}

printLettersSum('apple', 2, 20);