function starEnigma(input) {
    let n = Number(input.shift());
    input = input.filter(x => x.length > 0).slice(0, n);
    let planets = { attacked: [], destroyed: [] };
    
    let actions = {
        A(planets, planet) {
            planets.attacked.push(planet);
        },
        D(planets, planet) {
            planets.destroyed.push(planet);
        }
    };
    
    let planet = '@(?<planet>[A-Za-z]+) ';
    let population = '\\:\\d+ ';
    let attack = '\\!(?<attack>[AD])\\! ';
    let soldiers = '\\-\\>\\d+';
    let validMessage = (planet + population + attack + soldiers).split(' ').join('[^@\\-\\!\\:\\>]*');

    input.forEach(message => {
        let key = message.match(/[star]/gi) && message.match(/[star]/gi).length;
        let decrypted = '';

        for (let char of message) {
            decrypted += String.fromCharCode(char.charCodeAt() - key);
        }

        if ((match = decrypted.match(validMessage)) && actions.hasOwnProperty(match.groups.attack)) {
            actions[match.groups.attack](planets, match.groups.planet);
        }
    });

    console.log(`Attacked planets: ${planets.attacked.length}`);
    printPlanets(planets.attacked);
    console.log(`Destroyed planets: ${planets.destroyed.length}`);
    printPlanets(planets.destroyed);

    function printPlanets(array) {
        array.sort((a, b) => a.localeCompare(b))
            .map(planet => {
                console.log(`-> ${planet}`);
            });
    }
}

starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]
);