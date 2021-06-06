const http = require('http');
const port = 3000;
const handlers = require('./handlers/index');

http.createServer((req, res) => {
    for (let handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }
}).listen(port);

// (req, res) => {
//     if (pathname == '/' && req.method == 'GET') {
//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 res.writeHead(404, { 'Content-Type': 'text/plain' });
//                 res.write('File not found');
//                 res.end();
//                 return;
//             }

//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write(data);
//             res.end();
//         });
//     } else {
//         return true;
//     }
// }