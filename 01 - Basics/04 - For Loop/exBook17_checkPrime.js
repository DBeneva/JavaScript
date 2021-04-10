function checkPrime(n) {
    n = Number(n);
    let notPrimeNumber = false;

    for (let i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            notPrimeNumber = true;
        }
    }

    if (notPrimeNumber || n < 2) {
        console.log('Not prime');
    } else {
        console.log('Prime');
    }
}

checkPrime(0);