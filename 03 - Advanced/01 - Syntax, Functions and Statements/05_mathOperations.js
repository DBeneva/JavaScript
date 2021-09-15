function mathOperations(first, second, operator) {
    switch(operator) {
        case '+': console.log(first + second); break;
        case '-': console.log(first - second); break;
        case '*': console.log(first * second); break;
        case '/': console.log(first / second); break;
        case '%': console.log(first % second); break;
        case '**': console.log(first ** second); break;
    }
}

mathOperations(3, 5.5, '*');