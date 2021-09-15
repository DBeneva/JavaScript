function getOneToTen() {
    return '1\n2\n3\n4\n5\n6\n7\n8\n9\n10';
}

function getOneToTenArr() {
    return Array
        .from(Array(10), (_, i) => i + 1)
        .join('\n');
}

console.log(getOneToTen());

console.log('====================');

console.log(getOneToTenArr());