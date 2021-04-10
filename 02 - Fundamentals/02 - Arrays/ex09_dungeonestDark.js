function dungeonestDark(input) {
    let health = 100;
    let coins = 0;
    let isDead = false;
    input = input[0].split('|');

    for (let index = 0; index < input.length; index++) {
        let currentRoom = input[index].split(' ');
        let itemOrMonster = currentRoom[0];
        let number = Number(currentRoom[1]);

        switch (itemOrMonster) {
            case 'potion':
                
                if (health + number > 100) {
                    number = 100 - health;
                }

                health += number;
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;

            case 'chest':
                coins += number;
                console.log(`You found ${number} coins.`);
                break;

            default:
                health -= number;
                
                if (health > 0) {
                    console.log(`You slayed ${itemOrMonster}.`);
                } else {
                    console.log(`You died! Killed by ${itemOrMonster}.`);
                    console.log(`Best room: ${index + 1}`);
                    isDead = true;
                }
                break;
        }

        if (isDead) {
            break;
        }
    }

    if (!isDead) {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
    }
}

dungeonestDark(['rat 90|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);