(function arrayExtension() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        if (!isNaN(n) && this[n] != undefined) {
            return this.slice(n);
        }
    }

    Array.prototype.take = function (n) {
        if (!isNaN(n) && this[n] != undefined) {
            return this.slice(0, n);
        }
    }

    Array.prototype.sum = function () {
        let sum = 0;

        for (let x of this) {
            sum += x;
        }

        return sum;
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})();

const testArray = [1, 2, 3];
console.log(testArray.average());