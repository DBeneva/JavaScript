function fibonacci(endPosition) {
    endPosition = Number(endPosition);
    let first = 0;
    let second = 1;

    for (let position = 0; position <= endPosition; position++) {
        const num = first + second;
        second = first;
        first = num;
    }

    console.log(first);
}

fibonacci(5);