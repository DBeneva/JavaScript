function printAnimalType([animal]) {
    switch (animal) {
        case 'dog': console.log('mammal'); break;
        case 'crocodile':
        case 'tortoise':
        case 'snake': console.log('reptile'); break;
        default: console.log('unknown'); break;
    }
}

function printAnimalTypeObject([animal]) {
    const animals = {
        mammal: ['dog'],
        reptile: ['crocodile', 'tortoise', 'snake'],
    };
    
    const existingType = Object.entries(animals).find(x => x[1].includes(animal));
    const type = existingType ? existingType[0] : 'unknown';

    console.log(type);
}

printAnimalType(['crocodile']);
console.log('====================');
printAnimalTypeObject(['snake']);