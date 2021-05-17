function problem(input) {
    input = input.slice(0, input.indexOf('Stop'));
    let guests = new Map();
    let unliked = 0;

    let actions = new Map([
        ['Like', (guests, guest, meal) => {
            if (!guests.has(guest)) {
                guests.set(guest, new Set());
            }

            guests.get(guest).add(meal);
        }],
        ['Unlike', (guests, guest, meal) => {
            if (!guests.has(guest)) {
                console.log(`${guest} is not at the party.`);
            } else if (!guests.get(guest).has(meal)) {
                console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
            } else {
                guests.get(guest).delete(meal);
                console.log(`${guest} doesn't like the ${meal}.`);
                unliked++;
            }
        }]
    ]);

    input.forEach(instruction => {
        let [command, guest, meal] = instruction.split('-');
        if (actions.has(command)) {
            actions.get(command)(guests, guest, meal);
        }
    });

    [...guests]
        .sort(sortGuests)
        .map(([guest, meals]) => {
            console.log(`${guest}: ${[...meals].join(', ')}`);
        });
    
    console.log(`Unliked meals: ${unliked}`);


    function sortGuests([guestA, mealsA], [guestB, mealsB]) {
        return [...mealsB].length - [...mealsA].length || guestA.localeCompare(guestB);
    }
}

problem([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Penelope-dessert',
    'Stop'
]);

console.log('----------');

problem([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
]);

console.log('----------');

problem([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
]);