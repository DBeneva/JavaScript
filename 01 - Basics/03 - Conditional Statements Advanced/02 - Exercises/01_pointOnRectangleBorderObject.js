function pointOnBorder(input) {
    const [x1, y1, x2, y2, x, y] = input.map(Number);

    console.log(isOnBorder() ? 'Border' : 'Inside / Outside');

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

pointOnBorder([2, -3, 12, 3, 12, -1]);