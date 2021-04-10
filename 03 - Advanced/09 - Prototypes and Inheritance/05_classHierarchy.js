function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(value) {
            this.units = value;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }

        get area() {
            return Math.PI * (this._radius ** 2);
        }

        get radius() {
            if (this.units == 'mm') {
                return this._radius * 10;
            } else if (this.units == 'm') {
                return this._radius / 100;
            } else if (this.units == 'cm') {
                return this._radius;
            }
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this._radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get area() {
            return this.width * this.height;
        }

        get width() {
            if (this.units == 'mm') {
                return this._width * 10;
            } else if (this.units == 'm') {
                return this._width / 10;
            } else if (this.units == 'cm') {
                return this._width;
            }
        }

        get height() {
            if (this.units == 'mm') {
                return this._height * 10;
            } else if (this.units == 'm') {
                return this._height / 100;
            } else if (this.units == 'cm') {
                return this._height;
            }
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return { Figure, Circle, Rectangle };
}