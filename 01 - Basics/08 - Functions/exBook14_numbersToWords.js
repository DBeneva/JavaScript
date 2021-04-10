function letterize(input) {
    //how many numbers to letterize?
    let n = Number(input[0]);
    
    //letterize number 1 to n
    for (let index = 1; index <= n; index++) {
        let number = Number(input[index]);
        let numberAbs = Math.abs(number);

        //too small, too large, less than 3 digits
        if (number < -999) {
            console.log('too small');
            continue;
        } else if (number > 999) {
            console.log('too large');
            continue;
        } else if (numberAbs < 100) {
            continue;
        }

        //letterize first digit (hundreds)
        let hundreds = '';

        switch (Math.trunc(numberAbs / 100) % 10) {
            case 1: hundreds = 'one-hundred'; break;
            case 2: hundreds = 'two-hundred'; break;
            case 3: hundreds = 'three-hundred'; break;
            case 4: hundreds = 'four-hundred'; break;
            case 5: hundreds = 'five-hundred'; break;
            case 6: hundreds = 'six-hundred'; break;
            case 7: hundreds = 'seven-hundred'; break;
            case 8: hundreds = 'eight-hundred'; break;
            case 9: hundreds = 'nine-hundred'; break;
        }

        //add ' and' if second and third digit != 0
        if (numberAbs % 100 != 0) {
            hundreds = hundreds + ' and';
        }

        //letterize second digit (tens)
        let tens = '';
        switch (Math.trunc(numberAbs / 10) % 10) {
            case 1:
                switch (numberAbs % 100) {
                    case 10: tens = ' ten'; break;
                    case 11: tens = ' eleven'; break;
                    case 12: tens = ' twelve'; break;
                    case 13: tens = ' thirteen'; break;
                    case 14: tens = ' fourteen'; break;
                    case 15: tens = ' fifteen'; break;
                    case 16: tens = ' sixteen'; break;
                    case 17: tens = ' seventeen'; break;
                    case 18: tens = ' eighteen'; break;
                    case 19: tens = ' nineteen'; break;
                }
                break;

            case 2: tens = ' twenty'; break;
            case 3: tens = ' thirty'; break;
            case 4: tens = ' fourty'; break;
            case 5: tens = ' fifty'; break;
            case 6: tens = ' sixty'; break;
            case 7: tens = ' seventy'; break;
            case 8: tens = ' eighty'; break;
            case 9: tens = ' ninety'; break;
        }

        //letterize third digit (ones) if second digit != 1
        let ones = '';

        if (Math.trunc(numberAbs / 10) % 10 != 1) {
            switch (numberAbs % 10) {
                case 1: ones = ' one'; break;
                case 2: ones = ' two'; break;
                case 3: ones = ' three'; break;
                case 4: ones = ' four'; break;
                case 5: ones = ' five'; break;
                case 6: ones = ' six'; break;
                case 7: ones = ' seven'; break;
                case 8: ones = ' eight'; break;
                case 9: ones = ' nine'; break;
            }
        }

        //concatenate hundreds, tens and ones
        let letterizedNumber = hundreds + tens + ones;
        
        //add 'minus ' for negative numbers
        if (number < 0) {
            letterizedNumber = 'minus ' + letterizedNumber;
        }

        //print letterized number
        console.log(letterizedNumber);
    }
}

letterize(['3', '500', '123', '9']);