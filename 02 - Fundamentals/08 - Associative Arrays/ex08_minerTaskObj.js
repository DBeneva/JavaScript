function minerTask(input) {
    let resources = {};

    while (input.length > 0) {
        let resource = input.shift();
        let quantity = Number(input.shift());
        
        resources[resource] = resources.hasOwnProperty(resource) ?
            resources[resource] + quantity : quantity;
    }

    Object.entries(resources).forEach(x => {
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