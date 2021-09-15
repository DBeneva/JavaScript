function commands(input) {
    let collection = input.shift();
    input = input.slice(0, input.indexOf('end'));

    let actions = {
        reverse(array, start, count) {
            let reversed = array.slice(start, start + count).reverse();
            
            for (let i = 0; i < array.length; i++) {
                array[i] = i >= start && i < start + count ?
                reversed[i - start] :
                array[i];
            }
        },
        sort(array, start, count) {
            let sorted = array.slice(start, start + count).sort((a, b) => Number(a) - Number(b) || a.localeCompare(b));
            
            for (let i = 0; i < array.length; i++) {
                array[i] = i >= start && i < start + count ?
                sorted[i - start] :
                array[i];
            }
        },
        remove(array, count) {
            array.splice(0, count);
        }
    };

    while (input.length > 0) {
        let command = input.shift();
        let n1 = command.split(' ')[0] == 'remove' ?
            Number(command.split(' ')[1]) :
            Number(command.split(' ')[2]);
        let n2 = Number(command.split(' ')[4]);
        command = command.split(' ')[0];

        if (actions.hasOwnProperty(command)) {
            actions[command](collection, n1, n2);
        }
    }

    console.log(collection.join(', '));
}

commands([['1', '2', '5', '8', '7', '3', '10', '6', '4', '9'],
    'reverse from 2 count 4 ',
    'end']);