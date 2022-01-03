function printSummerOutfit([degrees, timeOfTheDay]) {
    degrees = Number(degrees);

    const outfit = getByTimeOfTheDay(
        'Sweatshirt', 'Shirt',
        'T-Shirt', 'Shirt',
        'T-Shirt', 'Swim Suit',
        'Shirt'
    );
    
    const shoes = getByTimeOfTheDay(
        'Sneakers', 'Moccasins',
        'Sandals', 'Moccasins',
        'Sandals', 'Barefoot',
        'Moccasins'
    );
    
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

    function getByTimeOfTheDay(mornCold, mornWarm, mornHot, noonCold, noonWarm, noonHot, evening) {
        switch (timeOfTheDay) {
            case 'Morning': return getByDegrees(mornCold, mornWarm, mornHot);
            case 'Afternoon': return getByDegrees(noonCold, noonWarm, noonHot);
            case 'Evening': return getByDegrees(evening);
        }
    }

    function getByDegrees(cold, warm, hot) {
        if (degrees >= 10 && degrees <= 18) return cold;
        else if (degrees > 18 && degrees <= 24) return warm || cold;
        else if (degrees >= 25) return hot || cold;
    }
}

printSummerOutfit(['28', 'Evening']);