function negativePositiveNumbers(input) {
    let result = [];

    for (let num of input) {
        num < 0 ? result.unshift(num) : result.push(num);
    }

    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);