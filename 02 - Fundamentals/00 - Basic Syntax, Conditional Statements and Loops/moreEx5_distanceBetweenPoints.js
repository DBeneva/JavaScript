function distanceBetweenPoints(x1, y1, x2, y2) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);

    let sideA = Math.abs(x1 - x2);
    let sideB = Math.abs(y1 - y2);
    let distance = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    
    console.log(distance);
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);