function digits(n) {
    n = Number(n);

    let num = n;
    let num1 = Math.floor(num / 100);
    let num2 = Math.floor(n / 10) % 10;
    let num3 = n % 10;
    let result = '';    

    for (let rows = 1; rows <= num1 + num2; rows++) {
        for (let numbersPerRow = 1; numbersPerRow <= num1 + num3; numbersPerRow++) {
            if (num % 5 == 0) {
                num -= num1;
            } else if (num % 3 == 0) {
                num -= num2;
            } else {
                num += num3;
            }

            result += num + ' ';
        }

        console.log(result);
        result = '';
    }
}

digits('132');