function numbersFromMtoN(m, n) {
    m = Number(m);
    n = Number(n);
    
    while (m >= n) {
        console.log(m);
        m--;
    }
}

numbersFromMtoN(4, 1);