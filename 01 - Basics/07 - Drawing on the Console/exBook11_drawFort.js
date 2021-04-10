function drawFort(n) {
    n = Number(n);

    //top line
    let roofTiles = Math.floor(n / 2);
    let column = '/' + '^'.repeat(roofTiles) + '\\';
    let midRoofSize = n * 2 - 2 * roofTiles - 4;
    let midRoof = '_'.repeat(midRoofSize);
    let roof = column + midRoof + column;

    if (n < 5) {
        roof = column + column;
    }

    console.log(roof);

    //middle part
    for (let row = 1; row <= n - 2; row++) {
        let line = '|' + ' '.repeat(2 * n - 2) + '|';
        
        if (row == n - 2 && n >= 5) {
            line = '|' + ' '.repeat(roofTiles + 1) + midRoof + ' '.repeat(roofTiles + 1) + '|';
        }
        
        console.log(line);
    }

    //bottom line
    let columnBottom = '\\' + '_'.repeat(roofTiles) + '/';
    let bottom = columnBottom + ' '.repeat(midRoofSize) + columnBottom;
    
    if (n < 5) {
        bottom = columnBottom + columnBottom;
    }

    console.log(bottom);
}

drawFort(6);