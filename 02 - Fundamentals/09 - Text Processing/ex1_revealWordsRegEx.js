function revealWords(words, text) {
    words.split(', ').forEach(word => {
        text = text.replace(new RegExp(`\\*{${word.length}}`), word);
    });
    console.log(text);
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);