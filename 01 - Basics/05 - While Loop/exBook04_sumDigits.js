function sumDigits(n) {
    n = Number(n);
    let sum = 0;

    do {
        sum += n % 10;
        n = Math.floor(n / 10);    
    } while (n > 0);

    console.log(sum);
}

sumDigits(158);