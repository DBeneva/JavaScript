function wordTracker(input) {
    let words = input.shift().split(' ');
    let wordsObject = {};
    
    words.forEach(x => {
        wordsObject[x] = 0;
    });
    
    input.map(x => {
        if (wordsObject.hasOwnProperty(x)) {
            wordsObject[x]++;
        }
    });

    Object.entries(wordsObject).sort((a, b) => b[1] - a[1]).forEach(x => {
        console.log(`${x[0]} - ${x[1]}`);
    });
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence',
    'you', 'have', 'to', 'count',
    'the', 'occurances',
    'of', 'the', 'words',
    'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);