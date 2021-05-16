function getRectangleInfo(x1, y1, x2, y2) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);

    const sideA = Math.abs(x1 - x2);
    const sideB = Math.abs(y1 - y2);
    const area = sideA * sideB;
    const perimeter = (sideA + sideB) * 2;

    return `${area.toFixed(2)}\n${perimeter.toFixed(2)}`;
}

function getRectangleInfoArr(...input) {
    const [x1, y1, x2, y2] = input.map(Number);

    const sideA = Math.abs(x1 - x2);
    const sideB = Math.abs(y1 - y2);
    const area = sideA * sideB;
    const perimeter = (sideA + sideB) * 2;

    return `${area.toFixed(2)}\n${perimeter.toFixed(2)}`;
}

console.log(getRectangleInfo(60, 20, 10, 50));

console.log('====================');

console.log(getRectangleInfoArr(60, 20, 10, 50));