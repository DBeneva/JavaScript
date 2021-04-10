function beehivePopulation(...input) {
    let population = Number(input[0]);
    let period = Number(input[1]);

    for (let year = 1; year <= period; year++) {
        population += Math.trunc(population / 10) * 2;
    
        if (year % 5 == 0) {
            population -= Math.trunc(population / 50) * 5;
        }
    
        population -= Math.trunc(population / 20) * 2;
    }

    console.log(`Beehive population: ${population}`);
}

beehivePopulation('100', '6');