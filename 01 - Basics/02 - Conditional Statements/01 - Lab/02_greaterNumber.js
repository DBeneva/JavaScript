function printGreaterNumber([first, second]) {
    if (Number(first) > Number(second)) {
        console.log(first);
    } else {
        console.log(second);
    }
}

function printGreaterNumberTernary(input) {
    const [first, second] = input.map(Number);

    console.log(first > second ? first : second);
}

printGreaterNumber(['5', '17']);
console.log('====================');
printGreaterNumberTernary(['5', '17']);