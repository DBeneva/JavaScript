function specialNumbers(start, end, n) {
    start = Number(start);
    end = Number(end);
    n = Number(n);
    let result = '';

    for (let i = start; i <= end; i++) {
        if (i % (n * n) == 0) {
            result += `Very special number: ${i}\n`;
        } else if (i % n == 0) {
            result += `Special number: ${i}\n`;
        } else {
            result += i + '\n';
        }
    }

    return result.trim();
}

function specialNumbersArr(...input) {
    const [start, end, n] = input.map(Number);

    return Array
        .from(Array(end - start + 1), (_, i) => getOutputLine(i + start))
        .join('\n');

    function getOutputLine(i) {
        return i % (n * n) == 0 ? `Very special number: ${i}` :
            i % n == 0 ? `Special number: ${i}` :
                i;
    }
}

console.log(specialNumbers(3, 20, 3));

console.log('====================');

console.log(specialNumbersArr(3, 20, 3));