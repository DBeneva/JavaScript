function spiralMatrix(height, width) {
    let number = 1;
    let step = 0;
    let matrix = [];

    for (let row = 0; row < height; row++) {
        matrix[row] = [];
    }

    let row = 0;
    let col = 0;

    while (number <= width * height) {
        while (col + step < width) {
            matrix[row][col] = number;
            number++;
            col++;
        }

        col--;
        row++;

        while (row + step < height) {
            matrix[row][col] = number;
            number++;
            row++;
        }

        row--;
        col--;

        while (col >= step) {
            matrix[row][col] = number;
            number++;
            col--;
        }

        col++;
        row--;
        step++;

        while (row >= step) {
            matrix[row][col] = number;
            number++;
            row--;
        }

        row++;
        col++;
    }

    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}

spiralMatrix(5, 5);