function harvest([area, grapesPerSquareMeter, wineLitersNeeded, workers]) {
    area = Number(area);
    grapesPerSquareMeter = Number(grapesPerSquareMeter);
    wineLitersNeeded = Number(wineLitersNeeded);
    workers = Number(workers);

    const grapesForWine = grapesPerSquareMeter * area * 0.4;
    const wineTotal = grapesForWine / 2.5;
    const difference = Math.abs(wineLitersNeeded - wineTotal);

    if (wineTotal < wineLitersNeeded) {
        return `It will be a tough winter! More ${Math.floor(difference)} liters wine needed.`;
    } else {
        return `Good harvest this year! Total wine: ${Math.floor(wineTotal)} liters.
${Math.ceil(difference)} liters left -> ${Math.ceil(difference / workers)} liters per person.`;
    }
}

function harvestTern(input) {
    const [area, grapesPerSquareMeter, wineLitersNeeded, workers] = input.map(Number);
    const wineTotal = grapesPerSquareMeter * area * 0.4 / 2.5;
    const difference = Math.abs(wineLitersNeeded - wineTotal);

    const result = wineTotal < wineLitersNeeded ?
        `It will be a tough winter! More ${Math.floor(difference)} liters wine needed.` :
        `Good harvest this year! Total wine:${Math.floor(wineTotal)} liters.\
        \n${Math.ceil(difference)} liters left -> ${Math.ceil(difference / workers)} liters per person.`;

    return result;
}

console.log(harvest([650, 2, 175, 3]));

console.log('====================');

console.log(harvestTern([650, 2, 175, 3]));