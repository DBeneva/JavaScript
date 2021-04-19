function numbersEndingIn7() {
    let result = '';

    for (let i = 0; i < 1000; i++) {
        if (i % 10 == 7) {
            result += i + '\n';
        }
    }

    return result.trim();
}

function numbersEndingIn7Arr() {
    return Array.from(Array(1000), (_, i) => i + 1).filter(x => x % 10 == 7);
}

console.log(numbersEndingIn7());

console.log('====================');

console.log(numbersEndingIn7());