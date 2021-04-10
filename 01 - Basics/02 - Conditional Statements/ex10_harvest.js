function harvest([area, grapesPerSquareMeter, wineLitersNeeded, workers]) {
    area = Number(area);
    grapesPerSquareMeter = Number(grapesPerSquareMeter);
    wineLitersNeeded = Number(wineLitersNeeded);
    workers = Number(workers);

    let grapesTotal = grapesPerSquareMeter * area;
    let grapesForWine = grapesTotal * 0.4;
    let wineTotal = grapesForWine / 2.5;
    let difference = Math.abs(wineLitersNeeded - wineTotal);

    if (wineTotal < wineLitersNeeded) {
        console.log(`It will be a tough winter! More ${Math.floor(difference)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineTotal)} liters.`);
        console.log(`${Math.ceil(difference)} liters left -> ${Math.ceil(difference / workers)} liters per person.`);
    }
}

function harvestTernary(input) {
    let [area, grapesPerSquareMeter, wineLitersNeeded, workers] = input.map(Number);
    let wineTotal = grapesPerSquareMeter * area * 0.4 / 2.5;
    let difference = Math.abs(wineLitersNeeded - wineTotal);

    let result = wineTotal < wineLitersNeeded ?
        `It will be a tough winter! More ${Math.floor(difference)} liters wine needed.` :
        `Good harvest this year! Total wine:${Math.floor(wineTotal)} liters.\
        \n${Math.ceil(difference)} liters left -> ${Math.ceil(difference / workers)} liters per person.`;

    console.log(result);
}

harvest([650, 2, 175, 3]);

console.log('====================');

harvestTernary([650, 2, 175, 3]);