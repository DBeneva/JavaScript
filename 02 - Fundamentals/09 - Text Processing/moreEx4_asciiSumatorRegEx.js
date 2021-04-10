function asciiSumator([first, second, string]) {
    let [start, end] = [first, second].sort((a, b) => a.charCodeAt() - b.charCodeAt());
    start = String.fromCharCode(start.charCodeAt() + 1);
    end = String.fromCharCode(end.charCodeAt() - 1);
    let between = new RegExp(`[${start}-${end}]`);
    let sum = 0;

    for (let char of string) {
        sum += char.match(between) ? char.charCodeAt() : 0;
    }

    console.log(sum);
}

asciiSumator([ '?', 'E', '@ABCEF' ]);