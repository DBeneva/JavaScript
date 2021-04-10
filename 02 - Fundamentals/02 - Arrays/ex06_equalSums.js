function equalSums(array) {
    let sumLeft = 0;
    let sumRight = 0;
    let equalSumsFound = false;

    for (let i = 0; i < array.length; i++) {

        if (i != 0) {
            sumLeft += array[i - 1];
        }

        for (let j = array.length - 1; j > i; j--) {
            sumRight += array[j];
        }

        if (sumLeft == sumRight) {
            console.log(i);
            equalSumsFound = true;
            break;
        }

        sumRight = 0;
    }

    if (!equalSumsFound) {
        console.log('no');
    }
}

equalSums([1]);