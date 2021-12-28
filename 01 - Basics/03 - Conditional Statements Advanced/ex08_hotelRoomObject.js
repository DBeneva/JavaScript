function getPricesHotelObj([month, nights]) { 
    const prices = {
        May: getPrices(65, 50, 0.95, 0.7),
        October: getPrices(65, 50, 0.95, 0.7),
        June: getPrices(68.7, 75.2, 1, 0.8),
        September: getPrices(68.7, 75.2, 1, 0.8),
        July: getPrices(77, 76, 1, 1),
        August: getPrices(77, 76, 1, 1)
    };
    
    console.log(
        `Apartment: ${(prices[month].priceApartment).toFixed(2)} lv.\n` + 
        `Studio: ${(prices[month].priceStudio).toFixed(2)} lv.`
    );
    
    function getPrices(priceApartment, priceStudio, multiplier7To14, multiplier14Plus) {
        nights = Number(nights);

        return {
            apartmentMultiplier: nights > 14 ? 0.9 : 1,
            studioMultiplier: getStudioMultiplier(multiplier7To14, multiplier14Plus),
            get priceApartment() {
                return priceApartment * this.apartmentMultiplier * nights;
            },
            get priceStudio() {
                return priceStudio * this.studioMultiplier * nights;
            }
        };

        function getStudioMultiplier(multiplier7To14, multiplier14Plus) {
            if (nights > 7 && nights <= 14) return multiplier7To14;
            else if (nights > 14) return multiplier14Plus;
            else return 1;
        }
    }
}

getPricesHotelObj(['May', 15]);