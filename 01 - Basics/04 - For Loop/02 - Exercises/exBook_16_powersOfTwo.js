function powersOfTwo(num) {
    num = Number(num);

    for (let i = 0; i <= num; i++) {
        console.log(Math.pow(2, i));
    }
}

function powersOfTwoArray(num) {
    num = Number(num);
    
    console.log(
        Array.from(Array(num + 1), (_, i) => num ** i)
        .join('\n')
    );
}

powersOfTwo(2);
console.log('====================');
powersOfTwoArray(2);