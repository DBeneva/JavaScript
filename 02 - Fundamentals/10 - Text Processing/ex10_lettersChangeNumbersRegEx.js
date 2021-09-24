function lettersChangeNumbers(input) {
    let strings = input.split(' ').filter(x => x.length > 0);
    let result = 0;

    strings.forEach(x => {
        let number = Number(x.match(/\d+/)[0]);
        let first = x.match(/[A-Za-z](?=\d)/)[0];
        let last = x.match(/(?<=\d)[A-Za-z]/)[0];
        result += first.match(/[A-Z]/) ?
            number / (first.charCodeAt() - 64) :
            number * (first.charCodeAt() - 96);
        result += last.match(/[A-Z]/) ?
            64 - last.charCodeAt() :
            last.charCodeAt() - 96;
    });

    console.log(result.toFixed(2));
}

lettersChangeNumbers('A12b s17G');