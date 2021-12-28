function printAnimalType([animal]) {
    const animals = {
        mammal: ['dog'],
        reptile: ['crocodile', 'tortoise', 'snake'],
    };
    
    const existingType = Object.entries(animals).find(x => x[1].includes(animal));
    const type = existingType ? existingType[0] : 'unknown';

    console.log(type);
}

printAnimalType(['snake']);