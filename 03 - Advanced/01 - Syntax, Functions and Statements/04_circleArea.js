function circleArea(arg) {
    if (typeof arg == 'number') {
        let area = Math.PI * (arg ** 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`);
    }
}

circleArea(5);