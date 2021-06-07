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
        index.on('data', (data) => {
            const catBreedPlaceholder = breeds.map(b => `<option value="${b}">${b}</option>`);
            const modifiedData = data.toString().replace('{{catBreeds}}', catBreedPlaceholder);
            res.write(modifiedData)
        });
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

            fs.readFile('./data/breeds.json', (err, data) => {
                if (err) throw err;

                const breeds = JSON.parse(data);
                breeds.push(body.breed);
                const json = JSON.stringify(breeds);

                fs.writeFile('./data/breeds.json', json, 'utf-8', () => console.log('The breed has been added successfully!'));
            });

            res.writeHead(301, { 'Location': '/' });
            res.end();
        });
    } else if (pathname == '/cats/add-cat' && req.method == 'POST') {
        let form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) throw err;

            const oldPath = files.upload.path;
            const newPath = path.normalize(path.join(__dirname, '../content/images/' + files.upload.name));
       
            fs.rename(oldPath, newPath, (err) => {
                if (err) throw err;

                console.log('File was uploaded successfully!');
            });

            fs.readFile('./data/cats.json', 'utf-8', (err, data) => {
                if (err) throw err;

                const cats = JSON.parse(data);
                cats.push({ id: cats.length + 1, ...fields, image: files.upload.name });
                const json = JSON.stringify(cats);

                fs.writeFile('./data/cats.json', json, 'utf-8', () => {
                    res.writeHead(301, { 'Location': '/' });
                    res.end();
                });
            });
        });
    } else if (pathname.includes('/cats-edit') && req.method == 'GET') {
        const filePath = path.normalize(path.join(__dirname, '../views/editCat.html'));
        const catId = pathname.split('/cats-edit/')[1];
        let currentCat = '';

        fs.readFile('./data/cats.json', (err, data) => {
            if (err) throw err;

            currentCat = JSON.parse(data).find(c => c.id == catId);
            
            const index = fs.createReadStream(filePath);
            index.on('data', (data) => {
                
                let modifiedData = data.toString().replace('{{id}}', catId);
                modifiedData = modifiedData.replace('{{name}}', currentCat.name);
                modifiedData = modifiedData.replace('{{description}}', currentCat.description);

                const breedsAsOptions = breeds.map(b => {
                    if (b == currentCat.breed) {
                        return `<option value="${b}" selected>${b}</option>`;
                    } else {
                        return `<option value="${b}">${b}</option>`;
                    }
                });

                modifiedData = modifiedData.replace('{{catBreeds}}', breedsAsOptions.join('/'));
                modifiedData = modifiedData.replace('{{breed}}', currentCat.breed);

                res.write(modifiedData);
            });
            index.on('end', () => res.end());
            index.on('error', (err) => res.write(err));
        });
    } else if (pathname.includes('/cats-find-new-home') && req.method == 'GET') {
        const filePath = path.normalize(path.join(__dirname, '../views/catShelter.html'));
        const catId = pathname.split('/cats-find-new-home/')[1];
        let currentCat = '';

        fs.readFile('./data/cats.json', (err, data) => {
            if (err) throw err;

            currentCat = JSON.parse(data).find(c => c.id == catId);
            
            const index = fs.createReadStream(filePath);
            index.on('data', (data) => {                
                console.log(currentCat.name, currentCat.breed);
                let modifiedData = data.toString().replace('{{id}}', catId);
                modifiedData = modifiedData.replace(new RegExp('{{name}}', 'g'), currentCat.name);
                modifiedData = modifiedData.replace('{{image}}', currentCat.image);
                modifiedData = modifiedData.replace('{{description}}', currentCat.description);
                modifiedData = modifiedData.replace(new RegExp('{{breed}}', 'g'), currentCat.breed);

                res.write(modifiedData);
            });
            index.on('end', () => res.end());
            index.on('error', (err) => res.write(err));
        });
    } else if (pathname.includes('/cats-edit/') && req.method == 'POST') {
        const catId = pathname.split('/cats-edit/')[1];
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) throw err;

            console.log(fields);
            fs.readFile('./data/cats.json', 'utf-8', (err, data) => {
                if (err) throw err;

                const cats = JSON.parse(data);
                const image = cats.find(c => c.id == catId).image;
                const index = cats.indexOf(cats.find(c => c.id == catId));
                cats.splice(index, 1, { id: catId, ...fields, image: image || files.upload.name });
                const json = JSON.stringify(cats);

                fs.writeFile('./data/cats.json', json, 'utf-8', () => {
                    res.writeHead(301, { 'Location': '/' });
                    res.end();
                });
            });
        });
    } else if (pathname.includes('/cats-find-new-home') && req.method == 'POST') {
        const catId = pathname.split('/cats-find-new-home/')[1];
        console.log(catId);

        fs.readFile('./data/cats.json', 'utf-8', (err, data) => {
            if (err) throw err;

            let cats = JSON.parse(data);
            cats = cats.filter(c => c.id != catId);
            console.log(cats);
            const json = JSON.stringify(cats);

            fs.writeFile('./data/cats.json', json, 'utf-8', () => {
                res.writeHead(301, { 'Location': '/' });
                res.end();
            });
        });
    } else {
        return true;
    }
};