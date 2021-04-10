function partyTime(guests) {
    let guestListArr = guests.splice(0, guests.indexOf('PARTY'));
    let guestList = { VIP: [], regular: [] };
    
    guests.splice(1, guests.length - 1).forEach(x => {
        if (guestListArr.includes(x)) { guestListArr.splice(guestListArr.indexOf(x), 1) }
    });

    guestList.VIP.push(guestListArr.filter(x => !isNaN(x[0])));
    guestList.regular.push(guestListArr.filter(x => isNaN(x[0])));
    
    console.log(guestList.VIP[0].length + guestList.regular[0].length);
    Object.entries(guestList).map(x => console.log(x[1][0].join('\n')));
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