function lettersChangeNumbers(input) {
    let strings = input.split(' ').filter(x => x.length > 0);
    let result = 0;

    strings.forEach(x => {
        let number = Number(x.substring(1, x.length - 1));
        let first = x[0];
        let last = x[x.length - 1];
        if (first == first.toUpperCase()) {
            result += number / (first.charCodeAt() - 64);
        } else {
            result += number * (first.charCodeAt() - 96);
        }
        if (last == last.toUpperCase()) {
            result -= last.charCodeAt() - 64;
        } else {
            result += last.charCodeAt() - 96;
        }
    });

    console.log(result.toFixed(2));
}

lettersChangeNumbers('a1A');