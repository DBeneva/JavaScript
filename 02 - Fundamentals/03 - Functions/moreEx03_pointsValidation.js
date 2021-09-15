function pointsValidation(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    let distanceFirstToStart = findDistanceBetweenPoints(x1, y1, 0, 0);
    let distanceSecondToStart = findDistanceBetweenPoints(x2, y2, 0, 0);
    let distanceBetweenPoints = findDistanceBetweenPoints(x1, y1, x2, y2);

    if (isInteger(distanceFirstToStart)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (isInteger(distanceSecondToStart)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    
    if (isInteger(distanceBetweenPoints)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function findDistanceBetweenPoints(x1, y1, x2, y2) {
        let sideA = Math.abs(x1 - x2);
        let sideB = Math.abs(y1 - y2);
        let distance = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
        return distance;
    }

    function isInteger(number) {
        if (number % 1 == 0) {
            return true;
        } else {
            return false;
        }
    }
}

pointsValidation([2, 1, 1, 1]);