function reverseAnArrayOfNumbers(n, array) {
    let newArray = [];

    for (let i = 0; i < n; i++) {
        newArray.push(array[i]);
    }

    let reversedArray = newArray.reverse();
    console.log(reversedArray.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);