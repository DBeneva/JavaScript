function increasing4Numbers(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let numberOfCombinations = 0;

    //a ≤ n1 < n2 < n3 < n4 ≤ b
    for (let n1 = a; n1 < b; n1++) {
        for (let n2 = a + 1; n2 < b; n2++) {
            for (let n3 = a + 2; n3 < b; n3++) {
                for (let n4 = a + 3; n4 <= b; n4++) {
                    if (n1 < n2 && n2 < n3 && n3 < n4) {
                        console.log(`${n1} ${n2} ${n3} ${n4}`);
                        numberOfCombinations++;
                    }
                }
            }
        }
    }

    if (numberOfCombinations == 0) {
        console.log('no');
    }
}

increasing4Numbers(['5', '7']);