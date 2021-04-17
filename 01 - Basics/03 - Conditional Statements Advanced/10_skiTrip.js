function getTripPrice(days, accommodation, grade) {
    const nights = Number(days) - 1;
    let price = 0;

    switch (accommodation) {
        case 'room for one person': price = 18; break;

        case 'apartment':
            price = 25;

            if (nights < 10) {
                price *= 0.7;
            } else if (nights >= 10 && nights <= 15) {
                price *= 0.65;
            } else if (nights > 15) {
                price *= 0.5;
            }
            break;

        case 'president apartment':
            price = 35;

            if (nights < 10) {
                price *= 0.9;
            } else if (nights >= 10 && nights <= 15) {
                price *= 0.85;
            } else if (nights > 15) {
                price *= 0.8;
            }
            break;
    }

    if (grade == 'positive') price *= 1.25;
    else if (grade == 'negative') price *= 0.9;

    return (price * nights).toFixed(2);
}

function getTripPriceObj(days, type, grade) {
    const nights = Number(days) - 1;
    
    const accommodation = {
        'room for one person': createAccommodation('room for one person', 18),
        apartment: createAccommodation('apartment', 25, 0.7, 0.65, 0.5),
        'president apartment': createAccommodation('president apartment', 35, 0.9, 0.85, 0.8)
    };
    
    const total = nights * accommodation[type].price * accommodation[type].multiplier;
    
    return total.toFixed(2);
    
    function createAccommodation(name, price, first = 1, second = 1, third = 1) {
        return {
            name,
            price,
            multiplier: (nights < 10 ? first :
                nights <= 15 ? second :
                    third) * (grade == 'positive' ? 1.25 : 0.9)
        }
    }
}

console.log(getTripPrice(14, 'apartment', 'positive'));

console.log('====================');

console.log(getTripPriceObj(14, 'apartment', 'positive'));