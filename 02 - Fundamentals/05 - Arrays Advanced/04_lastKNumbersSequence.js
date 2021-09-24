function lastKNumbersSequence(n, k) {
    let array = [1];

    for (let current = 1; current < n; current++) {
        let lastK = array.slice(-k);
        let sum = 0;

        for (let num of lastK) {
            sum += num;
        }

        array.push(sum);
    }

    console.log(array.join(' '));
}

lastKNumbersSequence(8, 2);