function getDancers(hallLength, hallWidth, wardrobeSide) {
    hallLength = Number(hallLength);
    hallWidth = Number(hallWidth);
    wardrobeSide = Number(wardrobeSide);

    const freeAreaCm = (hallLength * hallWidth - wardrobeSide ** 2) * 0.9;
    const areaPerDancer = 7040 / 10000;

    return Math.floor(freeAreaCm / areaPerDancer);
}

function getDancersArr(...input) {
    const [hallLength, hallWidth, wardrobeSide] = input.map(Number);
    const freeAreaCm = (hallLength * hallWidth - wardrobeSide ** 2) * 0.9;
    const areaPerDancer = 7040 / 10000;

    return Math.floor(freeAreaCm / areaPerDancer);
}

console.log(getDancers(50, 25, 2));

console.log('====================');

console.log(getDancersArr(50, 25, 2));