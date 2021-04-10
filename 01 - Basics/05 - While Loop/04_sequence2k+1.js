function sequence(n) {
    n = Number(n);
    let sequenceNumber = 1;

    while (sequenceNumber <= n) {
        console.log(sequenceNumber);
        sequenceNumber = sequenceNumber * 2 + 1;
    }
}

sequence(31);