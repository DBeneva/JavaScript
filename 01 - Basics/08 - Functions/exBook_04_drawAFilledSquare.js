function drawAFilledSquare(input) {
    let n = Number(input);
    let firstLastLine = '-'.repeat(n * 2);
    
    console.log(firstLastLine);
    
    for (let row = 1; row <= n - 2; row++) {
        let innerLine = '-' + '\\/'.repeat(n - 1) + '-';
        console.log(innerLine);
    }
    
    console.log(firstLastLine);
}

drawAFilledSquare('5');