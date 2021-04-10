function huntingGames(input) {
    input = input.map(Number);
    let days = input.shift();
    let players = input.shift();
    let energy = input.shift();
    let water = input.shift() * days * players;
    let food = input.shift() * days * players;
    let outOfEnergy = false;

    for (let i = 1; i <= days; i++) {
        energy -= input.shift();
        
        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
            outOfEnergy = true;
            break;
        }

        energy += i % 2 == 0 ? energy * 0.05 : 0;
        water -= i % 2 == 0 ? water * 0.3 : 0;
        energy += i % 3 == 0 ? energy * 0.1 : 0;
        food -= i % 3 == 0 ? food / players : 0;
    }

    let outputLine = outOfEnergy ? '' : `You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`;     
    console.log(outputLine);
}

huntingGames([
    '12',    '6',     '4430',
    '9.8',   '5.5',   '620.3',
    '840.2', '960.1', '220',
    '340',   '674',   '365',
    '345.5', '212',   '412.12',
    '258',   '496',   ''
]);