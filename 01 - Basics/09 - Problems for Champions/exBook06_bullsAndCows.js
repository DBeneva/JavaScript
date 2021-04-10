function bullsAndCows(input) {
    let secretNumber = input[0];
    let bulls = Number(input[1]);
    let cows = Number(input[2]);
    let guessNumbers = '';
    let found = false;

    for (let currentNumber = 1111; currentNumber <= 9999; currentNumber++) {
        let digit1 = Math.trunc(currentNumber / 1000);
        let digit2 = Math.trunc(currentNumber / 100) % 10;
        let digit3 = Math.trunc(currentNumber / 10) % 10;
        let digit4 = currentNumber % 10;

        if (digit1 == 0 || digit2 == 0 || digit3 == 0 || digit4 == 0) {
            continue;
        }
        
        let currentNumberBulls = 0;
        let currentNumberCows = 0;
        
        //secret number digits
        let secretNumberDigit1 = Number(secretNumber[0]);
        let secretNumberDigit2 = Number(secretNumber[1]);
        let secretNumberDigit3 = Number(secretNumber[2]);
        let secretNumberDigit4 = Number(secretNumber[3]);
        
        //numbers to check (and remove if match)
        let digitToCheck1 = digit1;
        let digitToCheck2 = digit2;
        let digitToCheck3 = digit3;
        let digitToCheck4 = digit4;
        
        //check for bulls, count and remove
        if (digitToCheck1 == secretNumberDigit1) {
            currentNumberBulls++;
            digitToCheck1 = -1;
            secretNumberDigit1 = -2;
        }
        
        if (digitToCheck2 == secretNumberDigit2) {
            currentNumberBulls++;
            digitToCheck2 = -1;
            secretNumberDigit2 = -2;
        }
        
        if (digitToCheck3 == secretNumberDigit3) {
            currentNumberBulls++;
            digitToCheck3 = -1;
            secretNumberDigit3 = -2;
        }
        
        if (digitToCheck4 == secretNumberDigit4) {
            currentNumberBulls++;
            digitToCheck4 = -1;
            secretNumberDigit4 = -2;
        }
        
        //bulls in current combination == bulls? -> check for cows
        if (currentNumberBulls == bulls) {
            if (digitToCheck1 == secretNumberDigit2) {
                currentNumberCows++;
                digitToCheck1 = -1;
                secretNumberDigit2 = -2;
            } else if (digitToCheck1 == secretNumberDigit3) {
                currentNumberCows++;
                digitToCheck1 = -1;
                secretNumberDigit3 = -2;
            } else if (digitToCheck1 == secretNumberDigit4) {
                currentNumberCows++;
                digitToCheck1 = -1;
                secretNumberDigit4 = -2;
            }
        
            if (digitToCheck2 == secretNumberDigit1) {
                currentNumberCows++;
                digitToCheck2 = -1;
                secretNumberDigit1 = -2;
            } else if (digitToCheck2 == secretNumberDigit3) {
                currentNumberCows++;
                digitToCheck2 = -1;
                secretNumberDigit3 = -2;
            } else if (digitToCheck2 == secretNumberDigit4) {
                currentNumberCows++;
                digitToCheck2 = -1;
                secretNumberDigit4 = -2;
            }
        
            if (digitToCheck3 == secretNumberDigit1) {
                currentNumberCows++;
                digitToCheck3 = -1;
                secretNumberDigit1 = -2;
            } else if (digitToCheck3 == secretNumberDigit2) {
                currentNumberCows++;
                digitToCheck3 = -1;
                secretNumberDigit2 = -2;
            } else if (digitToCheck3 == secretNumberDigit4) {
                currentNumberCows++;
                digitToCheck3 = -1;
                secretNumberDigit4 = -2;
            }
        
            if (digitToCheck4 == secretNumberDigit1) {
                currentNumberCows++;
                digitToCheck4 = -1;
                secretNumberDigit1 = -2;
            } else if (digitToCheck4 == secretNumberDigit2) {
                currentNumberCows++;
                digitToCheck4 = -1;
                secretNumberDigit2 = -2;
            } else if (digitToCheck4 == secretNumberDigit3) {
                currentNumberCows++;
                digitToCheck4 = -1;
                secretNumberDigit3 = -2;
            }
        
            //current cows == cows? -> add to output line + ' ', found!
            if (currentNumberCows == cows) {
                guessNumbers += currentNumber + ' ';
                found = true;
            }
        }
    }

    if (found) {
        console.log(guessNumbers);
    } else {
        console.log('No');
    }
}

bullsAndCows(['1234', '3', '0']);