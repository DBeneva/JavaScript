function honeyHarvest(...input) {
    let flowerType = input[0];
    let numberOfFlowers = Number(input[1]);
    let season = input[2];
    let honey = 0;

    switch (flowerType) {
        case 'Sunflower':
            switch (season) {
                case 'Spring': honey += numberOfFlowers * 10; break;
                case 'Summer': honey += numberOfFlowers * 8; break;
                case 'Autumn': honey += numberOfFlowers * 12; break;
            }
            break;
            
        case 'Daisy':
            switch (season) {
                case 'Spring':
                    honey += numberOfFlowers * 12;
                    honey += honey * 0.10;
                    break;
                case 'Summer': honey += numberOfFlowers * 8; break;
                case 'Autumn': honey += numberOfFlowers * 6; break;
            }
            break;

        case 'Lavender':
            switch (season) {
                case 'Spring': honey += numberOfFlowers * 12; break;
                case 'Summer': honey += numberOfFlowers * 8; break;
                case 'Autumn': honey += numberOfFlowers * 6; break;
            }
            break;

        case 'Mint':
            switch (season) {
                case 'Spring':
                    honey += numberOfFlowers * 10;
                    honey += honey * 0.10;
                    break;
                case 'Summer': honey += numberOfFlowers * 12; break;
                case 'Autumn': honey += numberOfFlowers * 6; break;
            }
            break;
    }

    if (season == 'Summer') {
        honey += honey * 0.10;
    } else if (season == 'Autumn') {
        honey -= honey * 0.05;
    }

    console.log(`Total honey harvested: ${honey.toFixed(2)}`);
}

honeyHarvest('Sunflower', '11', 'Autumn');