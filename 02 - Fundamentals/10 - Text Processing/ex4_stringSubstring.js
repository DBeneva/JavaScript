function stringSubstring(word, text) {
    word = word.toLowerCase();
    text = text.toLowerCase();
    if (text.includes(` ${word} `) || text.startsWith(`${word} `) || text.endsWith(` ${word}`)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('python',
'JavaScript is the best programming language'
);