function printTripPrice([days, accommodation, grade]) {
    const nights = Number(days) - 1;
    let price = 0;

    switch (accommodation) {
        case 'room for one person': price = getPrice(18); break;
        case 'apartment': price = getPrice(25, 0.7, 0.65, 0.5); break;
        case 'president apartment': price = getPrice(35, 0.9, 0.85, 0.8); break;
    }

    console.log((price * nights).toFixed(2));

    function getPrice(price, first = 1, second = 1, third = 1) {
        let discountMultiplier = 1;

        if (nights < 10) discountMultiplier = first;
        else if (nights >= 10 && nights <= 15) discountMultiplier = second;
        else if (nights > 15) discountMultiplier = third;

        return price * discountMultiplier * getRatingMultiplier();
    }

    function getRatingMultiplier() {
        if (grade == 'positive') return 1.25;
        else if (grade == 'negative') return 0.9;
    }
}

printTripPrice([14, 'apartment', 'positive']);
printTripPrice([12, 'room for one person', 'positive']);