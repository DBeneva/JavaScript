function getSummerOutfit([degrees, timeOfTheDay]) {
    degrees = Number(degrees);
    let outfit = '';
    let shoes = '';

    switch (timeOfTheDay) {
        case 'Morning':
            if (degrees >= 10 && degrees <= 18) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            } else if (degrees > 18 && degrees <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (degrees >= 25) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            }
            break;

        case 'Afternoon':
            if (degrees >= 10 && degrees <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (degrees > 18 && degrees <= 24) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            } else if (degrees >= 25) {
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
            }
            break;

        case 'Evening':
            outfit = 'Shirt';
            shoes = 'Moccasins';
            break;
    }

    return `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`;
}

function getSummerOutfitObj([degrees, timeOfTheDay]) {
    const outfits = {
        Morning: getOutfits(
            ['Sweatshirt', 'Sneakers'],
            ['Shirt', 'Moccasins'],
            ['T-Shirt', 'Sandals']
        ),
        Afternoon: getOutfits(
            ['Shirt', 'Moccasins'],
            ['T-Shirt', 'Sandals'],
            ['Swim Suit', 'Barefoot']
        ),
        Evening: getOutfits(
            ['Shirt', 'Moccasins']
        )
    };

    const [outfit, shoes] = outfits[timeOfTheDay][getTemperature()] ?
        Object.values(outfits[timeOfTheDay][getTemperature()]) : ['', ''];

    return `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`;

    function getOutfits(cold, warm = cold, hot = cold) {
        return {
            cold: {
                outfit: cold[0],
                shoes: cold[1],
            },
            warm: {
                outfit: warm[0],
                shoes: warm[1],
            },
            hot: {
                outfit: hot[0],
                shoes: hot[1],
            }
        }
    }

    function getTemperature() {
        degrees = Number(degrees);

        const temperatures = {
            freezing: degrees < 10,
            cold: degrees >= 10 && degrees <= 18,
            warm: degrees > 18 && degrees <= 24,
            hot: degrees > 24
        };

        return Object.entries(temperatures).find(([k, v]) => v == true)[0];
    }
}

console.log(getSummerOutfit(['-4', 'Morning']));

console.log('====================');

console.log(getSummerOutfitObj(['14', 'Evening']));