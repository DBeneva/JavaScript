function partyTime(guests) {
    let guestList = guests.splice(0, guests.indexOf('PARTY'));
    guests.splice(1, guests.length - 1).forEach(x => {
        if (guestList.includes(x)) { guestList.splice(guestList.indexOf(x), 1) }
    });

    console.log(guestList.length);
    guestList.filter(x => !isNaN(x[0])).map(x => console.log(x));
    guestList.filter(x => isNaN(x[0])).map(x => console.log(x));
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