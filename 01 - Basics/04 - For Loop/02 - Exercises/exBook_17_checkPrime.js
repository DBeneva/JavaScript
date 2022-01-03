function checkPrime(n) {
    n = Number(n);
    let notPrime = false;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) notPrime = true; break;
    }

    if (n < 2 || notPrime) console.log('Not prime');
    else console.log('Prime');
}

function checkPrimeArray(n) {
    n = Number(n);

    console.log(
        Array.from(Array(n - 1), (_, i) => i + 1)
            .filter(x => n % x == 0)
            .length > 1 || n < 2 ? 'Not prime' : 'Prime'
    );
}

checkPrime(12);
console.log('===================');
checkPrimeArray(11);