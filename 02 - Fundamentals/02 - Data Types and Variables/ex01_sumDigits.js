function sumDigits(num) {
    num = Number(num);
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = parseInt(num / 10);
    }

    console.log(sum);
}

sumDigits(235474);