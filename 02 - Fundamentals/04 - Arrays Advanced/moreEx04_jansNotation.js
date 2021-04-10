function jansNotation(input) {
    let numbers = [];
    let isError = false;

    for (let i = 0; i < input.length; i++) {

        if (Number(input[i])) {
            numbers.push(input[i]);
        } else {

            if (numbers.length < 2) {
                console.log('Error: not enough operands!');
                isError = true;
                break;
            }

            let a = Number(numbers.splice(numbers.length - 2, 1));
            let b = Number(numbers.splice(numbers.length - 1, 1));

            switch (input[i]) {
                case '+': numbers.push(a + b); break;
                case '-': numbers.push(a - b); break;
                case '*': numbers.push(a * b); break;
                case '/': numbers.push(a / b); break;
            }
        }
    }

    if (numbers.length == 1 && !isError) {
        console.log(numbers[0]);
    } else if (numbers.length > 1) {
        console.log('Error: too many operands!');
    }
}

jansNotation([15, '/']);