function stopNumber(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let stop = Number(input[2]);
    let result = '';

    for (let num = m; num >= n; num--) {
        if (num % 2 == 0 && num % 3 == 0) {
            if (num == stop) {
                break;
            }

            result += num + ' ';
        }
    }

    console.log(result);
}

stopNumber(['1', '36', '12']);