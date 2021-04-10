function emojiDetector([string]) {
    let threshold = string.match(/\d/g).map(Number).reduce((a, b) => a * b);
    let emojis = string.match(/(::|\*\*)[A-Z][a-z]{2,}\1/g);
    let cool = [];

    emojis.forEach(emoji => {
        let coolness = emoji.split('')
            .slice(2, emoji.length - 2)
            .map(char => char.charCodeAt())
            .reduce((a, b) => a + b);
        let result = coolness >= threshold ? cool.push(emoji) : '';
    });

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    console.log(cool.join('\n'));
}

emojiDetector([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]);

emojiDetector([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
]
);

emojiDetector([
    'It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using \'Content here, content 99 here\', making it look like readable **English**.'
]
);