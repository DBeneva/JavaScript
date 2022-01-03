function oddEvenPosition(input) {
    const n = Number(input[0]);
    let oddSum = 0, evenSum = 0;
    let oddMin = Number.POSITIVE_INFINITY, evenMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY, evenMax = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        const num = Number(input[i]);

        if (i % 2 == 1) getNums('odd', num);
        else getNums('even', num);
    }

    getMinMaxNums();

    console.log(
        `OddSum=${oddSum},\n` +
        `OddMin=${oddMin},\n` +
        `OddMax=${oddMax},\n` +
        `EvenSum=${evenSum},\n` +
        `EvenMin=${evenMin},\n` +
        `EvenMax=${evenMax}`
    );

    function getNums(evenOrOdd, num) {
        if (evenOrOdd == 'odd') {
            oddSum += num;
            oddMin = Math.min(num, oddMin);
            oddMax = Math.max(num, oddMax);
        } else {
            evenSum += num;
            evenMin = Math.min(num, evenMin);
            evenMax = Math.max(num, evenMax);
        }
    }

    function getMinMaxNums() {
        if (oddMin == Number.POSITIVE_INFINITY) oddMin = 'No';
        if (evenMin == Number.POSITIVE_INFINITY) evenMin = 'No';
        if (oddMax == Number.NEGATIVE_INFINITY) oddMax = 'No';
        if (evenMax == Number.NEGATIVE_INFINITY) evenMax = 'No';
    }
}

oddEvenPosition([3, -1, -2, -3]);