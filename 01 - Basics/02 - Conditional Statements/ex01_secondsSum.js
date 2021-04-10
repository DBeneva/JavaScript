function secondsSum([first, second, third]) {
    let timeTotal = Number(first) + Number(second) + Number(third);
    let minutesTotal = Math.floor(timeTotal / 60);
    let secondsTotal = timeTotal - minutesTotal * 60;

    if (secondsTotal < 10) {
        secondsTotal = '0' + secondsTotal;
    }

    console.log(`${minutesTotal}:${secondsTotal}`);
}

function secondsSumPadStart(input) {
    let timeTotal = input.map(Number).reduce((a, b) => a + b);
    let minutesTotal = Math.floor(timeTotal / 60);
    let secondsTotal = (timeTotal - minutesTotal * 60)
        .toString()
        .padStart(2, '0');

    console.log(`${minutesTotal}:${secondsTotal}`);
}

secondsSum(['35', '45', '44']);

console.log('===================');

secondsSumPadStart(['35', '45', '44']);