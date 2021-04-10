function minerTask(input) {
    let resources = new Map();

    while (input.length > 0) {
        let resource = input.shift();
        let quantity = Number(input.shift());
        
        resources.set(resource, resources.has(resource) ?
            resources.get(resource) + quantity : quantity);
    }

    [...resources].forEach(x => {
        console.log(`${x[0]} -> ${x[1]}`);
    });
}

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);