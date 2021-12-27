function printRectangleInfo(x1, y1, x2, y2) {
    inputParamsToNumbers();

    const sideA = Math.abs(x1 - x2);
    const sideB = Math.abs(y1 - y2);
    const area = sideA * sideB;
    const perimeter = (sideA + sideB) * 2;
    
    console.log(`${area.toFixed(2)}\n${perimeter.toFixed(2)}`);
    
    function inputParamsToNumbers() {
        x1 = Number(x1);
        y1 = Number(y1);
        x2 = Number(x2);
        y2 = Number(y2);
    }
}

printRectangleInfo(60, 20, 10, 50);
printRectangleInfo('60', '20', '10', '50');