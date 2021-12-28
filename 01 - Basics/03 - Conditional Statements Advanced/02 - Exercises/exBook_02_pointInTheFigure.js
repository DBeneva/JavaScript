function pointInFigure(h, x, y) {
    inputParamsToNumbers();

    const insideBottom = x > 0 && x < 3 * h && y > 0 && y < h;
    const insideTop = x > h && x < 2 * h && y > 0 && y < 4 * h;
    const commonBorder = y == h && x > h && x < 2 * h;
    const outsideBottom = x < 0 || x > 3 * h || y < 0 || y > h;
    const outsideTop = x < h || x > 2 * h || y < h || y > 4 * h;
    
    if (insideBottom || insideTop || commonBorder) {
        console.log('inside');
    } else if (outsideBottom && outsideTop) {
        console.log('outside');
    } else {
        console.log('border');
    }
    
    function inputParamsToNumbers() {
        h = Number(h);
        x = Number(x);
        y = Number(y);
    }
}

pointInFigure(15, 30, 0);