function biggestElement(matrix) {
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let array of matrix) {
        let currentBiggest = array.sort((a, b) => b - a)[0];
        if (currentBiggest > biggest) {
            biggest = currentBiggest;
        }
    }

    console.log(biggest);
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]
   );

biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );