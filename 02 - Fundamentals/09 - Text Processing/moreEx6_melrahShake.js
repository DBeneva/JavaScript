function melrahShake(input) {
    let string = input.shift();
    let pattern = input.shift();

    while (pattern.length > 0 && string.includes(pattern) && string.indexOf(pattern) != string.lastIndexOf(pattern)) {
        string = string.substring(0, string.indexOf(pattern)) +
            string.substring(string.indexOf(pattern) + pattern.length, string.lastIndexOf(pattern)) +
            string.substring(string.lastIndexOf(pattern) + pattern.length);
        pattern = pattern.substring(0, pattern.length / 2) +
                pattern.substring(pattern.length / 2 + 1);
        console.log(`Shaked it.`);
    }

    console.log(`No shake.`);
    console.log(string);
}

melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm', '' ]);