function diagonalSums(matrix) {
    let mainDiagonalSum = 0;
    let otherDiagonalSum = 0;
    let firstIndex = 0;
    let secondIndex = matrix.length - 1;
    
    matrix.forEach(row => {
        mainDiagonalSum += row[firstIndex++];
        otherDiagonalSum += row[secondIndex--];
    });

    console.log(`${mainDiagonalSum} ${otherDiagonalSum}`);
}

diagonalSums([[20, 40],
    [10, 60]]
   );
diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );