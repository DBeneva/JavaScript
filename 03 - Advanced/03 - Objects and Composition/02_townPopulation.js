function townPopulation(input) {
    const towns = {};

    input.forEach(line => {
        let [name, population] = line.split(' <-> ');
        
        if (!towns[name]) {
            towns[name] = 0;
        }

        towns[name] += Number(population);
    });

    for (let [name, population] of Object.entries(towns)) {
        console.log(`${name} : ${population}`);
    }
}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);