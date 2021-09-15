function pointOnBorder(x1, y1, x2, y2, x, y) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);
    x = Number(x);
    y = Number(y);

    const isOnLeftBorder = x == x1 && y >= y1 && y <= y2;
    const isOnRightBorder = x == x2 && y >= y1 && y <= y2;
    const isOnTopBorder = y == y1 && x >= x1 && x <= x2;
    const isOnBottomBorder = y == y2 && x >= x1 && x <= x2;

    if (isOnLeftBorder || isOnRightBorder || isOnTopBorder || isOnBottomBorder) {
        return 'Border';
    } else {
        return 'Inside / Outside';
    }
}

function pointOnBorderObj(...input) {
    const [x1, y1, x2, y2, x, y] = input.map(Number);

    return isOnBorder() ? 'Border' : 'Inside / Outside';

    function isOnBorder() {
        const borders = {
            left: x == x1 && y >= y1 && y <= y2,
            right: x == x2 && y >= y1 && y <= y2,
            top: y == y1 && x >= x1 && x <= x2,
            bottom: y == y2 && x >= x1 && x <= x2
        };

        return Object.values(borders).some(v => v == true);
    }
}

console.log(pointOnBorder(2, -3, 12, 3, 12, -1));

console.log('====================');

console.log(pointOnBorderObj(2, -3, 12, 3, 12, -1));