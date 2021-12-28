function printNums1to100() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

function printNums1to100Array() {
    const output = Array.from(Array(100), (_, i) => i + 1).join('\n');
    
    console.log(output);
}

printNums1to100();
console.log('====================');
printNums1to100Array();