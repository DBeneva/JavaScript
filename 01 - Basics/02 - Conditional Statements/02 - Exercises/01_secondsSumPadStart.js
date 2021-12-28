function printTime(input) {
    const time = input.map(Number).reduce((a, b) => a + b);
    const minutes = Math.floor(time / 60);
    const seconds = (time - minutes * 60).toString().padStart(2, '0');

    console.log(`${minutes}:${seconds}`);
}

printTime(['35', '45', '44']);