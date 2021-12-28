function printCube(n) {
    n = Number(n);

    const output = Array
        .from(Array(Math.ceil(n / 2)), (_, i) => getOutputLine(i))
        .join('\n');

    console.log(output);

    function getOutputLine(i) {
        const curr = n % 2 == 0
            ? 2 + i * 2
            : 1 + i * 2;

        return `Current number: ${curr}. Cube: ${Math.pow(curr, 3)}`;
    }
}

printCube(5);