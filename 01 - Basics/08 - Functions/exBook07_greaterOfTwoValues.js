function greaterOfTwoValues(input) {
    let a = input[0];
    let b = input[1];
    
    console.log(getGreaterOf(a.length, b.length));
    
    function getGreaterOf(a, b) {
        if (a >= b) {
            return a;
        } else {
            return b;
        }
    }
}

greaterOfTwoValues(['4', '56']);