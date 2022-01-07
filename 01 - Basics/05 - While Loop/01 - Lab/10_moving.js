function moving(input) {
    let freeSpace = input[0] * input[1] * input[2];

    for (let i = 3; !isNaN(input[i]); i++) {
        freeSpace -= Number(input[i]);
    }

    console.log(
        freeSpace >= 0
            ? `${freeSpace} Cubic meters left.`
            : `No more free space! ` +
                `You need ${-freeSpace} Cubic meters more.`
    );
}

moving([10, 1, 2, 4, 6, 'Done']);
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