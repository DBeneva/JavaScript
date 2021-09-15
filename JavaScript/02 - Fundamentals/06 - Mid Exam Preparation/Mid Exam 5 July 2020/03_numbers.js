function numbers(input) {
    let array = input.split(' ').map(Number);
    let average = array.reduce((a, b) => a + b, 0) / array.length;
    
    console.log(array.filter(x => x > average)
        .sort((a, b) => b - a)
        .slice(0, 5)
        .join(' ') || 'No');
}

numbers('-1');