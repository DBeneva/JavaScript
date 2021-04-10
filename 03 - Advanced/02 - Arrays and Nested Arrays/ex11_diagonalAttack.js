function diagonalAttack(input) {

    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].split(' ').map(Number);
    }

    let sum1 = 0;
    let sum2 = 0;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if (row == col) {
                sum1 += input[row][col];
            }
        }
    }

    for (let row = 0, col = input[row].length - 1; row < input.length, col >= 0; row++, col--) {
        sum2 += input[row][col];
    }

    if (sum1 == sum2) {
        for (let row = 0; row < input.length; row++) {
            for (let col = 0; col < input[row].length; col++) {
                if (row != col && row + col != input.length - 1) {
                    input[row][col] = sum1;
                }
            }
        }
    }

    input.forEach(row => {
        console.log(row.join(' '));
    });
}

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']);