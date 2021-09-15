function rotateArray(input) {
    let rotationsTotal = input[input.length - 1];
    let array = [];

    for (let i = 0; i < input.length - 1; i++) {
        array.push(input[i]);
    }

    for (let rotation = 1; rotation <= rotationsTotal; rotation++) {
        array.unshift(array[array.length - 1]);
        array.length -= 1;
    }

    console.log(array.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);