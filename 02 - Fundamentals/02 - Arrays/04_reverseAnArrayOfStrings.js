function reverseAnArrayOfStrings(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let toBeSwapped = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = toBeSwapped;
    }

    console.log(array.join(' '));
}

reverseAnArrayOfStrings([33, 123, 0, 'dd']);