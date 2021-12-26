function harvest([area, grapesPerSquareMeter, wineLitersNeeded, workers]) {
    inputParamsToNumbers();

    const grapesForWine = grapesPerSquareMeter * area * 0.4;
    const wineTotal = grapesForWine / 2.5;
    const difference = Math.abs(wineLitersNeeded - wineTotal);
    const litersPerPerson = Math.ceil(difference / workers);
    const output = wineTotal < wineLitersNeeded
        ? `It will be a tough winter! More ${Math.floor(difference)} liters wine needed.`
        : `Good harvest this year! Total wine: ${Math.floor(wineTotal)} liters.\n` +
            `${Math.ceil(difference)} liters left -> ${litersPerPerson} liters per person.`;
    
    console.log(output);
    
    function inputParamsToNumbers() {
        area = Number(area);
        grapesPerSquareMeter = Number(grapesPerSquareMeter);
        wineLitersNeeded = Number(wineLitersNeeded);
        workers = Number(workers);
    }
}

harvest([1020, 1.5, 425, 4]);