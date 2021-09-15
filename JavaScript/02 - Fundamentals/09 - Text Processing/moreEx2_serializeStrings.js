function serializeStrings([string]) {
    let characters = {};

    for (let i = 0; i < string.length; i++) {
        characters[string[i]] = (characters[string[i]] || []).concat(i);
    }

    Object.entries(characters).map(([char, indexes]) => {
        console.log(`${char}:${indexes.join('/')}`);
    });
}

serializeStrings(['bb', '']);