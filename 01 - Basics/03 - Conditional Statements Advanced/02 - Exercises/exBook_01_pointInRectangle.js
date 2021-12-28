function pointInRectangle(x1, y1, x2, y2, x, y) {
    inputParamsToNumbers();

    const insideX = x >= x1 && x <= x2;
    const insideY = y >= y1 && y <= y2;
    
    console.log(insideX && insideY ? 'Inside' : 'Outside');
    
    function inputParamsToNumbers() {
        x1 = Number(x1);
        y1 = Number(y1);
        x2 = Number(x2);
        y2 = Number(y2);
        x = Number(x);
        y = Number(y);
    }
}

pointInRectangle(2, -3, 12, 3, 8, -1);