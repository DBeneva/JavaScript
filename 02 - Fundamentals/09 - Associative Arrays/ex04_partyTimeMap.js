function partyTime(guests) {
    let guestListArr = guests.splice(0, guests.indexOf('PARTY'));
    let guestList = new Map();

    guestList.set('VIP', []);
    guestList.set('regular', []);

    guests.splice(1, guests.length - 1).forEach(x => {
        if (guestListArr.includes(x)) { guestListArr.splice(guestListArr.indexOf(x), 1) }
    });

    guestList.set('VIP', guestList.get('VIP').concat(guestListArr.filter(x => !isNaN(x[0]))));
    guestList.set('regular', guestList.get('regular').concat(guestListArr.filter(x => isNaN(x[0]))));

    console.log(guestList.get('VIP').length + guestList.get('regular').length);
    [...guestList].map(x => console.log(x[1].join('\n')));
}

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);