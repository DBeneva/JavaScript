function townsToJSON(input) {
    input.shift();
    let towns = [];

    input.forEach(row => {
        let [name, latitude, longitude] = row
            .split('|')
            .map(x => x.trim())
            .filter(x => x != '')
            .map(x => isNaN(x) ? x : Number(Number(x).toFixed(2)));
        towns.push({ Town: name, Latitude: latitude, Longitude: longitude });
    });

    console.log(JSON.stringify(towns));
}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);