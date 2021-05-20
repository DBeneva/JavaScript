const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const formidable = require('formidable');
const breeds = require('../data/breeds.json');
const cats = require('../data/cats.json');

module.exports = (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const pathname = url.pathname;
    
    if (pathname == '/cats/add-cat' && req.method == 'GET') {
        const filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));

        const index = fs.createReadStream(filePath);
        index.on('data', (data) => res.write(data));
        index.on('end', () => res.end());
        index.on('error', (err) => res.write(err));       
    } else if (pathname == '/cats/add-breed' && req.method == 'GET') {
        const filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));

        const index = fs.createReadStream(filePath);
        index.on('data', (data) => res.write(data));
        index.on('end', () => res.end());
        index.on('error', (err) => res.write(err));  
    } else if (pathname == '/cats/add-breed' && req.method == 'POST') {
        let formData = '';

        req.on('data', (data) => {
            formData += data;
        });

        req.on('end', () => {
            let body = qs.parse(formData);
            console.log(body);

            fs.readFile('../data/breeds.json', (err, data) => {
                if (err) throw err;

                let breeds = JSON.parse(data);
                breeds.push(body.breed);
                let json = JSON.stringify(breeds);

                fs.writeFile('../data/breeds.json', json, 'utf-8', () => console.log('The breed has been added successfully!'));
            });

            res.writeHead(300, { 'Location': '/' });
            res.end();
        });
    } else if (pathname == '/cats/add-cat' && req.method == 'POST') {
        



    } else {
        return true;
    }
};