function minMethod(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    
    console.log(getMin(a, b, c));

    function getMin(a, b, c) {
        if (a < b && a < c) {
            return a;
        } else if (b < a && b < c) {
            return b;
        } else {
            return c;
        }
    }
}

minMethod(['-100', '-101', '-102']);