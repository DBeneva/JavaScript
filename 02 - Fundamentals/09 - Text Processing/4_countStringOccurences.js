function countStringOccurences(string, search) {
    string = ` ${string} `;
    search = ` ${search} `;
    let count = 0;

    while (string.includes(search)) {
        count++;
        string = string.replace(search, ' * ');
    }
    console.log(count);
}

countStringOccurences("This is a word and it also is a sentence",
    "is"
);