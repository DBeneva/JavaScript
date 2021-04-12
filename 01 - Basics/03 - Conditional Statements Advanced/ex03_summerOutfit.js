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
    degrees = Number(degrees);

    const temperatures = {
        freezing: degrees < 10,
        cold: degrees >= 10 && degrees <= 18,
        warm: degrees > 18 && degrees <= 24,
        hot: degrees > 24
    };

    const temp = Object.entries(temperatures).find(([k, v]) => v == true)[0];

    const outfits = {
        Morning: {
            cold: {
                outfit: 'Sweatshirt',
                shoes: 'Sneakers'
            },
            warm: {
                outfit: 'Shirt',
                shoes: 'Moccasins'
            },
            hot: {
                outfit: 'T-Shirt',
                shoes: 'Sandals'
            }
        },
        Afternoon: {
            cold: {
                outfit: 'Shirt',
                shoes: 'Moccasins'
            },
            warm: {
                outfit: 'T-Shirt',
                shoes: 'Sandals'
            },
            hot: {
                outfit: 'Swim Suit',
                shoes: 'Barefoot'
            }
        },
        Evening: {
            cold: {
                outfit: 'Shirt',
                shoes: 'Moccasins'
            },
            warm: {
                outfit: 'Shirt',
                shoes: 'Moccasins'
            },
            hot: {
                outfit: 'Shirt',
                shoes: 'Moccasins'
            }
        }
    };

    const [outfit, shoes] = outfits[timeOfTheDay][temp] ?
        Object.values(outfits[timeOfTheDay][temp]) : ['', ''];

    return `It's ${degrees} degrees, get your ${outfit} and ${shoes}.`;
}

console.log(getSummerOutfit(['-4', 'Morning']));

console.log('====================');

console.log(getSummerOutfitObj(['-4', 'Morning']));