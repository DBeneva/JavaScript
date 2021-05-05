function townPopulation(input) {
    const towns = {};
    const output = [];

    input.forEach(line => {
        const [name, population] = line.split(' <-> ');
        towns[name] = towns[name] ? towns[name] : 0;
        towns[name] += Number(population);
    });

    for (let [name, population] of Object.entries(towns)) {
        output.push(`${name} : ${population}`);
    }

    return output.join('\n');
}

function townPopulationReduce(input) {
    return Object.entries(input
        .reduce((acc, curr) => Object.assign({
            ...acc,
            [curr.split(' <-> ')[0]]: (acc[curr.split(' <-> ')[0]] || 0) + Number(curr.split(' <-> ')[1])
        }
        ), {}))
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n');
}

console.log(townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']));

console.log('====================');

console.log(townPopulationReduce(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']));