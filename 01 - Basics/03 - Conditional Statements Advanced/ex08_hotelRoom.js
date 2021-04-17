function getPricesHotel(month, nights) {
    nights = Number(nights);
    let priceApartment = 0;
    let priceStudio = 0;

    switch (month) {
        case 'May':
        case 'October':
            priceApartment = 65;
            priceStudio = 50;

            if (nights > 7 && nights <= 14) {
                priceStudio *= 0.95;
            } else if (nights > 14) {
                priceStudio *= 0.7;
            }
            break;

        case 'June':
        case 'September':
            priceApartment = 68.7;
            priceStudio = 75.2;

            if (nights > 14) {
                priceStudio *= 0.8;
            }
            break;

        case 'July':
        case 'August':
            priceApartment = 77;
            priceStudio = 76;
            break;
    }

    if (nights > 14) {
        priceApartment *= 0.9;
    }

    return `Apartment: ${(priceApartment * nights).toFixed(2)} lv.
Studio: ${(priceStudio * nights).toFixed(2)} lv.`;
}

function getPricesHotelObj(month, nights) { 
    const prices = {
        May: getPrices(65, 50, 0.95, 0.7),
        October: getPrices(65, 50, 0.95, 0.7),
        June: getPrices(68.7, 75.2, 1, 0.8),
        September: getPrices(68.7, 75.2, 1, 0.8),
        July: getPrices(77, 76, 1, 1)
    };
    
    return `Apartment: ${(prices[month].priceApartment).toFixed(2)} lv.
Studio: ${(prices[month].priceStudio).toFixed(2)} lv.`;
    
    function getPrices(priceApartment, priceStudio, multiplier7To14, multiplier14Plus) {
        nights = Number(nights);

        return {
            apartmentMultiplier: nights > 14 ? 0.9 : 1,
            studioMultiplier: nights > 7 && nights <= 14 ? multiplier7To14 : nights > 14 ? multiplier14Plus : 1,
            get priceApartment() {
                return priceApartment * this.apartmentMultiplier * nights;
            },
            get priceStudio() {
                return priceStudio * this.studioMultiplier * nights;
            }
        };
    }
}

console.log(getPricesHotel('May', 15));

console.log('====================');

console.log(getPricesHotelObj('May', 15));