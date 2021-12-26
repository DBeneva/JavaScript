function printOneToTen() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}

function printOneToTenString() {
    console.log('1\n2\n3\n4\n5\n6\n7\n8\n9\n10');
}

function printOneToTenArray() {
    console.log(Array.from(Array(10), (_, i) => i + 1).join('\n'));
}

printOneToTen();
console.log('====================');
printOneToTenString();
console.log('====================');
printOneToTenArray();