function travelTime(input) {
    let destinations = {};

    input.forEach(x => {
        let [country, city, cost] = x.split(' > ');
        cost = Number(cost);
        
        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = [];
        }
        
        if (!destinations[country].includes(city)) {
            destinations[country].push(city, '->', cost);
        } else {
            let index = destinations[country].indexOf(city) + 2;
            destinations[country].splice(index, 1, Math.min(destinations[country][index], cost));
        }
    });

    Object.entries(destinations)
        .sort((a, b) => a[0].localeCompare(b[0]) ||
        a[1].filter((x, i, a) => i + 1 % 3 == 0).reduce((a, b) => a + b, 0) -
        b[1].filter((x, i, a) => i + 1 % 3 == 0).reduce((a, b) => a + b, 0))
        .map(x => {
            console.log(`${x[0]} -> ${x[1].join(' ')}`);
        });
}

travelTime([
    'Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200'
]);