function maxNumber(array) {
    let topNumbers = [];
    let max = Number.NEGATIVE_INFINITY;

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] > max) {
            max = array[i];
            topNumbers.push(max);
        }
    }

    console.log(topNumbers.reverse().join(' '));
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);