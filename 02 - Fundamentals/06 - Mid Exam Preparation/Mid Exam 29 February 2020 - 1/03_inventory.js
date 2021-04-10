function inventory(input) {
    let journal = input.shift().split(', ');

    let actions = {
        Coll(array, item) {
            if (!array.includes(item)) {
                array.push(item);
            }
        },
        Drop(array, item) {
            if (array.includes(item)) {
                array.splice(array.indexOf(item), 1);
            }
        },
        Comb(array, item) {
            let [oldItem, newItem] = item.split(':');
            if (array.includes(oldItem)) {
                array.splice(array.indexOf(oldItem) + 1, 0, newItem);
            }
        },
        Rene(array, item) {
            if (array.includes(item)) {
                array.splice(array.indexOf(item), 1);
                array.push(item);
            }
        },
        Craf(array, item) {
            console.log(array.join(', '));
        }
    };

    for (element of input) {
        let [command, item] = element.split(' - ');
        command = command.slice(0, 4);
        actions[command](journal, item);
    }
}

inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);