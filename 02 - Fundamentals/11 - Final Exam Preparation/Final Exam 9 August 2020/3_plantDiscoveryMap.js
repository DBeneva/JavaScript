function plantDiscovery([n, ...input]) {
    let plantsInput = input.splice(0, n);
    let plants = new Map();

    plantsInput.forEach(plant => {
        let [name, rarity] = plant.split('<->');
        plants.set(name, plants.get(name) ? plants.get(name) : new Map());
        plants.get(name).set('rarity', Number(rarity));
        plants.get(name).set('ratings', []);
    });

    actions = new Map([
        ['Rate', (plants, [plant, rating]) => {
            if (!plants.has(plant)) {
                console.log('error');
            } else {
                plants.get(plant).get('ratings').push(Number(rating));
            }
        }],
        ['Update', (plants, [plant, newRarity]) => {
            if (!plants.has(plant)) {
                console.log('error');
            } else {
            plants.get(plant).set('rarity', Number(newRarity));
            }
        }],
        ['Reset', (plants, plant) => {
            if (!plants.has(plant)) {
                console.log('error');
            } else {
            plants.get(plant).set('ratings', []);
            }
        }],
        ['Exhibition', (plants) => {
            console.log('Plants for the exhibition:');
            [...plants].sort(sortPlants).forEach(plant => {
                console.log(`- ${plant[0]}; Rarity: ${plant[1].get('rarity')}; Rating: ${average(plant[1].get('ratings')).toFixed(2)}`);
            });
        }]
    ]);

    input.forEach(instruction => {
        let [command, params] = instruction.split(': ');
        if (params && params.includes(' - ')) {
            [...params] = params.split(' - ');
        }
        if (!actions.get(command)) {
            console.log('error');
        } else {
            actions.get(command)(plants, params);
        }
    });


    function sortPlants([plantA, infoA], [plantB, infoB]) {
        return infoB.get('rarity') - infoA.get('rarity') || average(infoB.get('ratings')) - average(infoA.ratings);
    }

    function average(array) {
        return array.reduce((a, b) => a + b, 0) / (array.length || 1);
    }
}

plantDiscovery([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
  ]  
);