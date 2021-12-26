function printArea([figure, sideA, sideB]) {
    let area = 0;
    
    if (figure == 'square') area = sideA * sideA;
    else if (figure == 'rectangle') area = sideA * sideB;
    else if (figure == 'circle') area = Math.PI * sideA * sideA;
    else if (figure == 'triangle') area = sideA * sideB / 2;

    console.log(area.toFixed(3));
}

function printAreaObject([figure, sideA, sideB]) {
    const area = {
        square: sideA ** 2,
        rectangle: sideA * sideB,
        circle: Math.PI * (sideA ** 2),
        triangle: sideA * sideB / 2
    };

    console.log(area[figure].toFixed(3));
}

printArea(['rectangle', '3', '4']);
console.log('====================');
printAreaObject(['rectangle', 3, 4]);