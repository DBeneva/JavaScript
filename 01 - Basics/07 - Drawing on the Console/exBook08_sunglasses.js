function sunglasses(n) {
    n = Number(n);

    //print first row
    let firstLastline = '*'.repeat(n * 2) + ' '.repeat(n) + '*'.repeat(n * 2);
    console.log(firstLastline);

    //print mid rows
    let glasses = '*' + '/'.repeat(2 * n - 2) + '*';
    
    for (let row = 1; row <= n - 2; row++) {
        let midrow = '';

        if (row == Math.ceil(n / 2) - 1) {
            midrow += glasses + '|'.repeat(n) + glasses;
        } else {
        midrow += glasses + ' '.repeat(n) + glasses;
        }

        console.log(midrow);
    }

    //print last row
    console.log(firstLastline);
}

sunglasses(5);