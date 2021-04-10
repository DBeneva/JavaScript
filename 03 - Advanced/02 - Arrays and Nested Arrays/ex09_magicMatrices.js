function magicMatrices(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b, 0);
    let rowsEqualSum = matrix.filter(x => x.reduce((a, b) => a + b, 0) == sum);
    let matrixTransposed = matrix[0].map((x, i) => matrix.map(x => x[i]));
    let colsEqualSum = matrixTransposed.filter(x => x.reduce((a, b) => a + b, 0) == sum);
    let output = rowsEqualSum.length == matrix.length &&
        colsEqualSum.length == matrix[0].length ?
        true : false;
    console.log(output);
}

magicMatrices([[4, 5, 6],
                [6, 5, 4],
                [5, 5, 5]]
);

magicMatrices([[11, 32, 45],
                [21, 0, 1],
                [21, 1, 1]]
);

magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
);