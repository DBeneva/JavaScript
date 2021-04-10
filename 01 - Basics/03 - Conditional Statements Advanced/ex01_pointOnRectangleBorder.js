function pointOnRectangleBorder(x1, y1, x2, y2, x, y) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);
    x = Number(x);
    y = Number(y);

    let onLeftSide = x == x1 && y >= y1 && y <= y2;
    let onRightSide = x == x2 && y >= y1 && y <= y2;
    let onUpperSide = y == y1 && x >= x1 && x <= x2;
    let onLowerSide = y == y2 && x >= x1 && x <= x2;
    
    if (onLeftSide || onRightSide || onUpperSide || onLowerSide) {
        console.log('Border');
    } else {
        console.log('Inside / Outside');
    }
}

pointOnRectangleBorder(2, -3, 12, 3, 12, -1);