function ladybugs(input) {
    // get fieldSize
    let fieldSize = input[0];

    // get ladybugindexes and parse them into numbers
    let ladybugIndexes = input[1].split(' ');
    
    for (let i = 0; i < ladybugIndexes.length; i++) {
        ladybugIndexes[i] = Number(ladybugIndexes[i]);
    }

    // make fieldCells with 0 and 1
    let fieldCells = [];
    for (let i = 0; i < fieldSize; i++) {
        if (ladybugIndexes.includes(i)) {
            fieldCells[i] = 1;
        } else {
            fieldCells[i] = 0;
        }
    }

    // move the ladybugs
    for (let i = 2; i < input.length; i++) {
        // get current command
        let currentCommand = input[i].split(" ");
        let ladybugIndex = Number(currentCommand[0]);
        let direction = currentCommand[1];
        let flightLength = Number(currentCommand[2]);

        // check if the ladybug is in the field
        if (fieldCells[ladybugIndex] == 0 || ladybugIndex < 0 || ladybugIndex >= fieldSize) {
            continue;
        }

        do {
            // the ladubyg leaves its cell
            fieldCells[ladybugIndex] -= 1;

            // the ladybug flies
            switch (direction) {
                case 'right': ladybugIndex += flightLength; break;
                case 'left': ladybugIndex -= flightLength; break;
            }

            // if whithin the field, the ladybug lands
            if (ladybugIndex >= 0 && ladybugIndex < fieldSize) {
                fieldCells[ladybugIndex] += 1;
            }

        } while (fieldCells[ladybugIndex] > 1)
    }

    // print fieldCells
    console.log(fieldCells.join(' '));
}

ladybugs([5, '3', '3 left 2', '1 left -2']);