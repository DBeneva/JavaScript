function numberOnThirdPower(n) {
    n = Number(n);

    if (n % 2 == 0) {
        for (let i = 2; i <= n; i += 2) {
            console.log(`Current number: ${i}. Cube: ${Math.pow(i, 3)}`);
        }
    } else {
        for (let i = 1; i <= n; i += 2) {
            console.log(`Current number: ${i}. Cube: ${Math.pow(i, 3)}`);
        }
    }
}

numberOnThirdPower(5);