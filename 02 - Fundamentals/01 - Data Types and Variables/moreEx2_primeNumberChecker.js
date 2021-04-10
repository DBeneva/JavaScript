function primeNumberChecker(n) {
    let isPrime = true;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log('true');
    } else {
        console.log('false');
    }
}

primeNumberChecker(81);