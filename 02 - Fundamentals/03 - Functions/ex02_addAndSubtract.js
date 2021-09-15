function addAndSubtract(num1, num2, num3) {
    let resultAddition = sum(num1, num2);
    let resultFinal = subtract(resultAddition, num3);
    console.log(resultFinal);

    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }
}

addAndSubtract(1, 17, 30);