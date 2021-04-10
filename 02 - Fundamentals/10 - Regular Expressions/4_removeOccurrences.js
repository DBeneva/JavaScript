function removeOccurrences(word, text) {
    
    while (text.includes(word)) {
        text = text.replace(word, '');
    }

    console.log(text);
}

removeOccurrences('ice', 'kicegiciceeb');