function muOnline(input) {
    input = input.split('|');
    let health = 100;
    let bitcoins = 0;
    let room = 0;

    while (health > 0 && input.length > 0) {
        let [event, number] = input.shift().split(' ');
        number = Number(number);
        room++;

        switch(event) {
            case 'potion':
                number = health + number > 100 ? 100 - health : number;
                health += number;
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                bitcoins += number;
                console.log(`You found ${number} bitcoins.`);
                break;
            default:
                health = health - number || 0;
                let printLine = health > 0 ? `You slayed ${event}.` : `You died! Killed by ${event}.\n Best room: ${room}`;
                console.log(printLine);
                break;
        }        
    }

    let printLine = health > 0 ? console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`) : null;
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');