function replaceRepeatingChars(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] != string[i + 1]) {
            result += string[i];
        }
    }
    console.log(result);
}

replaceRepeatingChars('qqqwerqwecccwd');