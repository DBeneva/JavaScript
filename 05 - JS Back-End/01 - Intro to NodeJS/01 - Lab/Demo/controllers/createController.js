const formidable = require('formidable');
const database = require('../util/database');
const qs = require('querystring');

module.exports = (req, res) => {
    // const form = new formidable.IncomingForm();

    // form.parse(req, (err, fields, files) => {
    //     database.addItem(fields);

    //     res.writeHead(301, {
    //         'Location': '/catalog'
    //     });
    //     res.end();
    // });

    let body = '';
    req.on('data', data => {
        body += data.toString(); // 'name=item&serial=1234'
    });
    req.on('end', () => console.log(body));

    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();
};