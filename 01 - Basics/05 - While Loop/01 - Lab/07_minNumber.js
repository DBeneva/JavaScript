function minNumber(input) {
    let n = Number(input[0]), min = Number.POSITIVE_INFINITY;

    for (let i = 1; i <= n && !isNaN(input[i]); i++) {
        min = Math.min(Number(input[i]), min);
    }

    console.log(min);
}

function minNumberArr(input) {
    console.log(
        input.slice(1)
            .filter(x => !isNaN(x))
            .sort((a, b) => a - b)[0]
    );
}

minNumber([3, -10, 20, -30, 'stop']);
console.log('====================');
minNumberArr([2, 100, 99]);