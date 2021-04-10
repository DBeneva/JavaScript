function neighborhoods(input) {
    let map = new Map();
    let neighborhoods = input.shift().split(', ');

    for (let neighborhood of neighborhoods) {
        map.set(neighborhood, []);
    }

    for (let line of input) {
        let [neighborhood, person] = line.split(' - ');
        
        if (map.has(neighborhood)) {
            map.get(neighborhood).push(person);
        }
    }

    let sorted = [...map].sort((a, b) => b[1].length - a[1].length);
    
    for (let neighborhood of sorted) {
        console.log(`${neighborhood[0]}: ${neighborhood[1].length}`);
        
        neighborhood[1].forEach(x => {
            console.log(`--${x}`);
        });
    }
}

neighborhoods([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);