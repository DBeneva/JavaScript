function printVowelsSum([input]) {
    const vowels = ['', 'a', 'e', 'i', 'o', 'u'];
    const output = input
        .split('')
        .filter(x => vowels.includes(x))
        .reduce((acc, curr) => acc + vowels.indexOf(curr), 0);

    console.log(output);
}

printVowelsSum(['ice cream']);