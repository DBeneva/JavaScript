function pointOnBorder(x1, y1, x2, y2, x, y) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);
    x = Number(x);
    y = Number(y);

    const isOnLeftBorder = x == x1 && y >= y1 && y <= y2;
    const isOnRightBorder = x == x2 && y >= y1 && y <= y2;
    const isOnUpperBorder = y == y1 && x >= x1 && x <= x2;
    const isOnLowerBorder = y == y2 && x >= x1 && x <= x2;

    if (isOnLeftBorder || isOnRightBorder || isOnUpperBorder || isOnLowerBorder) {
        return 'Border';
    } else {
        return 'Inside / Outside';
    }
}

function pointOnBorderTern(...input) {
    const [x1, y1, x2, y2, x, y] = input.map(Number);

    const isOnLeftBorder = x == x1 && y >= y1 && y <= y2;
    const isOnRightBorder = x == x2 && y >= y1 && y <= y2;
    const isOnUpperBorder = y == y1 && x >= x1 && x <= x2;
    const isOnLowerBorder = y == y2 && x >= x1 && x <= x2;

    return isOnLeftBorder || isOnRightBorder || isOnUpperBorder || isOnLowerBorder ?
        'Border' : 'Inside / Outside';
}

console.log(pointOnBorder(2, -3, 12, 3, 12, -1));

console.log('====================');

console.log(pointOnBorderTern(2, -3, 12, 3, 12, -1));