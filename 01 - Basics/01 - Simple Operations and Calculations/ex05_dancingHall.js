function printNumberOfDancers(hallLength, hallWidth, wardrobeSide) {
    const hallAreaCm = hallLength * hallWidth * 10000;
    const wardrobeAreaCm = (wardrobeSide * 100) ** 2;
    const benchArea = hallAreaCm * 0.1;
    const freeArea = hallAreaCm - wardrobeAreaCm - benchArea;
    const areaPerDancer = 7040;
    const numberOfDancers = Math.floor(freeArea / areaPerDancer);

    console.log(numberOfDancers);
}

printNumberOfDancers('50', '25', '2');
printNumberOfDancers(50, 25, 2);