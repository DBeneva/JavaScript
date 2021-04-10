function beehiveRole(...input) {
    let intellect = Number(input[0]);
    let power = Number(input[1]);
    let sex = input[2];
    let role = '';

    if (intellect >= 80 && power >= 80 && sex == 'female') {
        role = 'Queen Bee';
    } else if (intellect >= 80) {
        role = 'Repairing Bee';
    } else if (intellect >= 60) {
        role = 'Cleaning Bee';
    } else if (power >= 80 && sex == 'male') {
        role = 'Drone Bee';
    } else if (power >= 60) {
        role = 'Guard Bee';
    } else {
        role = 'Worker Bee';
    }

    console.log(role);
}

beehiveRole('82', '81', 'female');