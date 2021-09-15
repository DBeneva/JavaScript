function lastKNumbersSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let lastK = sequence.slice(-k);
        sequence.push(lastK.reduce((a, b) => a + b, 0));
    }

    return sequence;
}

lastKNumbersSequence(6, 3);