function stringSubstring(word, text) {
    let result = text.match(new RegExp(`\\b${word}\\b`, 'i')) ? word : `${word} not found!`;
    console.log(result);
}

stringSubstring('javascript',
'JavaScript is the best programming language'
);