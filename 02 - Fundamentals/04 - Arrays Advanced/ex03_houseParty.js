function houseParty(input) {
    let guests = [];

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(' ');
        let name = current[0];

        if (current[2] == 'going!') {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }
        } else {
            if (guests.includes(name)) {
                guests.splice(guests.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guests.join('\n'));
}

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);