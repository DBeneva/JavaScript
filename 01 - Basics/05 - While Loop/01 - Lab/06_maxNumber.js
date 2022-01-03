function maxNumber(input) {
    let n = Number(input[0]), max = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n && !isNaN(input[i]); i++) {
        max = Math.max(max, Number(input[i]));
    }

    console.log(max);
}

function maxNumberArr(input) {
    console.log(
        input.slice(1)
            .filter(x => !isNaN(x))
            .sort((a, b) => b - a)[0]
    );
}

maxNumber([2, 100, 'a', 99]);
console.log('====================');
maxNumberArr([2, 100, 99]);