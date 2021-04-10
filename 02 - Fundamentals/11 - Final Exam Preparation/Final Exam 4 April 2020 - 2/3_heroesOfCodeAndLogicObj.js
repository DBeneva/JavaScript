function heroesOfCodeAndLogic(input) {
    let numberOfHeroes = Number(input.shift());
    let heroes = {};
    let actions = {
        CastSpell(heroes, [hero, mp, spell]) {
            if (heroes[hero].mp >= Number(mp)) {
                heroes[hero].mp -= Number(mp);
                console.log(`${hero} has successfully cast ${spell} and now has ${heroes[hero].mp} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spell}!`);
            }
        },
        TakeDamage(heroes, [hero, damage, attacker]) {
            heroes[hero].hp -= Number(damage);
            if (heroes[hero].hp > 0) {
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`);
            } else {
                console.log(`${hero} has been killed by ${attacker}!`);
            }
        },
        Recharge(heroes, [hero, amount]) {
            amount = Math.min(Number(amount), 200 - heroes[hero].mp);
            heroes[hero].mp += amount;
            console.log(`${hero} recharged for ${amount} MP!`);
        },
        Heal(heroes, [hero, amount]) {
            amount = Math.min(Number(amount), 100 - heroes[hero].hp);
            heroes[hero].hp += amount;
            console.log(`${hero} healed for ${amount} HP!`);
        },
        End(heroes) {
            Object.entries(heroes)
                .sort((a, b) => b[1].hp - a[1].hp || a[0].localeCompare(b[0]))
                .filter(x => x[1].hp > 0)
                .map(hero => {
                    console.log(hero[0]);
                    console.log(`HP: ${hero[1].hp}`);
                    console.log(`MP: ${hero[1].mp}`);
                });
        }
    };

    class Hero {
        constructor(hp, mp) {
            this.hp = Number(hp);
            this.mp = Number(mp);
        }
    }

    for (let i = 0; i < numberOfHeroes; i++) {
        let [name, hp, mp] = input.shift().split(' ');
        heroes[name] = new Hero(hp, mp);
    }

    input.map(x => {
        let [command, ...args] = x.split(' - ');
        if (actions.hasOwnProperty(command)) {
            actions[command](heroes, args);
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