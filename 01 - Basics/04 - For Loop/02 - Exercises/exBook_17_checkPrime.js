function checkPrime(n) {
    n = Number(n);
    let notPrimeNumber = false;

    for (let i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            notPrimeNumber = true;
        }
    }

    if (notPrimeNumber || n < 2) {
        return 'Not prime';
    } else {
        return 'Prime';
    }
}

function checkPrimeArr(n) {
    n = Number(n);

    return Array.from(Array(n - 1), (_, i) => i + 1)
        .filter(x => n % x == 0).length > 1 || n < 2 ?
        'Not prime' : 'Prime';
}

console.log(checkPrime(11));

console.log('===================');

console.log(checkPrimeArr(11));