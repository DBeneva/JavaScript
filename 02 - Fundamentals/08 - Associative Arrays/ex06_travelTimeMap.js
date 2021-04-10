function travelTime(input) {
    let destinations = new Map();

    input.forEach(x => {
        let [country, city, cost] = x.split(' > ');
        cost = Number(cost);
        
        if (!destinations.has(country)) {
            destinations.set(country, new Map());
        }
        
        if (!destinations.get(country).has(city)) {
            destinations.get(country).set(city, cost);
        } else {
            destinations.get(country).set(city, Math.min(destinations.get(country).get(city), cost));
        }
    });

    [...destinations]
        .sort((a, b) => a[0].localeCompare(b[0]) || [...a[1].values()].join('') - [...b[1].values()].join(''))
        .map(x => {
            let cities = '';
        
            for (let city of x[1]) {
                cities += `${city[0]} -> ${city[1]} `;
            }
        
            console.log(`${x[0]} -> ${cities}`);
        });
}

travelTime([
    'Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200'
]);