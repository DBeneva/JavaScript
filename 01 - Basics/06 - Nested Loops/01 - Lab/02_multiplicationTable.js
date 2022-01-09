function multiplicationTable() {
    for (let x = 1; x <= 10; x++) {
        for (let y = 1; y <= 10; y++) {
            console.log(`${x} * ${y} = ${x * y}`);
        }
    }
}

function multiplicationTableArray() {
    const numbersToTen = Array.from(Array(10), (_, i) => i + 1);

    numbersToTen.forEach(x => {
        numbersToTen.forEach(y => console.log(`${x} * ${y} = ${x * y}`));
    });
}

multiplicationTable();
console.log('====================');
multiplicationTableArray();