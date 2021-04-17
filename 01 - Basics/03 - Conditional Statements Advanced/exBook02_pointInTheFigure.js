function pointInTheFigure(h, x, y) {
    h = Number(h);
    x = Number(x);
    y = Number(y);

    const insideBottomPart = x > 0 && x < 3 * h && y > 0 && y < h;
    const insideTopPart = x > h && x < 2 * h && y > 0 && y < 4 * h;
    const commonBorder = y == h && x > h && x < 2 * h;
    const outsideBottomPart = x < 0 || x > 3 * h || y < 0 || y > h;
    const outsideTopPart = x < h || x > 2 * h || y < h || y > 4 * h;

    if (insideBottomPart || insideTopPart || commonBorder) {
        return 'inside';
    } else if (outsideBottomPart && outsideTopPart) {
        return 'outside';
    } else {
        return 'border';
    }
}

function pointInTheFigureObj(...input) {
    const [h, x, y] = input.map(Number);

    return isInside() || isOutside() || 'border';
    
    function isInside() {
        const location = {
            insideBottomPart: x > 0 && x < 3 * h && y > 0 && y < h,
            insideTopPart: x > h && x < 2 * h && y > 0 && y < 4 * h,
            commonBorder: y == h && x > h && x < 2 * h
        };

        return Object.values(location).some(v => v == true);
    }

    function isOutside() {
        const location = {
            outsideBottomPart: x < 0 || x > 3 * h || y < 0 || y > h,
            outsideTopPart: x < h || x > 2 * h || y < h || y > 4 * h,
        };

        return Object.values(location).every(v => v == true);
    }
}

console.log(pointInTheFigure(15, 30, 0));

console.log('====================');

console.log(pointInTheFigureObj(15, 30, 0));
