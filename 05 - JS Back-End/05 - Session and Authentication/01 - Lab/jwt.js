const jwt = require('jsonwebtoken');

const playload = { message: 'HI!' };
const secret = 'my-secret-key';
const token = jwt.sign(playload, secret, { expiresIn: '2d'});

const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiSEkhIiwiaWF0IjoxNjIzMjQ2NjgwLCJleHAiOjE2MjM0MTk0ODB9.qGwSAOlKibxzjsydjQYlyPs1gAAxy1_NqnUzOvgB-JM';

console.log(jwt.decode(myToken));
console.log(jwt.verify(myToken, secret));