function generateRectangles(input) {
    let n = Number(input[0]);
    let minimumArea = Number(input[1]);
    let rectangles = 0;

    for (let left = n * -1; left < n; left++) {
        for (let top = n * -1; top < n; top++) {
            for (let right = left + 1; right <= n; right++) {
                for (let bottom = top + 1; bottom <= n; bottom++) {
                    let area = Math.abs(right - left) * Math.abs(bottom - top);
                    if (area >= minimumArea) {
                        console.log(`(${left}, ${top}) (${right}, ${bottom}) -> ${area}`);
                        rectangles++;
                    }
                }
            }
        }
    }

    if (rectangles == 0) {
        console.log('No');
    }
}

generateRectangles(['3', '36']);