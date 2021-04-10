function plantDiscovery([n, ...input]) {
    let plantsInput = input.splice(0, n);
    let plants = {};

    plantsInput.forEach(plant => {
        let [name, rarity] = plant.split('<->');
        plants[name] = plants[name] ? plants[name] : {};
        plants[name].rarity = Number(rarity);
        plants[name].ratings = [];
    });

    actions = {
        Rate(plants, [plant, rating]) {
            if (!plants[plant]) {
                console.log('error');
            } else {
                plants[plant].ratings.push(Number(rating));
            }
        },
        Update(plants, [plant, newRarity]) {
            if (!plants[plant]) {
                console.log('error');
            } else {
            plants[plant].rarity = Number(newRarity);
            }
        },
        Reset(plants, plant) {
            if (!plants[plant]) {
                console.log('error');
            } else {
            plants[plant].ratings = [];
            }
        },
        Exhibition(plants) {
            console.log('Plants for the exhibition:');
            Object.entries(plants).sort(sortPlants).forEach(plant => {
                console.log(`- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${average(plant[1].ratings).toFixed(2)}`);
            });
        }
    };

    input.forEach(instruction => {
        let [command, params] = instruction.split(': ');
        if (params && params.includes(' - ')) {
            [...params] = params.split(' - ');
        }
        if (!actions[command]) {
            console.log('error');
        } else {
            actions[command](plants, params);
        }
    });


    function sortPlants([plantA, infoA], [plantB, infoB]) {
        return infoB.rarity - infoA.rarity || average(infoB.ratings) - average(infoA.ratings);
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