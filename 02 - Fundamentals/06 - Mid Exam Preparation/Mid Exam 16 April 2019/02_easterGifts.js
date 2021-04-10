function easterGifts(input) {
    let listOfGifts = input.shift().split(' ');
    input = input.slice(0, input.indexOf('No Money'));

    let actions = {
        OutOfStock(array, gift) {
            while (array.includes(gift)) {
                array[array.indexOf(gift)] = 'None';
            }
        },
        Required(array, gift, index) {
            if (array[index] != undefined) {
                array[index] = gift;
            }
        },
        JustInCase(array, gift) {
            array[array.length - 1] = gift;
        }
    };

    while (input.length > 0) {
        let [command, gift, index] = input.shift().split(' ');
        index = Number(index);
        actions[command](listOfGifts, gift, index);
    }

    console.log(listOfGifts.filter(x => x != 'None').join(' '));
}

easterGifts([
    'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
]);