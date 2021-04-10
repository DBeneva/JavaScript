function easterShopping(input) {
    let shops = input.shift().split(' ');
    input.shift();

    let actions = {
        Include(array, shop) {
            array.push(shop);
        },
        Visit(array, shop, number) {
            if (shops.length >= number) {
                if (shop == 'first') {
                    array.splice(0, number);
                } else {
                    array.splice(array.length - number, number);
                }
            }
        },
        Prefer(array, index1, index2) {
            index1 = Number(index1);
            if (array[index1] != undefined && array[index2] != undefined) {
                let toBeSwapped = array[index1];
                array[index1] = array[index2];
                array[index2] = toBeSwapped;
            }
        },
        Place(array, shop, index) {
            if (array[index] != undefined) {
                array.splice(index + 1, 0, shop);
            }
        }
    };

    while (input.length > 0) {
        let [command, shop, number] = input.shift().split(' ');
        number = Number(number);
        
        if (actions.hasOwnProperty(command)) {
            actions[command](shops, shop, number);
        }
    }

    console.log(`Shops left:\n${shops.join(' ')}`);
}

easterShopping([
    'Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
    '6',
    'Visit first 9',
    'Visit last 4',
    'Prefer 3 8',
    'Prefer 0 1',
    'Place Store 7',
    'Place ShoeAquarium 2'
]);