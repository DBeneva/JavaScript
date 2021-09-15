function sumFirstLast(array) {
    arrayNums = array.map(Number);
    console.log(arrayNums[0] + arrayNums[arrayNums.length - 1]);
}

sumFirstLast(['20', '30', '40']);