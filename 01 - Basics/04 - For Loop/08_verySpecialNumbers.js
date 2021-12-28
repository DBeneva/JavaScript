function printSpecialNums(start, end, n) {
    inputParamsToNumbers();
    
    for (let i = start; i <= end; i++) {
        if (i % (n * n) == 0) console.log(`Very special number: ${i}`);
        else if (i % n == 0) console.log(`Special number: ${i}`);
        else console.log(i);
    }

    function inputParamsToNumbers() {
        start = Number(start);
        end = Number(end);
        n = Number(n);
    }
}

printSpecialNums(3, 20, 3);