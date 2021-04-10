function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let boxes = 0;
    let freeSpace = width * length * height;
    let i = 3;

    while (input[i] != 'Done') {
        boxes += Number(input[i]);
        i++;

        if (freeSpace <= boxes) {
            break;
        }
    }

    if (freeSpace > boxes) {
        console.log(`${freeSpace - boxes} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${boxes - freeSpace} Cubic meters more.`);
    }
}

moving([10, 1, 2, 4, 6, 'Done']);