function sumPrimeNotPrime(input) {
    let sumPrime = 0;
    let sumNotPrime = 0;
    let i = 0;

    while (input[i] != 'stop') {
        let number = Number(input[i]);
        let notPrime = false;

        if (number < 0) {
            console.log('Number is negative.');
        } else {
            for (let j = 2; j < number; j++) {
                if (number % j == 0) {
                    notPrime = true;
                    break;
                }
            }

            if (notPrime) {
                sumNotPrime += number;
            } else {
                sumPrime += number;
            }
        }

        i++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNotPrime}`);
}

sumPrimeNotPrime(['30', '-1', '33', '83', '20', 'stop']);