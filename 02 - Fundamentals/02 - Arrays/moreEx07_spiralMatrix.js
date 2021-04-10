function spiralMatrix(dimension1, dimension2) {

    let spiral = [];
    for (let row = 0; row < dimension1; row++) {
        let line = [];
        
        for (let column = 0; column < dimension2; column++) {
            line.push(0);
        }
        
        spiral.push(line);
    }

    let total = dimension1 * dimension2;
    let number = 1;
    let row = 0;
    let column = 0;
    let step = 0;

    while (number <= total) {

        while (column + step < dimension1) {
            spiral[row][column] = number;
            column++;
            number++;
        }

        column--;
        row++;

        while (row + step < dimension2) {
            spiral[row][column] = number;
            row++;
            number++;
        }

        row--;
        column--;

        while (column >= step) {
            spiral[row][column] = number;
            column--;
            number++;
        }

        column++;
        row--;
        step++;

        while (row >= step) {
            spiral[row][column] = number;
            row--;
            number++;
        }

        row++;
        column++;
    }

    for (let i = 0; i < dimension2; i++) {
        console.log(spiral[i].join(' '));
    }
}

spiralMatrix(3, 3);