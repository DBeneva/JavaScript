function specialNumbers(n) {
    n = Number(n);
    let output = '';

    for (let n1 = 1; n1 <= 9; n1++) {
        for (let n2 = 1; n2 <= 9; n2++) {
            for (let n3 = 1; n3 <= 9; n3++) {
                for (let n4 = 1; n4 <= 9; n4++) {
                    if (n % n1 == 0 && n % n2 == 0 && n % n3 == 0 && n % n4 == 0) {
                        output += `${n1}${n2}${n3}${n4} `;
                    }
                }
            }
        }
    }
    console.log(output);
}

specialNumbers('11');