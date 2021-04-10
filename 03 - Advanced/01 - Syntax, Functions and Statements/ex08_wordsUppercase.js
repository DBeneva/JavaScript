function wordsUppercase(string) {
    let matches = string.match(/\b\w+\b/g);
    let result = [];

    matches.forEach(match => {
        result.push(match.toLocaleUpperCase());
    });

    console.log(result.join(', '));
}

wordsUppercase('Hi, how are you?');