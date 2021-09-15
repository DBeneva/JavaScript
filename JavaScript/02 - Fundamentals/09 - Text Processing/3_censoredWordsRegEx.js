function censoredWords(text, word) {
    console.log(text.replace(new RegExp(word, 'g'), '*'.repeat(word.length)));
}

censoredWords("A small sentence with some words", "small");