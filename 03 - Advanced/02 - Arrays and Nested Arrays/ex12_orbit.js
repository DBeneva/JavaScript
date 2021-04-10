function orbit([width, height, starRow, starCol]) {
    let orbits = [];

    for (let row = 0; row < height; row++) {
        orbits[row] = [];
    }

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            let rowDiff = Math.abs(row - starRow);
            let colDiff = Math.abs(col - starCol);
            
            if (rowDiff == colDiff) {
                orbits[row][col] = rowDiff + 1; 
            } else {
                orbits[row][col] = Math.max(rowDiff, colDiff) + 1;
            }
        }
    }

    orbits.forEach(row => {
        console.log(row.join(' '));
    });
}

orbit([5, 5, 2, 2]);