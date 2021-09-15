function numberPyramid(n) {
    n = Number(n);
    let num = 1;
    let output = '';

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            if (col > 1) {
                output += ' ';
            }

            output += num;
            num++;
            
            if (num > n) {
                break;
            }
        }

        console.log(output);
        output = '';

        if (num > n) {
            break;
        }
    }
}

numberPyramid('14');