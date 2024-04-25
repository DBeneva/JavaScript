function manageBaristasTasks(input) {
    const actions = getActions();
    const numberOfBaristas = input.shift();
    const baristas = createBaristasList(numberOfBaristas);

    input.filter(x => x !== "").forEach(x => {
        const [command, ...args] = x.split(' / ');
        actions[command](...args);
    });

    function createBaristasList(numberOfBaristas) {
        const baristas = [];

        for (let i = 0; i < numberOfBaristas; i++) {
            const [name, shift, coffeeTypes] = input.shift().split(' ');
            const barista = { name, shift, coffeeTypes };
            baristas.push(barista);
        }

        return baristas;
    }

    function getBaristaByName(name) {
        return baristas.filter(b => b.name === name)[0];
    }

    function getActions() {
        return {
            Prepare: (baristaName, shift, coffeeType) => {
                const barista = getBaristaByName(baristaName);

                if (barista.shift === shift && barista.coffeeTypes.includes(coffeeType)) {
                    console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
                } else {
                    console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
                }
            },
            'Change Shift': (baristaName, newShift) => {
                const barista = getBaristaByName(baristaName);

                barista.shift = newShift;
                console.log(`${baristaName} has updated his shift to: ${newShift}`);
            },
            Learn: (baristaName, newCoffeeType) => {
                const barista = getBaristaByName(baristaName);

                if (barista.coffeeTypes.includes(newCoffeeType)) {
                    console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
                } else {
                    barista.coffeeTypes += `,${newCoffeeType}`;
                    console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
                }
            },
            Closed: () => {
                baristas.forEach(b => {
                    console.log(`Barista: ${b.name}, Shift: ${b.shift}, Drinks: ${b.coffeeTypes.split(',').join(', ')}`)
                });

                return;
            }
        };
    }
}

manageBaristasTasks([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']
);

console.log('---------');

manageBaristasTasks(['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino',
    'Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
    'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed']
);