function enterEvenNumber(input) {
    let i = 0;
    let n = input[i];

    while (n % 2 != 0) {
        console.log('The number is not even.');
        i++;
        n = input[i];
    }

    console.log(`Even number entered: ${n}`);
}

enterEvenNumber([45, 7, 9, 68]);