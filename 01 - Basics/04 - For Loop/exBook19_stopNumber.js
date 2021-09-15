function stopNumber(input) {
    const n = Number(input[0]);
    const m = Number(input[1]);
    const stop = Number(input[2]);
    let result = '';

    for (let num = m; num >= n; num--) {
        if (num % 2 == 0 && num % 3 == 0) {
            if (num == stop) {
                break;
            }

            result += num + ' ';
        }
    }

    return result.trim();
}

function stopNumberArr(input) {
    const [n, m, stop] = input.map(Number);
    
    return Array
        .from(Array(m - Math.max(n, stop)), (_, i) => i + 1 + Math.max(n, stop))
        .reverse()
        .filter(x => x % 2 == 0 && x % 3 == 0)
        .join(' ');
}

console.log(stopNumber(['1', '36', '12']));

console.log('====================');

console.log(stopNumberArr(['1', '36', '12']));