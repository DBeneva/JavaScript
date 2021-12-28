function mathPower(input) {
    let num = Number(input[0]);
    let power = Number(input[1]);
    
    console.log(getMathPower(num, power));

    function getMathPower(a, b) {
        let result = 1;
        
        if (b == 0) {
            result = 1;
        } else if (b > 0) {
            for (let i = 1; i <= b; i++) {
                result *= a;
            }
        } else {
            for (let i = 1; i <= -b; i++) {
                result *= a;
            }
        
            result = 1 / result;
        }
        
        if (result.toString().indexOf('.') > 0) {
            result = Math.round(result * 1e15) / 1e15;
        }
        
        return result;
    }
}

mathPower(['2', '8']);