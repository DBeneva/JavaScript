const fs = require('fs');

module.exports = (req, res) => {
    const fileName = req.url.slice(8);
    const file = fs.createReadStream(`./static/${fileName}`);
    let type;

    if (fileName.endsWith('css')) {
        type = 'text/css';
    } else if (fileName.endsWith('html')) {
        type = 'text/html';
    } else if (fileName.endsWith('jpg') || fileName.endsWith('jpeg')) {
        type = 'image/jpeg';
    } else if (fileName.endsWith('png')) {
        type = 'image/png';
    }
    
    file.on('error', () => {
        res.statusCode = 404;
        res.write('Not Found');
        res.end();
    });
        
    file.once('data', data => {
        res.writeHead(200, {
           'Content-Type': type
        });
        send(data);
        file.on('data', send);
    });
    
    file.on('end', () => res.end());

    function send(data) {
        res.write(data);
    }
};