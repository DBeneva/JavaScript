function loadingBar(num) {
    printLoadingBar(num);

    function printLoadingBar(number) {
        let outputLine = `${number}% [`;

        for (let i = 0; i < number / 10; i++) {
            outputLine += '%';
        }

        for (let i = 0; i < 10 - number / 10; i++) {
            outputLine += '.';
        }

        outputLine += ']\nStill loading...';
        
        if (number == 100) {
            outputLine = '100% Complete!\n[%%%%%%%%%%]';
        }
        
        console.log(outputLine);
    }
}

loadingBar(100);