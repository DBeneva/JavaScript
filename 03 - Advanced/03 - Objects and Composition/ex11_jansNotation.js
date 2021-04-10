function jansNotation(input) {
    let numbers = [];
    let operations = {
        '+'(num1, num2) {
            return num1 + num2;
        },
        '-'(num1, num2) {
            return num1 - num2;
        },
        '*'(num1, num2) {
            return num1 * num2;
        },
        '/'(num1, num2) {
            return num1 / num2;
        }
    };

    let error = false;

    while (input.length > 0) {

        while (!isNaN(current = input.shift())) {
            numbers.push(current);
        }

        if (numbers.length < 2) {
            console.log('Error: not enough operands!');
            error = true;
            break;
        }

        if (operations[current]) {
            let operands = numbers.splice(-2, 2);
            numbers.push(operands.reduce((a, c) => operations[current](a, c)));
        }
    }

    if (numbers.length == 1 && !error) {
        console.log(numbers[0]);
    } else if (numbers.length > 1) {
        console.log('Error: too many operands!');
    }
}

jansNotation([]        
   );