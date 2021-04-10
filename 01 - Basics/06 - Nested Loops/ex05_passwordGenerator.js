function passwordGenerator(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);
    let password = '';

    for (let symbol1 = 1; symbol1 <= n; symbol1++) {
        for (let symbol2 = 1; symbol2 <= n; symbol2++) {
            for (let symbol3 = 97; symbol3 <= l + 96; symbol3++) {
                for (let symbol4 = 97; symbol4 <= l + 96; symbol4++) {
                    for (let symbol5 = 2; symbol5 <= n; symbol5++) {
                        if (symbol5 > symbol1 && symbol5 > symbol2) {
                            password += `${symbol1}${symbol2}${String.fromCharCode(symbol3)}${String.fromCharCode(symbol4)}${symbol5} `;
                        }
                    }
                }
            }
        }
    }

    console.log(password);
}

passwordGenerator(['3', '1']);