function oddOccurrencies(input) {
    input = input.split(' ');
    let occurrencies = new Map();

    input.forEach(x => {
        x = x.toLowerCase();
        let value = occurrencies.has(x) ? occurrencies.get(x) + 1 : 1;
        occurrencies.set(x, value);
    });

    return [...occurrencies]
        .filter(x => x[1] % 2 == 1)
        .map(x => x[0]).join(' ');
}

console.log(oddOccurrencies('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));