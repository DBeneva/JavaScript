function sumOfTwoNumbers([n, m, stop]) {
    inputParamsToNumbers();
    let combinations = 0, isFound = false;

    for (let i = n; i <= m && !isFound; i++) {
        for (let j = n; j <= m && !isFound; j++) {
            combinations++;
            if (i + j == stop) printCombination(combinations, i, j);
        }
    }

    if (isFound == false) printNoCombination();
    
    function inputParamsToNumbers() {
        n = Number(n);
        m = Number(m);
        stop = Number(stop);
    }
    
    function printCombination(combinations, i, j) {
        console.log(`Combination N:${combinations} (${i} + ${j} = ${i + j})`);
        isFound = true;
    }
    
    function printNoCombination() {
        console.log(`${combinations} combinations - neither equals ${stop}`);
    }
}

sumOfTwoNumbers(['1', '10', '5']);