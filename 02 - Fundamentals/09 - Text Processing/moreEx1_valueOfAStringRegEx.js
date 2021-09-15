function valueOfAString(input) {
    let value = 0;
    let letterCase = {
        UPPERCASE(string) {
            for (let char of string) {
                value += char.match(/[A-Z]/) ? char.charCodeAt() : 0;
            }
        },
        LOWERCASE(string) {
            for (let char of string) {
                value += char.match(/[a-z]/) ? char.charCodeAt() : 0;
            }
        }
    };

    let string = input.shift();
    letterCase[input.shift()](string);
    console.log(`The total sum is: ${value}`);
}

valueOfAString(['AC/DC', 'UPPERCASE', '']);