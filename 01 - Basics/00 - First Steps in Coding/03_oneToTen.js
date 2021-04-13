function getOneToTen() {
    return '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';
}

function getOneToTenLoop() {
    const result = [];

    for (let i = 1; i <= 10; i++) {
        result.push(i);
    }

    return result.join('\n');
}

function getOneToTenFunc() {
    return getNumbers(1, 10);

    function getNumbers(start, end) {
            const result = [];

            while (start <= end) {
                result.push(start++);
            }

            return result.join('\n');
    }

}

console.log(getOneToTen());

console.log('====================');

console.log(getOneToTenLoop());

console.log('====================');

console.log(getOneToTenFunc());