function printInWord(num) {
    num = Number(num);

    const numbersInWord = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ];

    console.log(numbersInWord[num - 1] || 'number too big');
}

printInWord('37');