function squareFrame(n) {
    n = Number(n);

    let firstLastRow = '+ ' + '- '.repeat(n - 2) + '+';
    console.log(firstLastRow);

    for (let i = 2; i <= n - 1; i++) {
        let midRow = '| ' + '- '.repeat(n - 2) + '|';
        console.log(midRow);
    }

    console.log(firstLastRow);
}

squareFrame(5);