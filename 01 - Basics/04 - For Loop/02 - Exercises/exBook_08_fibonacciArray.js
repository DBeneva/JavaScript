function fibonacci(endPosition) {
    const sequence = Array.from(Array(endPosition + 1));
    sequence.forEach((_, i) => {
        i > 1
            ? sequence[i] = (sequence[i - 1] + sequence[i - 2])
            : sequence[i] = 1
    });
    
    console.log(sequence[endPosition]);
}

fibonacci(5);