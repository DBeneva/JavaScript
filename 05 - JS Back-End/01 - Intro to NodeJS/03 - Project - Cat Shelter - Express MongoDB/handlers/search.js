const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const cats = require('../data/cats.json');

module.exports = (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const pathname = url.pathname;

    if ((pathname == '/' || pathname.includes('/search')) && req.method == 'POST') {
        let form = new formidable.IncomingForm();
        let search = '';

        form.parse(req, (err, fields, files) => {
            if (err) throw err;
            search = fields.search.toLocaleLowerCase();
            console.log(search);

            res.writeHead(301, { 'Location': `/search/${search}` });
            res.end();
        });
    } else if (pathname.includes('/search') && req.method == 'GET') {
        const search = pathname.split('/search/')[1];

        const filePath = path.normalize(path.join(__dirname, '../views/search.html'));

        fs.readFile(filePath, (err, data) => {
            if (err) throw err;

            const filteredCats = cats
                .filter(c => c.name.toLocaleLowerCase().includes(search) ||
                    c.description.toLocaleLowerCase().includes(search) ||
                    c.breed.toLocaleLowerCase().includes(search));

            let modifiedCats;

            if (filteredCats.length == 0) {
                modifiedCats = `<p>Sorry, "${search}" not found :(</p>`;
            } else {
                modifiedCats = filteredCats
                    .map(c => `
                    <li>
                        <img src="${path.join('../content/images/', c.image)}" alt="${c.name}">
                        <h3>${c.name}</h3>
                        <p><span>Breed: </span>${c.breed}</p>
                        <p><span>Description: </span>${c.description}</p>
                        <ul class="buttons">
                            <li class="btn edit"><a href="/cats-edit/${c.id}">Change Info</a></li>
                            <li class="btn delete"><a href="/cats-find-new-home/${c.id}">New Home</a></li>
                        </ul>                
                    </li>`);
            }
            const modifiedData = data.toString().replace('{{cats}}', modifiedCats);

            res.write(modifiedData);
            res.end();
        });
    } else {
        return true;
    }
};