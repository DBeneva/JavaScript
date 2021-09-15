(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        let result = this.slice();

        if (result.slice(0, str.length) != str) {
            result = str + this;
        }

        return result;
    }

    String.prototype.ensureEnd = function (str) {
        let result = this.slice();

        if (result.slice(-str.length) != str) {
            result += str;
        }

        return result;
    }

    String.prototype.isEmpty = function () {
        return this == '' ? true : false;
    }

    String.prototype.truncate = function (n) {
        let result = this.slice();

        if (result.length > n) {
            if (result.includes(' ')) {
                while (result.length > n - 3) {
                    result = result.slice(0, result.lastIndexOf(' '));
                }

                result += '...';
            } else if (n >= 4) {
                result = `${result.slice(0, n - 3)}...`;
            } else {
                result = '.'.repeat(n);
            }
        }

        return result;
    }

    String.format = function (str, ...params) {
        let result = str;

        while (result.includes('{') && params.length > 0) {
            result = result.slice(0, result.indexOf('{')) +
                params.shift() +
                result.slice(result.indexOf('}') + 1);
        }

        return result;
    }
})();

var testString = 'the {0} brown {1} jumps over the {2} dog';
console.log(String.hasOwnProperty('format'));
console.log(String.format(testString, 'quick'));