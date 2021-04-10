function beehiveDefense(...input) {
    let bees = Number(input[0]);
    let bearHealth = Number(input[1]);
    let attack = Number(input[2]);

    while (bearHealth > 0) {
        bees -= attack;
        if (bees < 100) break;
        bearHealth -= bees * 5;
    }

    if (bees < 0) {
        bees = 0;
    }
    
    if (bearHealth < 0) {
        console.log(`Beehive won! Bees left ${bees}.`);
    } else {
        console.log(`The bear stole the honey! Bees left ${bees}.`);
    }
}

beehiveDefense('200', '1000', '10');