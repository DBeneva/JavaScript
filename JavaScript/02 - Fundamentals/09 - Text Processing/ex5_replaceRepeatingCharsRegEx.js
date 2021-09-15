function replaceRepeatingChars(string) {
    console.log(string.replace(/(.)(?=\1)/g, ''));
}

replaceRepeatingChars('qqqwerqwecccwd');