// initialize express app
// setup handlebars
// setup static files
// setup storage middleware
// set router handlers

const express = require('express');
const hbs = require('express-handlebars');

const { init: storage } = require('./models/storage');

const { about } = require('./controllers/about');
const { catalog } = require('./controllers/catalog');
const { create, post: createPost } = require('./controllers/create');
const { details } = require('./controllers/details');
const { notFound } = require('./controllers/notFound');
const { edit, post: editPost } = require('./controllers/edit');

start();

async function start() {
    const port = 3000;
    const app = express();

    app.engine('.hbs', hbs({ extname: '.hbs' }));
    app.set('view engine', '.hbs');
    app.use('/static', express.static('static'));
    app.use('/js', express.static('js'));
    app.use(express.urlencoded({ extended: false }));
    app.use(await storage());

    // routing table:
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:id', await details);
    app.get('/create', create);
    app.post('/create', createPost);
    app.get('/edit/:id', await edit);
    app.post('/edit/:id', await editPost);
    app.all('*', notFound);

    app.listen(port, () => console.log(`Server listening on port ${port}...`));
}