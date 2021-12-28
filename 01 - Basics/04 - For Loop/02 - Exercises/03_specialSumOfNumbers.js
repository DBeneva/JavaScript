function printSpecialSum(start, end, divider) {
    inputParamsToNumbers();

    let sum = 0;
    
    for (let i = start; i <= end; i++) {
        if (i % divider == 0) sum += i;
    }
    
    console.log(sum);
    
    function inputParamsToNumbers() {
        start = Number(start);
        end = Number(end);
        divider = Number(divider);
    }
}

printSpecialSum(61, 125, 25);