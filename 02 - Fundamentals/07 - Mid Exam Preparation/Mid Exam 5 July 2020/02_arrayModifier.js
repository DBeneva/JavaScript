function arrayModifier(input) {
    let actions = {
        swap(array, index1, index2) { 
            array[index1] = array.splice(index2, 1, array[index1])
        },
        multiply(array, index1, index2) { 
            array[index1] *= array[index2]
        },
        decrease(array) {
            for (let i = 0; i < array.length; i++) {
                array[i]--;
            }
        }
    };

    let array = input.shift().split(' ').map(Number);
    let [command, index1, index2] = input.shift().split(' ');
    
    while (command != 'end') {
        actions[command](array, index1, index2);
        [command, index1, index2] = input.shift().split(' ');
    }

    console.log(array.join(', '));
}

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);