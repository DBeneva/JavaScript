function train(input) {
    let wagons = input.shift()
        .split(' ')
        .map(Number);
    let capacity = Number(input.shift());

    for (let command of input) {
        if (command.includes('Add')) {
            let passengers = Number(command.split(' ')[1]);
            wagons.push(passengers);
        } else {
            let passengers = Number(command);

            for (let i = 0; i < wagons.length; i++) {
                let occupied = wagons[i];

                if (occupied + passengers <= capacity) {
                    wagons[i] += passengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);