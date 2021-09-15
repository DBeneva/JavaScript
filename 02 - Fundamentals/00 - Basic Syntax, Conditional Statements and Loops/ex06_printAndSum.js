function printAndSum(start, end) {
    start = Number(start);
    end = Number(end);
    let outputLine = '';
    let sum = 0;

    for (let i = start; i <= end; i++) {
        outputLine += i + ' ';
        sum += i;
    }
    
    console.log(outputLine);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);