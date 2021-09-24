function problem(input) {
    input = input.slice(0, input.indexOf('Stop'));
    let guests = {};
    let unliked = 0;

    let actions = {
        Like(guests, guest, meal) {
            if (!guests[guest]) {
                guests[guest] = new Set();
            }

            guests[guest].add(meal);
        },
        Unlike(guests, guest, meal) {
            if (!guests[guest]) {
                console.log(`${guest} is not at the party.`);
            } else if (!guests[guest].has(meal)) {
                console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
            } else {
                guests[guest].delete(meal);
                console.log(`${guest} doesn't like the ${meal}.`);
                unliked++;
            }
        }
    };

    input.forEach(instruction => {
        let [command, guest, meal] = instruction.split('-');
        if (actions[command]) {
            actions[command](guests, guest, meal);
        }
    });

    Object.entries(guests)
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