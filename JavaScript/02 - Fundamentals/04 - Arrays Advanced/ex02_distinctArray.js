function distinctArray(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (!result.includes(input[i])) {
            result.push(input[i]);
        }
    }

    console.log(result.join(' '));
}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);