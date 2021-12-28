function printTripPrice([days, type, rating]) {
    const nights = Number(days) - 1;
    
    const accommodation = {
        'room for one person': createAccommodation(18),
        apartment: createAccommodation(25, 0.7, 0.65, 0.5),
        'president apartment': createAccommodation(35, 0.9, 0.85, 0.8)
    };
    
    const total = nights * accommodation[type].price * accommodation[type].multiplier;
    
    console.log(total.toFixed(2));
    
    function createAccommodation(price, first = 1, second = 1, third = 1) {
        return {
            price,
            multiplier: getMultiplier() * getRatingMultiplier()
        }

        function getMultiplier() {
            if (nights < 10) return first;
            else if (nights <= 15) return second;
            else return third;
        }

        function getRatingMultiplier() {
            if (rating == 'positive') return 1.25;
            return 0.9;
        }
    }
}

printTripPrice(14, 'apartment', 'positive');