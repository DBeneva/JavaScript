function commonElements(array1, array2) {

    for (let element1 of array1) {
        let isCommon = array2.includes(element1);

        if (isCommon) {
            console.log(element1);
        }
    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);