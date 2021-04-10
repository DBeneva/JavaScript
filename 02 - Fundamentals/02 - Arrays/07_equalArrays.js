function equalArrays(array1, array2) {
    let sum = 0;
    let areIdentical = true;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areIdentical = false;
            break;
        } else {
            sum += Number(array1[i]);
        }
    }

    if (areIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['1'], ['10']);