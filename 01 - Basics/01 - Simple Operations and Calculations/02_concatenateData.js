function present([firstName, lastName, age, town]) {
    console.log(
        `You are ${firstName} ${lastName}, ` +
        `a ${age}-years old person from ${town}.`
    );
}

present(['John', 'Smith', '35', 'London']);