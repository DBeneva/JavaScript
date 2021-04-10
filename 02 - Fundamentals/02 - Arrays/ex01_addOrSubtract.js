function addOrSubtract(array) {
    let sumOriginalArray = 0;
    let sumModifiedArray = 0;

    for (let i = 0; i < array.length; i++) {
        sumOriginalArray += array[i];

        if (array[i] % 2 == 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }

        sumModifiedArray += array[i];
    }

    console.log(array);
    console.log(sumOriginalArray);
    console.log(sumModifiedArray);
}

addOrSubtract([5, 15, 23, 56, 35]);