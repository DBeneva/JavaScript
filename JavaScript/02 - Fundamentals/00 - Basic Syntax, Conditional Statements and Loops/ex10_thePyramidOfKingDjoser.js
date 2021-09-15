function thePyramidOfKingDjoser(base, step) {
    base = Number(base);
    step = Number(step);
    let stoneBlocks = 0;
    let marbleBlocks = 0;
    let lapisLazuliBlocks = 0;
    let goldBlocks = 0;
    let numberOfSteps = 1;

    while (base > 2) {
        stoneBlocks += (base - 2) * (base - 2) * step;
        
        if (numberOfSteps % 5 == 0) {
            lapisLazuliBlocks += ((base * 4) - 4) * step;
        } else {
            marbleBlocks += ((base * 4) - 4) * step;
        }
        
        base -= 2;
        numberOfSteps++;
    }

    goldBlocks += base * base * step;

    console.log(`Stone required: ${Math.ceil(stoneBlocks)}`);
    console.log(`Marble required: ${Math.ceil(marbleBlocks)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliBlocks)}`);
    console.log(`Gold required: ${Math.ceil(goldBlocks)}`);
    console.log(`Final pyramid height: ${Math.floor(numberOfSteps * step)}`);
}

thePyramidOfKingDjoser(23, 0.5);