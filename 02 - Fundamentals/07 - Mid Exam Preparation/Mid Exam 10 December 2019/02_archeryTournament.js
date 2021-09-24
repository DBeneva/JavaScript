function archeryTournament(input) {
    let targets = input.shift().split('|').map(Number);
    input = input.slice(0, input.indexOf('Game over'));
    let points = 0;

    while (input.length > 0) {
        let [command, index, length] = input.shift().split('@');
        index = Number(index);
        length = Number(length);

        if (index < 0 || index >= targets.length) {
            continue;
        }

        switch (command) {
            case 'Shoot Left':
                shootLeft(targets, index, length);
                break;
            case 'Shoot Right':
                shootRight(targets, index, length);
                break;
            case 'Reverse':
                targets = targets.reverse();
                break;
        }
    }

    console.log(targets.join(' - '));
    console.log(`Iskren finished the archery tournament with ${points} points!`);


    function shootLeft(array, index, length) {
        index -= length;

        while (index < 0) {
            index += array.length;
        }

        points += Math.min(5, array[index]);
        array[index] = Math.max(0, array[index] - 5);
    }

    function shootRight(array, index, length) {
        index += length;

        while (index >= array.length) {
            index -= array.length;
        }

        points += Math.min(5, array[index]);
        array[index] = Math.max(0, array[index] - 5);
    }
}

archeryTournament([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
    ''
]);