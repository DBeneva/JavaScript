function fillSwimmingPool([poolVolume, firstPipePerHour, secondPipePerHour, hours]) {
    inputParamsToNumbers();

    const filledByFirstPipe = firstPipePerHour * hours;
    const filledBySecondPipe = secondPipePerHour * hours;
    const filledTotal = filledByFirstPipe + filledBySecondPipe;
    const difference = Math.abs(poolVolume - filledTotal);
    const percentageTotal = (filledTotal / poolVolume * 100).toFixed(2);
    const percentageFirstPipe = (filledByFirstPipe / filledTotal * 100).toFixed(2);
    const percentageSecondPipe = (filledBySecondPipe / filledTotal * 100).toFixed(2);

    const output = filledTotal <= poolVolume
        ? `The pool is ${percentageTotal}% full.` +
            `Pipe 1: ${percentageFirstPipe}%. Pipe 2: ${percentageSecondPipe}%.`
        : `For ${hours} hours the pool overflows with ${difference} liters.`;

    console.log(output);

    function inputParamsToNumbers() {
        poolVolume = Number(poolVolume);
        firstPipePerHour = Number(firstPipePerHour);
        secondPipePerHour = Number(secondPipePerHour);
        hours = Number(hours);
    }
}

fillSwimmingPool([1000, 100, 120, 3]);