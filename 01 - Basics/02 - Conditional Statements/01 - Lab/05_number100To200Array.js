function printNumRange(num) {
    num = Number(num);
    
    const range = [
        { condition: num < 100, output: 'Less than 100' },
        { condition: num <= 200, output: 'Between 100 and 200' },
        { condition: num > 200, output: 'Greater than 200' }
    ];
    
    console.log(range.find(x => x.condition).output);
}

printNumRange('99');