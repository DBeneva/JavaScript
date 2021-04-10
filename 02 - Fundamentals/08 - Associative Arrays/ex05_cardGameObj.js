function cardGame(input) {
    let players = {};

    input.forEach(x => {
        let [name, hand] = x.split(': ');
        hand = hand.split(', ');

        if (!players.hasOwnProperty(name)) {
            players[name] = new Set([]);
        }

        hand.forEach(x => {
            players[name].add(x);
        });
    });

    let typeOfCards = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
    let powerOfCards = { 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };

    Object.entries(players).map(player => {
        player[1] = Array.from(player[1]).map(card => {
            let power = card.slice(0, card.length - 1);
            power = isNaN(power) ? powerOfCards[power] : Number(power);
            let type = card[card.length - 1];

            return power * typeOfCards[type];
        });

        console.log(`${player[0]}: ${player[1].reduce((a, b) => a + b, 0)}`);
    });
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);