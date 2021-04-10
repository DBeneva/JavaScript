function deckOfCards(cards) {
    function playingCards(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };

        if (!faces.includes(face) || !suits[suit]) {
            console.log(`Invalid card: ${face}${suit}`);
            isValid = false;
        } else {
            return `${face}${suits[suit]}`;
        }
    }

    let result = [];
    let isValid = true;

    for (let card of cards) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);

        if (isValid) {
            result.push(playingCards(face, suit));
        }
    }

    if (isValid) {
        console.log(result.join(' '));
    }
}

deckOfCards(['AS', '10D', 'KH', '2C']);