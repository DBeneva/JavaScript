function getAnimalType(animal) {
    switch (animal) {
        case 'dog': return 'mammal';
        case 'crocodile':
        case 'tortoise':
        case 'snake': return 'reptile';
        default: return 'unknown';
    }
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