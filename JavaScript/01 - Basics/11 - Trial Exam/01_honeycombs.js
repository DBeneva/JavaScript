function honeycombs(...input) {
    let bees = Number(input[0]);
    let flowers = Number(input[1]);
    let honey = bees * flowers * 0.21;
    let honeycombs = Math.trunc(honey / 100);
    let honeyLeft = honey % 100;
    
    console.log(`${honeycombs} honeycombs filled.`);
    console.log(`${honeyLeft.toFixed(2)} grams of honey left.`);
}

honeycombs('25', '6400');