const express = require('express');
const hbs = require('express-handlebars');

const catalog = require('./controllers/catalog');
const storage = require('./util/storage');
const home = require('./controllers/home');

async function start() {
    const port = 3000;
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.engine('.hbs', hbs({ extname: '.hbs', }));
    app.set('view engine', '.hbs');

    app.use(await storage()); // now all controllers will have the property storage: { getAll, getById }

    app.get('/', home);
    app.use('/catalog', catalog);

    app.listen(port, () => console.log(`Server listening on port ${port}...`));
}

start();