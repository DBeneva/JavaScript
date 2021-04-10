function areaOfFigures([figure, sideA, sideB]) {
    let area = 0;
    
    if (figure == 'square') {
        area = sideA * sideA;
    } else if (figure == 'rectangle') {
        area = sideA * sideB;
    } else if (figure == 'circle') {
        area = Math.PI * sideA * sideA;
    } else if (figure == 'triangle') {
        area = sideA * sideB / 2;
    }

    console.log(area.toFixed(3));
}

function areaOfFiguresObj([figure, ...sides]) {
    let [sideA, sideB] = sides.map(Number);

    const calculations = {
        square: sideA ** 2,
        rectangle: sideA * sideB,
        circle: Math.PI * (sideA ** 2),
        triangle: sideA * sideB / 2
    };

    console.log(calculations[figure].toFixed(3));
}

areaOfFigures(['rectangle', '3', '4']);

console.log('====================');

areaOfFiguresObj(['rectangle', 3, 4]);