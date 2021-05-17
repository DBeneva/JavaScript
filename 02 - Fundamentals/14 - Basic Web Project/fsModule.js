const fs = require('fs');

const dataAsString = fs.readFileSync('./data.json', 'utf-8');
const data = JSON.parse(dataAsString);

console.log(data.name);
console.log(data.age);
console.log(data.position);

data.age++;
data.position = 'Developer';

fs.writeFileSync('./data2.json', JSON.stringify(data, null, 2), 'utf-8');

console.log(data.name);
console.log(data.age);
console.log(data.position);