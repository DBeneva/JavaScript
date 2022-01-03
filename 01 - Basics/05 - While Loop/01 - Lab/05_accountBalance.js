function accountBalance(input) {
    inputParamsToNumbers();
    let total = 0;

    for (let i = 1; i < input.length && !isNaN(input[i]); i++) {
        if (input[i] < 0) {
            console.log('Invalid operation!');
            break;
        } else {
            total += input[i];
            console.log(`Increase: ${input[i].toFixed(2)}`);
        }
    }

    console.log(`Total: ${total.toFixed(2)}`);

    function inputParamsToNumbers() {
        for (let i = 0; i < input.length; i++) {
            input[i] = Number(input[i]);
        }
    }
}

accountBalance([5, 120, 45.55, -150]);