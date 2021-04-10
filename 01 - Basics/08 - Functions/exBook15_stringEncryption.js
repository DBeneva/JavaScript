function stringEncryption(input) {
    let n = Number(input[0]);
    let result = '';

    for (let index = 1; index <= n; index++) {
        let symbol = input[index];
        let code = findCode(symbol);
        let currentResult = '';
        let lastDigit = code % 10;
        let firstDigit = findFirstDigit(code);

        currentResult = concatenateNumbers(firstDigit, lastDigit);
        currentResult = addSymbolToBeginning(code + lastDigit, currentResult);
        currentResult = addSymbolToEnd(currentResult, code - firstDigit);
        result += currentResult;
    }
    
    console.log(result);

    function findCode(symbol) {
        return symbol.charCodeAt();
    }

    function findFirstDigit(number) {
        if (number < 100) {
            return Math.trunc(number / 10);
        } else {
            return Math.trunc(number / 100);
        }
    }

    function concatenateNumbers(number1, number2) {
        return '' + number1 + number2;
    }

    function addSymbolToBeginning(number, string) {
        return String.fromCharCode(number) + string;
    }

    function addSymbolToEnd(string, number) {
        return string + String.fromCharCode(number);
    }
}

stringEncryption(['7', 'S', 'o', 'f', 't', 'U', 'n', 'i']);