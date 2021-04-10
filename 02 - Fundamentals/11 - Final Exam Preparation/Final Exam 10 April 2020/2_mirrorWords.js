function mirrorWords([string]) {
    let validPairs = /([@#])(?<first>[A-Za-z]{3,})\1{2}(?<second>[A-Za-z]{3,})\1/g;
    let mirrorWords = [];

    if (!string.match(validPairs)) {
        console.log(`No word pairs found!`);
    } else {
        let pairs = 0;
        while (pair = validPairs.exec(string)) {
            let result = pair.groups.first == pair.groups.second.split('').reverse().join('') ?
                mirrorWords.push({ first: pair.groups.first, second: pair.groups.second }) : '';
            pairs++;
        }
        console.log(`${pairs} word pairs found!`);
    }

    if (mirrorWords.length == 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        let outputLine = [];
        mirrorWords.map(word => {
            outputLine.push(`${word.first} <=> ${word.second}`);
        });
        console.log(outputLine.join(', '));
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    
);