function printDNA(n) {
    let arrayLetters = 'ATCGTTAGGG'.split('');

    for (let row = 0; row < n; row++) {
        let outputLine = printStars(row) +
            printSymbolsAndDashes(row)
            + printStars(row);
        console.log(outputLine);
    }


    function printStars(row) {
        let numberOfStars = 0;

        if (row % 2 == 1) {
            numberOfStars = 1;
        } else if (row % 4 == 0) {
            numberOfStars = 2;
        }

        let printedStars = '*'.repeat(numberOfStars);
        
        return printedStars;
    }

    function printSymbolsAndDashes(row) {
        let [first, second] = arrayLetters.splice(0, 2);
        let numberOfDashes = 0;

        if (row % 2 == 1) {
            numberOfDashes = 2;
        } else if (row % 4 == 2) {
            numberOfDashes = 4;
        }

        let printedSymbolsAndDashes = first +
            '-'.repeat(numberOfDashes) +
            second;
        
        arrayLetters.push(first);
        arrayLetters.push(second);
        
        return printedSymbolsAndDashes;
    }
}

printDNA(4);