function asciiSumator(input) {
    let start = Math.min(input[0].charCodeAt(), input[1].charCodeAt());
    let end = Math.max(input[0].charCodeAt(), input[1].charCodeAt());
    let string = input[2];
    let sum = 0;

    for (let char of string) {
        let code = char.charCodeAt();
        if (code > start && code < end) {
            sum += code;
        }
    }

    console.log(sum);
}

asciiSumator([ 'a', '1', 'jfe392$#@j24ui9ne#@$' ]);