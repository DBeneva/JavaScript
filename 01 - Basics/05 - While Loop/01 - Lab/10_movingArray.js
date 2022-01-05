function moving(input) {
    const freeSpace = input.slice(0, 3).reduce((a, c) => a * c, 1);
    const boxes = input
        .slice(3, input.indexOf('Done'))
        .reduce((a, c) => a + Number(c) < freeSpace ? a + Number(c) : 0, 0);

    console.log(
        freeSpace > boxes
            ? `${freeSpace - boxes} Cubic meters left.`
            : `No more free space! ` +
                `You need ${boxes - freeSpace} Cubic meters more.`
    );
}

moving([10, 1, 2, 4, 6, 'Done']);