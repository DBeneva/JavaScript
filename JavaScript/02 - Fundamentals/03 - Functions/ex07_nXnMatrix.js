function nXnMatrix(n) {

    for (let i = 0; i < n; i++) {
        printNxNline(n);
    }

    function printNxNline(n) {
        let printedLine = '';

        for (let i = 0; i < n; i++) {
            printedLine += n + ' ';
        }

        console.log(printedLine);
    }
}

nXnMatrix(5);