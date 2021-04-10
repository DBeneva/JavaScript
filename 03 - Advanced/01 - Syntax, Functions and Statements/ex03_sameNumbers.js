function sameNumbers(num) {
    let str = num.toString();
    let sameOrNot = true;

    for (let i = 1; i < str.length; i++) {
        if (str[i] != str[0]) {
            sameOrNot = false;
        }
    }

    console.log(sameOrNot);
    console.log(str.split('').map(Number).reduce((a, b) => a + b));
}

sameNumbers(1234);