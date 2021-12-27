function printArea([figure, sideA, sideB]) {
    const area = {
        square: sideA ** 2,
        rectangle: sideA * sideB,
        circle: Math.PI * (sideA ** 2),
        triangle: sideA * sideB / 2
    };

    console.log(area[figure].toFixed(3));
}

printArea(['rectangle', 3, 4]);