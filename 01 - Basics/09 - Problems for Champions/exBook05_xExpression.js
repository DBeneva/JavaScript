function expression(input) {
    let result = 0;
    let index = 0;
    let symbol = input[0][index];
    let operator = '+';
    let innerResult = 0;
    let innerOperator = '+';

    while (symbol != '=') {
        if (symbol == '(') {
            index++;
            symbol = input[0][index];

            while (symbol != ')') {
                if (symbol.charCodeAt() >= 49 && symbol.charCodeAt() <= 57) {
                    switch (innerOperator) {
                        case '+': innerResult += Number(symbol); break;
                        case '-': innerResult -= Number(symbol); break;
                        case '*': innerResult *= Number(symbol); break;
                        case '/': innerResult /= Number(symbol); break;
                    }
                } else {
                    innerOperator = symbol;
                }

                index++;
                symbol = input[0][index];
                
                if (symbol == ')') {
                    switch (operator) {
                        case '+': result += innerResult; break;
                        case '-': result -= innerResult; break;
                        case '*': result *= innerResult; break;
                        case '/': result /= innerResult; break;
                    }

                    innerResult = 0;
                    innerOperator = '+';
                    break;
                }
            }
        } else if (symbol.charCodeAt() >= 49 && symbol.charCodeAt() <= 57) {
            switch (operator) {
                case '+': result += Number(symbol); break;
                case '-': result -= Number(symbol); break;
                case '*': result *= Number(symbol); break;
                case '/': result /= Number(symbol); break;
            }
        } else {
            operator = symbol;
        }

        index++;
        symbol = input[0][index];
    }

    console.log(result.toFixed(2));
}

expression(['4+6/5+(4*9-8)/7*2=']);