function fillSwimmingPool(input) {
    const poolVolume = Number(input[0]);
    const pipe1PerHour = Number(input[1]);
    const pipe2PerHour = Number(input[2]);
    const hours = Number(input[3]);

    const filledByPipe1 = pipe1PerHour * hours;
    const filledByPipe2 = pipe2PerHour * hours;
    const filledTotal = filledByPipe1 + filledByPipe2;
    const difference = Math.abs(poolVolume - filledTotal);
    const percentageTotal = (poolVolume - difference) / poolVolume * 100;
    const percentagePipe1 = filledByPipe1 / filledTotal * 100;
    const percentagePipe2 = filledByPipe2 / filledTotal * 100;

    if (filledTotal <= poolVolume) {
        return `The pool is ${percentageTotal.toFixed(2)}% full. Pipe 1: ${percentagePipe1.toFixed(2)}%. Pipe 2: ${percentagePipe2.toFixed(2)}%.`;
    } else if (poolVolume < filledTotal) {
        return `For ${hours} hours the pool overflows with ${difference} liters.`;
    }
}

function fillSwimmingPoolTern(input) {
    const [poolVolume, pipe1PerHour, pipe2PerHour, hours] = input.map(Number);

    const filledByPipe1 = pipe1PerHour * hours;
    const filledByPipe2 = pipe2PerHour * hours;
    const filledTotal = filledByPipe1 + filledByPipe2;
    const difference = Math.abs(poolVolume - filledTotal);
    const percentageTotal = (poolVolume - difference) / poolVolume * 100;
    const percentagePipe1 = filledByPipe1 / filledTotal * 100;
    const percentagePipe2 = filledByPipe2 / filledTotal * 100;

    const result = filledTotal <= poolVolume ?
        `The pool is ${percentageTotal.toFixed(2)}% full. Pipe 1: ${percentagePipe1.toFixed(2)}%. Pipe 2: ${percentagePipe2.toFixed(2)}%.` :
        `For ${hours} hours the pool overflows with ${difference} liters.`;

    return result;
}

console.log(fillSwimmingPool([1000, 100, 120, 3]));

console.log('====================');

console.log(fillSwimmingPoolTern([1000, 100, 120, 3]));