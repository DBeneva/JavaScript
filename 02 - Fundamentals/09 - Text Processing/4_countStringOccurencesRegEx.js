function countStringOccurences(string, search) {
    search = new RegExp(`\\b${search}\\b`, 'g');
    let result = string.match(search) ? string.match(search).length : 0;
    console.log(result);
}

countStringOccurences("This is a word and it also is a sentence",
    "is"
);