function hotelRoom(month, nights) {
    nights = Number(nights);
    let priceApartment = 0;
    let priceStudio = 0;

    switch (month) {
        case 'May':
        case 'October':
            priceApartment = nights * 65;
            priceStudio = nights * 50;
            
            if (nights > 7 && nights <= 14) {
                priceStudio -= 0.05 * priceStudio;
            } else if (nights > 14) {
                priceStudio -= 0.3 * priceStudio;
            }
            break;
            
        case 'June':
        case 'September':
            priceApartment = nights * 68.7;
            priceStudio = nights * 75.2;
            
            if (nights > 14) {
                priceStudio -= 0.2 * priceStudio;
            }
            break;
            
        case 'July':
        case 'August':
            priceApartment = nights * 77;
            priceStudio = nights * 76;
            break;
    }

    if (nights > 14) {
        priceApartment -= 0.1 * priceApartment;
    }

    console.log(`Apartment: ${(priceApartment).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
}

hotelRoom('May', 15);