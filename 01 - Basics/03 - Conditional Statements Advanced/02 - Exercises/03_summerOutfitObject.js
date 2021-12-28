function printSummerOutfit([degrees, timeOfTheDay]) {
    const outfits = {
        Morning: createOutfit([
            ['Sweatshirt', 'Sneakers'],
            ['Shirt', 'Moccasins'],
            ['T-Shirt', 'Sandals']
        ]),
        Afternoon: createOutfit([
            ['Shirt', 'Moccasins'],
            ['T-Shirt', 'Sandals'],
            ['Swim Suit', 'Barefoot']
        ]),
        Evening: createOutfit([
            ['Shirt', 'Moccasins']
        ])
    };

    const { outfit, shoes } = getOutfitByTemperature();
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

    function createOutfit(items) {
        return items.map(([outfit, shoes]) => ({ outfit, shoes }));
    }

    function getOutfitByTemperature() {
        degrees = Number(degrees);
        const outfit = outfits[timeOfTheDay];

        if (degrees >= 10 && degrees <= 18) return outfit[0];
        else if (degrees > 18 && degrees <= 24) return outfit[1] || outfit[0];
        else if (degrees > 24) return outfit[2] || outfit[0];
    }
}

printSummerOutfit(['28', 'Evening']);