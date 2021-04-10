function sortArray(array, type) {
    let sorting = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };

    return array.sort(sorting[type]);
}

sortArray([14, 7, 17, 6, 8], 'asc');