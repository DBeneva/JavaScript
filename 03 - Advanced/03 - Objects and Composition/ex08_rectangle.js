function rectangle(width, height, color) {
    let rect = { width,
        height,
        color: capitalize(color),
        calcArea() {
            return this.width * this.height;
        }
    };
    
    return rect;

    function capitalize(string) {
        return string[0].toLocaleUpperCase() + string.slice(1);
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
