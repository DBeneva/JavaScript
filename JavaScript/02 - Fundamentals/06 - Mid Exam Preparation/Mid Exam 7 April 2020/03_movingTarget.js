function movingTarget(input) {
    let targets = input.shift().split(' ').map(Number);
    input = input.slice(0, input.indexOf('End'));

    let actions = {
        Shoot(array, index, power) {
            if (array[index] != undefined) {
                array[index] -= power;
                if (array[index] <= 0) {
                    array.splice(index, 1);
                }
            }
        },
        Add(array, index, value) {
            if (array[index] != undefined) {
                array.splice(index, 0, value);
            } else {
                console.log('Invalid placement!');
            }
        },
        Strike(array, index, radius) {
            if (index - radius >= 0 &&
                index + radius < array.length) {
                array.splice(index - radius, radius * 2 + 1);
            } else {
                console.log('Strike missed!');
            }
        }
    };

    while (input.length > 0) {
        let [command, index, number] = input.shift().split(' ');
        index = Number(index);
        number = Number(number);
        actions[command](targets, index, number);
    }

    console.log(`${targets.join('|')}`);
}

movingTarget([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
]);