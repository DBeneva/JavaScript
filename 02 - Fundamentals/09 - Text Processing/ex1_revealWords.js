function revealWords(words, text) {

    for (word of words.split(', ')) {
        text = text.replace('*'.repeat(word.length), word);
    }

    console.log(text);
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);