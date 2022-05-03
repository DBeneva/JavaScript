function sumOfTwoNumbers(input) {
    const [n, m, stop] = input.map(Number);
    const numbers = Array.from(Array(m - n + 1), (_, i) => i + n);
    let combinations = 0, isFound = false;

    numbers.every(x => {
        numbers.every(y => {
            if (x + y == stop && !isFound) printCombination(combinations, x, y);
            else return goToNextCombination();
        });

        return isFound ? false : true;
    });

    if (isFound == false) printNoCombination();
    
    function printCombination(combinations, x, y) {
        console.log(`Combination N:${++combinations} (${x} + ${y} = ${x + y})`);
        isFound = true;
        return false;
    }

    function goToNextCombination() {
        combinations++;
        return true;
    }
    
    function printNoCombination() {
        console.log(`${combinations} combinations - neither equals ${stop}`);
    }
}

sumOfTwoNumbers(['1', '10', '5']);