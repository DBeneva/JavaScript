function pointInRectangle(x1, y1, x2, y2, x, y) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);
    x = Number(x);
    y = Number(y);

    const insideX = x >= x1 && x <= x2;
    const insideY = y >= y1 && y <= y2;
    
    if (insideX && insideY) {
        return 'Inside';
    } else {
        return 'Outside';
    }
}

function pointInRectangleTern(...input) {
    const [x1, y1, x2, y2, x, y] = input.map(Number);
    const insideX = x >= x1 && x <= x2;
    const insideY = y >= y1 && y <= y2;
    
    return insideX && insideY ? 'Inside' : 'Outside';
}

console.log(pointInRectangle(2, -3, 12, 3, 8, -1));

console.log('====================');

console.log(pointInRectangleTern(2, -3, 12, 3, 8, -1));
