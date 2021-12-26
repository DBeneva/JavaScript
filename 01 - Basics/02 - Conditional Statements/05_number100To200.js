function printNumRange(num) {
    num = Number(num);

    if (num < 100) console.log('Less than 100');
    else if (num <= 200) console.log('Between 100 and 200');
    else console.log('Greater than 200');
}

function printNumRangeArray(num) {
    num = Number(num);
    
    const range = [
        { condition: num < 100, output: 'Less than 100' },
        { condition: num <= 200, output: 'Between 100 and 200' },
        { condition: num > 200, output: 'Greater than 200' }
    ];
    
    console.log(range.find(x => x.condition).output);
}

printNumRange('342');
console.log('====================');
printNumRangeObject('99');