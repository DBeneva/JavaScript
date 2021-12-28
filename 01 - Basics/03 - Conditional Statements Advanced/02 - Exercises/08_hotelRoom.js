function printHotelPrices([month, nights]) {
    nights = Number(nights);
    
    const priceApartment = getByMonth(65, 68.7, 77) * getMultiplier([1, 0.9], 0.9, 0.9);
    const priceStudio = getByMonth(50, 75.2, 76) * getMultiplier([0.95, 0.7], 0.8, 1);
    
    console.log(
        `Apartment: ${(priceApartment * nights).toFixed(2)} lv.\n` +
        `Studio: ${(priceStudio * nights).toFixed(2)} lv.`
    );
    
    function getByMonth(mayOct, junSep, julAug) {
        if (['May', 'October'].includes(month)) return mayOct;
        if (['June', 'September'].includes(month)) return junSep;
        if (['July', 'August'].includes(month)) return julAug;
    }

    function getMultiplier([mayOctFew, mayOctMany], junSepMany, julAugMany) {
        return getByMonth(
            (nights > 7 && nights <= 14) ? mayOctFew : (nights > 14) ? mayOctMany : 1,
            nights > 14 ? junSepMany : 1,
            nights > 14 ? julAugMany : 1
        );
    }
}

printHotelPrices(['May', 15]);