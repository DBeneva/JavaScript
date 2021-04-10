function pointInTheFigure(h, x, y) {
    h = Number(h);
    x = Number(x);
    y = Number(y);

    let insideLowerPart = x > 0 && x < 3 * h && y > 0 && y < h;
    let insideUpperPart = x > h && x < 2 * h && y > 0 && y < 4 * h;

    let commonBorder = y == h && x > h && x < 2 * h;

    let outsideLowerPart = x < 0 || x > 3 * h || y < 0 || y > h;
    let outsideUpperPart = x < h || x > 2 * h || y < h || y > 4 * h;

    if (insideLowerPart || insideUpperPart || commonBorder) {
        console.log('inside');
    } else if (outsideLowerPart && outsideUpperPart) {
        console.log('outside');
    } else {
        console.log('border');
    }
}

pointInTheFigure(15, 30, 0);
