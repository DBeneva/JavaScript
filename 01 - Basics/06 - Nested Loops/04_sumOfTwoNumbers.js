function sumOfTwoNumbers(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let stop = Number(input[2]);
    let combinations = 0;
    let isFound = false;

    for (let i = n; i <= m; i++) {
        for (let j = n; j <= m; j++) {
            combinations++;
            
            if (i + j == stop) {
                isFound = true;
                console.log(`Combination N:${combinations} (${i} + ${j} = ${i + j})`);
                break;
            }
        }

        if (isFound) {
            break;
        }
    }

    if (isFound == false) {
        console.log(`${combinations} combinations - neither equals ${stop}`);
    }
}

sumOfTwoNumbers(['23', '24', '20']);