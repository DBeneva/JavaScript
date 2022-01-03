function stopNumber([n, m, stop]) {
    inputParamsToNumbers();
    let output = '';
    
    for (let num = m; num >= n; num--) {
        if (num == stop) break;
        if (num % 2 == 0 && num % 3 == 0) output += num + ' ';
    }
    
    console.log(output.trim());
    
    function inputParamsToNumbers() {
        n = Number(n);
        m = Number(m);
        stop = Number(stop);
    }
}

stopNumber(['1', '36', '12']);