function magicMatrices(input) {
    let sumRow = 0;
    let sumColumn = 0;
    let sumPreviousRow = 0;
    let sumPreviousCol = 0;
    let isMagic = true;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input.length; col++) {
            sumRow += input[row][col];
            sumColumn += input[col][row];
        }
        
        if (sumPreviousRow == 0) {
            sumPreviousRow = sumRow;
        } else if (sumPreviousRow != sumRow) {
            isMagic = false;
            break;
        }

        sumRow = 0;
        
        if (sumPreviousCol == 0) {
            sumPreviousCol = sumColumn;
        } else if (sumPreviousCol != sumColumn) {
            isMagic = false;
            break;
        }
        
        sumColumn = 0;

        if (sumPreviousCol != sumPreviousRow) {
            isMagic = false;
        }
        
        if (!isMagic) {
            break;
        }
    }

    if (isMagic) {
        console.log('true');
    } else {
        console.log('false');
    }
}

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);