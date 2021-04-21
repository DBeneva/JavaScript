function oddEvenPosition(...input) {
    const n = Number(input[0]);
    let oddSum = 0;
    let oddMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;
    let evenSum = 0;
    let evenMin = Number.POSITIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 1) {
            oddSum += Number(input[i]);

            if (Number(input[i]) < oddMin) {
                oddMin = Number(input[i]);
            }

            if (Number(input[i]) > oddMax) {
                oddMax = Number(input[i]);
            }
        } else {
            evenSum += Number(input[i]);

            if (Number(input[i]) < evenMin) {
                evenMin = Number(input[i]);
            }

            if (Number(input[i]) > evenMax) {
                evenMax = Number(input[i]);
            }
        }
    }

    if (oddMin == Number.POSITIVE_INFINITY) {
        oddMin = 'No';
    }

    if (evenMin == Number.POSITIVE_INFINITY) {
        evenMin = 'No';
    }

    if (oddMax == Number.NEGATIVE_INFINITY) {
        oddMax = 'No';
    }

    if (evenMax == Number.NEGATIVE_INFINITY) {
        evenMax = 'No';
    }

    return `OddSum=${oddSum},
OddMin=${oddMin},
OddMax=${oddMax},
EvenSum=${evenSum},
EvenMin=${evenMin},
EvenMax=${evenMax}`;
}

function oddEvenPositionArr(...input) {
    const numbers = input.slice(1).map(Number);
    const oddNumbers = getOddOrEven('odd');
    const oddSum = oddNumbers.reduce((acc, curr) => acc + curr, 0);
    const oddMin = Math.min(...oddNumbers) || 'No';
    const oddMax = Math.max(...oddNumbers) || 'No';
    const evenNumbers = getOddOrEven('even');
    const evenSum = evenNumbers.reduce((acc, curr) => acc + curr, 0);
    const evenMin = Math.min(...evenNumbers) || 'No';
    const evenMax = Math.max(...evenNumbers) || 'No';
    
    return `OddSum=${oddSum},
OddMin=${oddMin},
OddMax=${oddMax},
EvenSum=${evenSum},
EvenMin=${evenMin},
EvenMax=${evenMax}`;

    function getOddOrEven(oddOrEven) {
        const types = {
            odd: numbers.filter(n => n % 2 != 0),
            even: numbers.filter(n => n % 2 == 0)
        };

        return types[oddOrEven];
    }
}

console.log(oddEvenPosition(1, -5));

console.log('====================');

console.log(oddEvenPositionArr(3, -1, -2, -3));