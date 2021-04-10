function lastStop(input) {
    let paintings = input.shift().split(' ').map(Number);
    input = input.slice(0, input.indexOf('END'));

    let actions = {
        Change(array, painting, changedNumber) {
            if (array.includes(painting)) {
                array[array.indexOf(painting)] = changedNumber;
            }
        },
        Hide(array, painting) {
            if (array.includes(painting)) {
                array.splice(array.indexOf(painting), 1);
            }
        },
        Switch(array, painting1, painting2) {
            if (array.includes(painting1) && array.includes(painting2)) {
                array[array.indexOf(painting2)] = array.splice(array.indexOf(painting1), 1, painting2);
            }
        },
        Insert(array, index, painting) {
            if (array[index + 1] != undefined) {
                array.splice([index + 1], 0, painting);
            }
        },
        Reverse(array) {
            array = array.reverse();
        }
    };

    while (input.length > 0) {
        let [command, n1, n2] = input.shift().split(' ');
        n1 = Number(n1);
        n2 = Number(n2);

        if (actions.hasOwnProperty(command)) {
            actions[command](paintings, n1, n2);
        }
    }

    console.log(paintings.join(' '));
}

lastStop([
    '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END'
]);