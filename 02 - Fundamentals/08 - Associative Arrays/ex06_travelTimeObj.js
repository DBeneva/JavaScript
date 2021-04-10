function travelTime(input) {
    let destinations = {};

    input.forEach(x => {
        let [country, city, cost] = x.split(' > ');
        cost = Number(cost);

        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
        }

        if (!destinations[country].hasOwnProperty(city)) {
            destinations[country][city] = cost;
        } else {
            destinations[country][city] = Math.min(destinations[country][city], cost);
        }
    });

    Object.entries(destinations)
        .sort((a, b) => a[0].localeCompare(b[0]) ||
            Object.values(a[1]) - Object.values(b[1]))
        .map(x => {
            let cities = '';

            for (let city in x[1]) {
                cities += `${city} -> ${x[1][city]} `;
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