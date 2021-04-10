function passionDays(input) {
    let money = BigInt(input[0]) * 100n;
    let purchases = 0;

    for (let index = 2; index < input.length && input[index] != 'mall.Exit'; index++) {
        for (let char = 0; char < input[index].length; char++) {
                let currentChar = input[index].charCodeAt(char);
                
                if (currentChar >= 65 && currentChar <= 90 && BigInt(currentChar * 50) <= money) {
                    money -= BigInt(currentChar * 50);
                    purchases++;
                } else if (currentChar >= 97 && currentChar <= 122 && BigInt(currentChar * 30) <= money) {
                    money -= BigInt(currentChar * 30);
                    purchases++;
                } else if (currentChar == 37 && money > 0n) {
                    money -= money / 2n;
                    purchases++;
                } else if (currentChar == 42) {
                    money += 1000n;
                } else if (BigInt(currentChar * 100) <= money) {
                    money -= BigInt(currentChar * 100);
                    purchases++;
                }
            }
        }

    if (purchases == 0) {
        console.log(`No purchases. Money left: ${toFixed2(money)} lv.`);
    } else {
        console.log(`${purchases} purchases. Money left: ${toFixed2(money)} lv.`);
    }

    function toFixed2(bigInt) {
        let bigIntStr = bigInt.toString();
    
        if (bigIntStr.length > 2) {
            return bigIntStr.slice(0, -2) + '.' + bigIntStr.slice(-2);
        } else if (bigIntStr.length == 2) {
            return '0.' + bigIntStr;
        } else if (bigIntStr.length == 1) {
            return '0.0' + bigIntStr;
        }
    }
}

passionDays(['110', 'mall.Enter', 'd', 'mall.Exit']);