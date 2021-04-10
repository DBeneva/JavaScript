function building(input) {
    let numberOfFloors = Number(input[0]);
    let roomsPerFloor = Number(input[1]);
    let output = '';
    let roomType = '';

    for (let floor = numberOfFloors; floor >= 1; floor--) {
        for (let room = 0; room < roomsPerFloor; room++) {
            if (floor == numberOfFloors) {
                roomType = 'L';
            } else if (floor % 2 == 1) {
                roomType = 'A';
            } else {
                roomType = 'O';
            }

            output += `${roomType}${floor}${room} `;
        }

        console.log(output);
        output = '';
    }
}

building(['4', '4']);