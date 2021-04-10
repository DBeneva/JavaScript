function hardWords(input) {
    let letter = input.shift();
    let punctuation = [',', '.', '!', '?', ':', ';'];

    input.shift().forEach(x => {
        let next = letter[letter.indexOf('_'.repeat(x.length)) + x.length];
        let placeholder = '';
        
        if (letter.endsWith(x) || punctuation.includes(next)) {
            placeholder = ` ${'_'.repeat(x.length)}`;
            x = ` ${x}`;
        } else if (letter.startsWith(x)) {
            placeholder = `${'_'.repeat(x.length)} `;
            x = `${x} `;
        } else {
            placeholder = ` ${'_'.repeat(x.length)} `;
            x = ` ${x} `;
        }
        letter = letter.replace(placeholder, x);
    });

    console.log(letter);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);