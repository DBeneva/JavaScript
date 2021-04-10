function getTime([first, second, third]) {
    const timeTotal = Number(first) + Number(second) + Number(third);
    const minutesTotal = Math.floor(timeTotal / 60);
    let secondsTotal = timeTotal - minutesTotal * 60;

    if (secondsTotal < 10) {
        secondsTotal = '0' + secondsTotal;
    }

    return `${minutesTotal}:${secondsTotal}`;
}

function getTimePad(input) {
    const timeTotal = input.map(Number).reduce((a, b) => a + b);
    const minutesTotal = Math.floor(timeTotal / 60);
    const secondsTotal = (timeTotal - minutesTotal * 60)
        .toString()
        .padStart(2, '0');

    return `${minutesTotal}:${secondsTotal}`;
}

console.log(getTime(['35', '45', '44']));

console.log('===================');

console.log(getTimePad(['35', '45', '44']));