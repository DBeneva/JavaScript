function printCube(n) {
    n = Number(n);

    for (let i = n % 2 == 0 ? 2 : 1; i <= n; i += 2) {
        console.log(`Current number: ${i}. Cube: ${Math.pow(i, 3)}`);
    }
}

printCube(5);