function diagonalAttack(input) {
    let matrix = [];

    for (let row = 0; row < input.length; row++) {
        let line = [];
        
        for (let column = 0; column < input.length; column++) {
            let number = Number(input[row].split(' ')[column]);
            line.push(number);
        }

        matrix.push(line);
    }

    let diagonalSum1 = 0;
    let column = 0;

    for (let row = 0; row < input.length; row++) {
        diagonalSum1 += matrix[row][column];
        column++;
    }

    let diagonalSum2 = 0;
    column = input.length - 1;

    for (let row = 0; row < input.length; row++) {
        diagonalSum2 += matrix[row][column];
        column--;
    }
    
    if (diagonalSum1 == diagonalSum2) {
        for (let row = 0; row < input.length; row++) {
            for (let column = 0; column < input.length; column++) {
                if (row != column && row + column != input.length - 1) {
                    matrix[row][column] = diagonalSum1;
                }
            }
        }
    }

    for (let row = 0; row < input.length; row++) {
        console.log(matrix[row].join(' '));
    }
}

diagonalAttack(['1 1 1',
                '1 1 1',
                '1 1 0']);