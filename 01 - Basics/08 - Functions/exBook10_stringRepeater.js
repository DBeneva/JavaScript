function stringRepeater(input) {
    let string = input[0];
    let n = Number(input[1]);
    
    console.log(repeatString(string, n));

    function repeatString(str, count) {
        let result = '';

        for (let i = 1; i <= count; i++) {
            result += str;
        }
        
        return result;
    }
}

stringRepeater(['roki', '6']);