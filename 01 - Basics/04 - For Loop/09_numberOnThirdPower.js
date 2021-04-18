function numberOnThirdPower(n) {
    n = Number(n);
    let result = '';
    let i = 1;

    if (n % 2 == 0) {
        i = 2;
    }

    for (let i = 2; i <= n; i += 2) {
        result += `Current number: ${i}. Cube: ${Math.pow(i, 3)}\n`;
    }

    return result.trim();
}

function numberOnThirdPowerArr(n) {
    n = Number(n);

    return Array
        .from(Array(Math.ceil(n / 2)), (_, i) => getOutputLine(i))
        .join('\n');

    function getOutputLine(i) {
        const curr = n % 2 == 0 ? 2 + i * 2 : 1 + i * 2;

        return `Current number: ${curr}. Cube: ${Math.pow(curr, 3)}`;
    }
}

console.log(numberOnThirdPower(6));

console.log('====================');

console.log(numberOnThirdPowerArr(6));