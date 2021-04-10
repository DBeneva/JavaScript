function getAnimalType(animal) {
    let type = '';

    switch (animal) {
        case 'dog': type = 'mammal'; break;
        case 'crocodile':
        case 'tortoise':
        case 'snake': type = 'reptile'; break;
        default: type = 'unknown'; break;
    }

    return type;
}

function getAnimalTypeObj(animal) {
    const types = {
        mammal: ['dog'],
        reptile: ['crocodile', 'tortoise', 'snake']
    };

    const type = Object.keys(types).find(x => types[x].includes(animal));

    return type || 'unknown';
}

console.log(getAnimalType('crocodile'));

console.log('====================');

console.log(getAnimalTypeObj('snake'));