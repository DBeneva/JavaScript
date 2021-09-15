function thePianist(input) {
    let n = Number(input.shift());
    let initialPieces = input.splice(0, n);
    input = input.slice(0, input.indexOf('Stop'));
    let pieces = new Map();

    initialPieces.forEach(piece => {
        let [title, composer, key] = piece.split('|');
        pieces.set(title, new Map([['composer', composer], ['key', key]]));
    });

    let actions = new Map([
        ['Add', (pieces, [title, composer, key]) => {
            if (pieces.has(title)) {
                console.log(`${title} is already in the collection!`);
            } else {
                pieces.set(title, new Map([['composer', composer], ['key', key]]));
                console.log(`${title} by ${composer} in ${key} added to the collection!`);
            }
        }],
        ['Remove', (pieces, [title]) => {
            if (pieces.has(title)) {
                pieces.delete(title);
                console.log(`Successfully removed ${title}!`);
            } else {
                console.log(`Invalid operation! ${title} does not exist in the collection.`);
            }
        }],
        ['ChangeKey', (pieces, [title, key]) => {
            if (pieces.has(title)) {
                pieces.get(title).set('key', key);
                console.log(`Changed the key of ${title} to ${key}!`);
            } else {
                console.log(`Invalid operation! ${title} does not exist in the collection.`);
            }
        }]
    ]);

    input.forEach(instruction => {
        let [command, ...params] = instruction.split('|');

        if (actions.has(command)) {
            actions.get(command)(pieces, params);
        }
    });

    [...pieces]
        .sort(sortPieces)
        .forEach(([title, info]) => {
            console.log(`${title} -> Composer: ${info.get('composer')}, Key: ${info.get('key')}`);
        });

    
    function sortPieces([titleA, infoA], [titleB, infoB]) {
        return titleA.localeCompare(titleB) || infoA.get('composer').localeCompare(infoB.get('composer'));
    }
}

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]  
);