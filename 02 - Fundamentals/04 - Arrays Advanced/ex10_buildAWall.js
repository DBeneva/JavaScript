function buildAWall(input) {
    input.map(Number);
    let unfinishedSections = input.filter(x => x < 30);
    let outputLine = [];
    let price = 0;

    while (unfinishedSections.length > 0) {
        let concrete = 0;
        
        for (let i = 0; i < unfinishedSections.length; i++) {
            unfinishedSections[i] += 1;
            concrete += 195;
        }

        outputLine.push(concrete);
        price += concrete * 1900;
        unfinishedSections = unfinishedSections.filter(x => x < 30);
    }

    console.log(outputLine.join(', '));
    console.log(`${price} pesos`);
}

buildAWall([17]);