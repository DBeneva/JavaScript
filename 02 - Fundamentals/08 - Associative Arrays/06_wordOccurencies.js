function wordOccurencies(input) {
    let wordOccurencies = new Map();

    for (let line of input) {
        let count = wordOccurencies.has(line) ? wordOccurencies.get(line) + 1 : 1;
        wordOccurencies.set(line, count);
    }

    let sorted = [...wordOccurencies].sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}

wordOccurencies([
    'Here', 'is', 'the', 'first',  'sentence',
    'Here', 'is', 'another', 'sentence',
    'And', 'finally', 'the', 'third', 'sentence'
]);