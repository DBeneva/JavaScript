function orbit(input) {
    let matrixWidth = input[0];
    let matrixHeight = input[1];
    let x = input[2];
    let y = input[3];

    let matrix = [];
    for (let row = 0; row < matrixHeight; row++) {
        let line = [];
        
        for (let column = 0; column < matrixWidth; column++) {
            line.push(0);
        }
        
        matrix.push(line);
    }

    for (let row = 0; row < matrixHeight; row++) {
        for (let column = 0; column < matrixWidth; column++) {
            let differenceColumn = Math.abs(column - y);
            let differenceRow = Math.abs(row - x);
            matrix[row][column] = Math.max(differenceColumn, differenceRow) + 1;
        }
    }

    for (let row = 0; row < matrixHeight; row++) {
        console.log(matrix[row].join(' '));
    }
}

orbit([4, 4, 0, 0]);