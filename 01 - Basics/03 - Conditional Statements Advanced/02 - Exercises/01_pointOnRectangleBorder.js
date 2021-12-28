function pointOnBorder([x1, y1, x2, y2, x, y]) {
    inputParamsToNumbers();

    if (isOnBorder()) console.log('Border');
    else console.log('Inside / Outside');

    function inputParamsToNumbers() {
        x1 = Number(x1);
        y1 = Number(y1);
        x2 = Number(x2);
        y2 = Number(y2);
        x = Number(x);
        y = Number(y);
    }

    function isOnBorder() {
        const isOnLeftBorder = x == x1 && y >= y1 && y <= y2;
        const isOnRightBorder = x == x2 && y >= y1 && y <= y2;
        const isOnTopBorder = y == y1 && x >= x1 && x <= x2;
        const isOnBottomBorder = y == y2 && x >= x1 && x <= x2;

        if (isOnLeftBorder || isOnRightBorder || isOnTopBorder || isOnBottomBorder) {
            return true;
        } else return false;
    }
}

pointOnBorder([2, -3, 12, 3, 12, -1]);