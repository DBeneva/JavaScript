function getRectagleArea(a, b) {
    return a * b;
}

function getRectagleAreaObj(sideA, sideB) {
    const rectangle = {
        sideA,
        sideB,
        get area() {
            return sideA * sideB;
        }
    };

    return rectangle.area;
}

console.log(getRectagleArea(2, 7));

console.log('====================');

console.log(getRectagleAreaObj(2, 7));