"use strict";
function type(id, str) { return typeof id + typeof str; }
console.log(type(2, 'hello')); // 'numberstring'
