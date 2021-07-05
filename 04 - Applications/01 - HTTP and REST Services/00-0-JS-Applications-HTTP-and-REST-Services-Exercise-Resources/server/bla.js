function pow(pow, num) { return num ** pow; }
const sqr = pow.bind(null, 2);
console.log([2, 4, 12, 37].find(e => e > 100)); 
 