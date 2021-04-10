function factorial(n) {
    n = Number(n);
    let factorialN = 1;

    do {
        factorialN *= n;
        n--;
    } while (n > 1);

    console.log(factorialN);
}

factorial(5);