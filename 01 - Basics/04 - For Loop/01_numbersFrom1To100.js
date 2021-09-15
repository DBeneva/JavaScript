function numbers1to100() {
    let result = '';
    
    for (let i = 1; i <= 100; i++) {
        result += i + '\n';
    }

    return result.trim();
}

function numbers1to100Arr() {
    return Array
        .from(Array(100), (_, i) => i + 1)
        .join('\n');
}

console.log(numbers1to100());

console.log('====================');

console.log(numbers1to100Arr());