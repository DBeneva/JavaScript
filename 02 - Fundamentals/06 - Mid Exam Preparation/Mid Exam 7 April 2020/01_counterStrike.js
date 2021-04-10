function counterStrike(input) {
    let energy = Number(input.shift());
    let wonBattles = 0;

    while (input.length > 0) {
        let distance = Number(input.shift());

        if (isNaN(distance)) {
            console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
            break;
        } else if (energy >= distance) {
            energy -= distance;
            wonBattles++;
            energy = wonBattles % 3 == 0 ? energy + wonBattles : energy;
        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            break;
        }
    }
}

counterStrike(['200', '54', '14', '28', '13', 'End of battle']);