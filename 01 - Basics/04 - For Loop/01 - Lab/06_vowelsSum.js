function printVowelsSum([input]) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        sum += getValue(input[i]);
    }

    console.log(sum);

    function getValue(vowel) {
        switch (vowel) {
            case 'a': return 1;
            case 'e': return 2;
            case 'i': return 3;
            case 'o': return 4;
            case 'u': return 5;
            default: return 0;
        }
    }
}

printVowelsSum(['ice cream']);