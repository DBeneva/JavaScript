function sortingNumbers(array) {
    array = array.sort((a, b) => a - b);
    let length = array.length;
    let result = [];

    while (result.length < length) {
        result.push(array.shift());
        result.push(array.pop());
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);