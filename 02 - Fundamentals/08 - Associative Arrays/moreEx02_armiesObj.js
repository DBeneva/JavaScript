function armies(input) {
    let leaders = {};

    input.forEach(x => {
        if (x.includes('arrives')) {
            let name = x.slice(0, x.indexOf(' arrives'));
            leaders[name] = {};
        } else if (x.includes(':')) {
            let name = x.slice(0, x.indexOf(':'));
            let [army, count] = x.slice(x.indexOf(':') + 2, x.length).split(', ');

            if (leaders.hasOwnProperty(name)) {
                leaders[name][army] = Number(count);
            }
        } else if (x.includes('+')) {
            let [army, count] = x.split(' + ');

            for (let name in leaders) {
                if (leaders[name].hasOwnProperty(army)) {
                    leaders[name][army] += Number(count);
                }
            }
        } else if (x.includes('defeated')) {
            let name = x.slice(0, x.indexOf(' defeated'));
            delete leaders[name];
        }
    });

    Object.entries(leaders)
        .sort((a, b) => totalArmy(b[1]) - totalArmy(a[1]))
        .map(leader => {
            console.log(`${leader[0]}: ${totalArmy(leader[1])}`);

            Object.entries(leader[1])
                .sort((a, b) => b[1] - a[1])
                .map(army => {
                    console.log(`>>> ${army[0]} - ${army[1]}`);
                });
        });

    function totalArmy(object) {
        return Object.values(object).reduce((a, b) => a + b, 0);
    }
}

armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);