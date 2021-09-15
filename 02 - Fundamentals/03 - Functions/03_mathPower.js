function mathPower(base, exponent) {
    let result = 1;

    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }

    return result;
}

console.log(mathPower(2, 8));
