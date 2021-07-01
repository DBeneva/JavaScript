console.log(this);

(() => console.log(this))();

(function myF() {
    console.log(this);
})();

(function myF() {
    'use strict';
    console.log(this);
})();