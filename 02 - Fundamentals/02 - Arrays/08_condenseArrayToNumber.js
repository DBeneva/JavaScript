function condenseArrayToNumber(array) {

    let condensed = [];

    while (array.length > 1) {
        for (let i = 0; i < array.length - 1; i++) {
            condensed[i] = array[i] + array[i + 1];
        }

        condensed.length = array.length - 1;
        array = condensed;
    }

    console.log(array.join());
}

condenseArrayToNumber([5, 0, 4, 1, 2]);