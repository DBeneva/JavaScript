function pointOnSegment(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let point = Number(input[2]);
    let left = Math.min(first, second);
    let right = Math.max(first, second);
    
    if (point >= left && point <= right) {
        console.log('in');
    } else {
        console.log('out');
    }

    let distanceLeft = Math.abs(point - left);
    let distanceRight = Math.abs(point - right);
    let minDistance = Math.min(distanceLeft, distanceRight);
    
    console.log(minDistance);
}

pointOnSegment(['10', '5', '7']);