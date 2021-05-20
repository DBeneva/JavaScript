const fs = require('fs');

function getContentType(url) {
    if (url.endsWith('css')) {
        return 'text/css';
    } else if (url.endsWith('html')) {
        return 'text/html';
    } else if (url.endsWith('jpg')) {
        return 'image/jpeg';
    } else if (url.endsWith('ico')) {
        return 'image/vnd.microsoft.icon';
    } else if (url.endsWith('js')) {
        return 'text/javascript';
    }
}

module.exports = (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const pathname = url.pathname;

    if (pathname.startsWith('/content') && req.method == 'GET') {
        fs.readFile(`./${pathname}`, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);

                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.write('File not found');
                res.end();

                return;
            }

            res.writeHead(200, { 'Content-Type': getContentType(pathname) });
            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
};