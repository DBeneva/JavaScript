function getPersonInfo(firstName, lastName, age, town) {
    return `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
}

function getPersonInfoObj(firstName, lastName, age, town) {
    const person = {
        firstName,
        lastName,
        age,
        town,
        get presentation() {
            return `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
        }
    };

    return person.presentation;
}

console.log(getPersonInfo('John', 'Smith', '35', 'London'));

console.log('====================');

console.log(getPersonInfoObj('John', 'Smith', '35', 'London'));