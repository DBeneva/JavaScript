function valueOfAString(input) {
    let value = 0;
    let letterCase = {
        UPPERCASE(string) {
            for (let char of string) {
                let code = char.charCodeAt();
                if (code >= 65 && code <= 90) {
                    value += code;
                }
            }
        },
        LOWERCASE(string) {
            for (let char of string) {
                let code = char.charCodeAt();
                if (code >= 97 && code <= 122) {
                    value += code;
                }
            }
        }
    };
    
    let string = input.shift();
    letterCase[input.shift()](string);
    console.log(`The total sum is: ${value}`);
}

valueOfAString([ 'AC/DC', 'UPPERCASE', '' ]);