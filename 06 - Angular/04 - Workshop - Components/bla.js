let a = 1;
let b = a++ + ++a;
console.log(a, b); // 3 4

let c = 1;
let d = c++ - ++c;
console.log(c, d); // 3 -2

let e = 3;
let f = e++;
console.log(e, f); // 4 3

let g = 3;
let h = ++g;
console.log(g, h); // 4 4