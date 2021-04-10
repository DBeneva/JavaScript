function sorting(input) {
    let sortedArray = [];
    input = input.sort((a, b) => a - b);

    while (input.length > 0) {
        sortedArray.push(input[input.length - 1]) && input.pop();
        sortedArray.push(input[0]) && input.shift();
    }

    console.log(sortedArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);