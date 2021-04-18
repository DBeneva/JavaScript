function getVowelsSum(input) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case 'a': sum += 1; break;
            case 'e': sum += 2; break;
            case 'i': sum += 3; break;
            case 'o': sum += 4; break;
            case 'u': sum += 5; break;
        }
    }
    
    return sum;
}

function getVowelsSumObj(input) {
    const vowels = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5
    };

    return input
        .split('')
        .reduce((acc, curr) => vowels[curr] ? acc + vowels[curr] : acc + 0, 0);
}

console.log(getVowelsSum('ice cream'));

console.log('====================');

console.log(getVowelsSumObj('ice cream'));