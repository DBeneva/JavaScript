function rectangleWithStars(n) {
    n = Number(n);
    let firstLastRow = '%'.repeat(n * 2);

    console.log(firstLastRow);
    
    let midRows = n;
    
    if (n % 2 == 0) {
        midRows--;
    }

    for (let row = 1; row <= midRows; row++) {
        let spacesNumber = n * 2 - 2;
        let spaces = ' '.repeat(spacesNumber);
        let printLine = '%' + spaces + '%';
 
        if (row == Math.ceil(n / 2)) {
            printLine = '%' + ' '.repeat((spacesNumber - 2) / 2) + '**' + ' '.repeat((spacesNumber - 2) / 2) + '%';
        }
 
        console.log(printLine);
    }
 
    console.log(firstLastRow);
}

rectangleWithStars('4');