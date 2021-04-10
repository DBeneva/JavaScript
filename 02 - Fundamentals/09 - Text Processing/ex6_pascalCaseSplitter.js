function pascalCaseSplitter(string) {
    let result = [];
    let start = 0;

    for (let i = 1; i < string.length; i++) {
        if (string[i] == string[i].toUpperCase()) {
            result.push(string.substring(start, i));
            start = i;
        }
    }
    
    result.push(string.substring(start))
    console.log(result.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');