const express = require('express');
const handlebars = require('express-handlebars');
const fs = require('fs');

const app = express();
const port = 3000;

app.engine('hbs', handlebars());
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home', { layout: false });
});

app.get('/catalog', (req, res) => {
    const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));

    res.render('catalog', { layout: false, products });
});

app.get('/catalog/:serial_number', (req, res) => {
    const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'));
    const sn = req.params.serial_number;
    
    if (products.find(x => x.sn == sn)) {
        res.render('details', { layout: false, sn })
    } else {
        res.status(404);
        res.render('404', { layout: false, sn });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});