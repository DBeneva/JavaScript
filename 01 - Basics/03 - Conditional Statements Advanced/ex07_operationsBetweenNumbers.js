function calculateNumbers([first, second, operator]) {
    first = Number(first);
    second = Number(second);
    
    const result = getResult();
    const output = getOutput() + evenOrOdd();

    console.log(output);

    function getResult() {
        switch (operator) {
            case '+': return first + second;
            case '-': return first - second;
            case '*': return first * second;
            case '/': return (first / second).toFixed(2);
            case '%': return first % second;
        }
    }

    function getOutput() {
        if (['/', '%'].includes(operator) && second == 0) {
            return `Cannot divide ${first} by zero`;
        } else {
           return `${first} ${operator} ${second} = ${result}`;
        }    
    }

    function evenOrOdd() {
        if (['+', '-', '*'].includes(operator)) {
            return result % 2 == 0 ? ' - even' : ' - odd';
        } else return '';
    }
}

calculateNumbers([10, 3, '%']);