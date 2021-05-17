const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello, web!');
    res.end();
}).listen(1000);

console.log('Listening on port 1000');