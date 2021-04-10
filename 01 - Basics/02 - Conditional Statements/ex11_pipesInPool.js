function pipesInPool(input) {
    let poolVolume = Number(input[0]);
    let pipe1PerHour = Number(input[1]);
    let pipe2PerHour = Number(input[2]);
    let hours = Number(input[3]);

    let filledByPipe1 = pipe1PerHour * hours;
    let filledByPipe2 = pipe2PerHour * hours;
    let filledTotal = filledByPipe1 + filledByPipe2;
    let difference = Math.abs(poolVolume - filledTotal);
    let percentageTotal = (poolVolume - difference) / poolVolume * 100;
    let percentagePipe1 = filledByPipe1 / filledTotal * 100;
    let percentagePipe2 = filledByPipe2 / filledTotal * 100;

    if (filledTotal <= poolVolume) {
        console.log(`The pool is ${percentageTotal.toFixed(2)}% full. Pipe 1: ${percentagePipe1.toFixed(2)}%. Pipe 2: ${percentagePipe2.toFixed(2)}%.`);
    } else if (poolVolume < filledTotal) {
        console.log(`For ${hours} hours the pool overflows with ${difference} liters.`);
    }
}

function pipesInPoolTernary(input) {
    let [poolVolume, pipe1PerHour, pipe2PerHour, hours] = input.map(Number);

    let filledByPipe1 = pipe1PerHour * hours;
    let filledByPipe2 = pipe2PerHour * hours;
    let filledTotal = filledByPipe1 + filledByPipe2;
    let difference = Math.abs(poolVolume - filledTotal);
    let percentageTotal = (poolVolume - difference) / poolVolume * 100;
    let percentagePipe1 = filledByPipe1 / filledTotal * 100;
    let percentagePipe2 = filledByPipe2 / filledTotal * 100;

    let result = filledTotal <= poolVolume ?
        `The pool is ${percentageTotal.toFixed(2)}% full. Pipe 1: ${percentagePipe1.toFixed(2)}%. Pipe 2: ${percentagePipe2.toFixed(2)}%.` :
        `For ${hours} hours the pool overflows with ${difference} liters.`;

    console.log(result);
}

pipesInPool([1000, 100, 120, 3]);

console.log('====================');

pipesInPoolTernary([1000, 100, 120, 3]);