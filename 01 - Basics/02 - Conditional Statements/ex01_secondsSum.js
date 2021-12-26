function printTime([first, second, third]) {
    const time = Number(first) + Number(second) + Number(third);
    const minutes = Math.floor(time / 60);
    const seconds = getSeconds();    

    console.log(`${minutes}:${seconds}`);

    function getSeconds() {
        let seconds = time - minutes * 60;
        if (seconds < 10) seconds = '0' + seconds;

        return seconds;
    }
}

function printTimePadStart(input) {
    const time = input.map(Number).reduce((a, b) => a + b);
    const minutes = Math.floor(time / 60);
    const seconds = (time - minutes * 60).toString().padStart(2, '0');

    console.log(`${minutes}:${seconds}`);
}

printTime(['35', '45', '44']);
console.log('===================');
printTimePadStart(['35', '45', '44']);