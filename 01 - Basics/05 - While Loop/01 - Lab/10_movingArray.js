function moving(input) {
    let freeSpace = input.splice(0, 3).reduce((a, c) => a * c, 1);
    input.forEach(b => freeSpace -= isNaN(b) ? 0 : b);

    console.log(
        freeSpace >= 0
            ? `${freeSpace} Cubic meters left.`
            : `No more free space! ` +
                `You need ${-freeSpace} Cubic meters more.`
    );
}

moving([
    10,
    10,
    2,
    20,
    20,
    20,
    20,
    122
]);