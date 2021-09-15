function heroesOfCodeAndLogic(input) {
    let numberOfHeroes = Number(input.shift());
    let heroes = new Map();
    let actions = new Map([
        ['CastSpell', (heroes, [hero, mp, spell]) => {
            if (heroes.get(hero).get('mp') >= Number(mp)) {
                heroes.get(hero).set('mp', heroes.get(hero).get('mp') - Number(mp));
                console.log(`${hero} has successfully cast ${spell} and now has ${heroes.get(hero).get('mp')} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spell}!`);
            }
        }],
        ['TakeDamage', (heroes, [hero, damage, attacker]) => {
            heroes.get(hero).set('hp', heroes.get(hero).get('hp') - Number(damage));
            if (heroes.get(hero).get('hp') > 0) {
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes.get(hero).get('hp')} HP left!`);
            } else {
                console.log(`${hero} has been killed by ${attacker}!`);
            }
        }],
        ['Recharge', (heroes, [hero, amount]) => {
            amount = Math.min(Number(amount), 200 - heroes.get(hero).get('mp'));
            heroes.get(hero).set('mp', heroes.get(hero).get('mp') + amount);
            console.log(`${hero} recharged for ${amount} MP!`);
        }],
        ['Heal', (heroes, [hero, amount]) => {
            amount = Math.min(Number(amount), 100 - heroes.get(hero).get('hp'));
            heroes.get(hero).set('hp', heroes.get(hero).get('hp') + amount);
            console.log(`${hero} healed for ${amount} HP!`);
        }],
        ['End', (heroes) => {
            [...heroes]
                .sort((a, b) => b[1].get('hp') - a[1].get('hp') || a[0].localeCompare(b[0]))
                .filter(x => x[1].get('hp') > 0)
                .map(hero => {
                    console.log(hero[0]);
                    console.log(`HP: ${hero[1].get('hp')}`);
                    console.log(`MP: ${hero[1].get('mp')}`);
                });
        }]
    ]);

    for (let i = 0; i < numberOfHeroes; i++) {
        let [name, hp, mp] = input.shift().split(' ');
        heroes.set(name, new Map([['hp', Number(hp)], ['mp', Number(mp)]]));
    }

    input.map(x => {
        let [command, ...args] = x.split(' - ');
        if (actions.has(command)) {
            actions.get(command)(heroes, args);
        }
    });
}

heroesOfCodeAndLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]
);