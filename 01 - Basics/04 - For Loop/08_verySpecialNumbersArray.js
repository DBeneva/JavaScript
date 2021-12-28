function printSpecialNums(...input) {
    const [start, end, n] = input.map(Number);

    return Array
        .from(Array(end - start + 1), (_, i) => getOutputLine(i + start))
        .join('\n');

    function getOutputLine(i) {
        if (i % (n * n) == 0) return `Very special number: ${i}`;
        else if (i % n == 0) return `Special number: ${i}`;
        else return i;
    }
}

printSpecialNums(3, 20, 3);