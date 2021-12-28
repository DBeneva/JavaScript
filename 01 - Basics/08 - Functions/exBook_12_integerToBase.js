function integerToBase(input) {
    let number = Number(input[0]);
    let base = Number(input[1]);
    let result = '';

    while (number >= base) {
        result = number % base + result;;
        number = Math.trunc(number / base);
    }

    result = number + result;
    console.log(result);
}

integerToBase(['32', '16']);