function shoppingList(input) {
    let list = input.shift().split('!');
    
    let actions = {
        Urgent(array, item1, item2) {
            if (!array.includes(item1)) {
                array.unshift(item1);
            }
        },
        Unnecessary(array, item1, item2) {
            if (array.includes(item1)) {
                array.splice(array.indexOf(item1), 1);
            }
        },
        Correct(array, item1, item2) {
            if (array.includes(item1)) {
                array.splice(array.indexOf(item1), 1, item2);
            }
        },
        Rearrange(array, item1, item2) {
            if (array.includes(item1)) {
                array.splice(array.indexOf(item1), 1);
                array.push(item1);
            }
        },
        Go(array) {
            console.log(array.join(', '));
        }
    };

    while (input.length > 0) {
        let [command, item1, item2] = input.shift().split(' ');
        actions[command](list, item1, item2);
    }
}

shoppingList([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
]);