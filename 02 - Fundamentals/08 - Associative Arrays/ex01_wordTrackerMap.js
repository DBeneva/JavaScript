function wordTracker(input) {
    let words = input.shift().split(' ');
    let map = new Map();
    
    words.forEach(x => {
        map.set(x, 0);
    });
    
    input.map(x => {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1);
        }
    });

    [...map].sort((a, b) => b[1] - a[1]).forEach(x => {
            console.log(`${x[0]} - ${x[1]}`);
        });
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence',
    'you', 'have', 'to', 'count',
    'the', 'occurances',
    'of', 'the', 'words',
    'this', 'and','sentence',
    'because', 'this','is','your','task'
]);