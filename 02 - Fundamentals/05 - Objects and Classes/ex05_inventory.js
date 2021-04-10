function inventory(input) {
    let heroes = [];

    for (let element of input) {
        let hero = {};
        let [name, level, items] = element.split(' / ');
        hero.name = name;
        hero.level = Number(level);
        hero.items = items.split(', ').sort().join(', ');
        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level)
        .forEach(x => {
            console.log(`Hero: ${x.name}`);
            console.log(`level => ${x.level}`);
            console.log(`items => ${x.items}`);
        });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);