function magicNumbers(n) {
    n = Number(n);
    let result = '';

    for (let n1 = 1; n1 <= 9; n1++) {
        for (let n2 = 1; n2 <= 9; n2++) {
            for (let n3 = 1; n3 <= 9; n3++) {
                for (let n4 = 1; n4 <= 9; n4++) {
                    for (let n5 = 1; n5 <= 9; n5++) {
                        for (let n6 = 1; n6 <= 9; n6++) {
                            if (n1 * n2 * n3 * n4 * n5 * n6 == n) {
                                result += `${n1}${n2}${n3}${n4}${n5}${n6} `;
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(result);
}

magicNumbers('531441');